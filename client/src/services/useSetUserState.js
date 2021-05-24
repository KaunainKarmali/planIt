import { useEffect, useContext, useState } from "react";
import { UserContext } from "../Context";
import publicIp from "public-ip";
import { fetchUser, createUser } from "../api/index";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const useSetUserState = async () => {
  const { user, setUser } = useContext(UserContext);

  // Initialize an agent at application startup.
  const fpPromise = FingerprintJS.load();

  // local state: track whether user has been created or is required to be created
  const [created, setCreated] = useState(false);

  // get or create the user if it has not been created already. If condition is to prevent re-running function multiple times
  useEffect(() => {
    if (!created) {
      getOrCreateUser();
    }
  }, [user]);

  async function getOrCreateUser() {
    // Capture user ip address
    if (user.ip === "") {
      await fetchIpAddress();
    }

    // Get or create user
    else if (!created) {
      // Check the DB if user exists
      await fetchUser(user.ip).then(async (res) => {
        // Load the user as it was found in the DB
        if (res.status === 200) {
          setCreated(true);
          setUser(res.data);
        }

        // Create the user if it was not found in the DB
        if (res.status === 204) {
          await createUser(user).then((result) => {
            if (result.status === 201) {
              setCreated(true);
              setUser(result.data);
            } else {
              console.log(result);
            }
          });
        }

        // Error on fetching user
        if (res.status === 404) {
          console.log(res.message);
        }
      });
    }
  }

  // get user ip address
  async function fetchIpAddress() {
    setUser({
      ...user,
      ip: await publicIp.v4(),
    });
  }

  // get user fp
  async function fetchFp() {
    // Get the visitor identifier when you need it.
    const fp = await fpPromise;
    const result = await fp.get();

    // This is the visitor identifier:
    const visitorId = result.visitorId;
    console.log(visitorId);
    setUser({
      ...user,
      fp: visitorId,
    });
  }
};

export default useSetUserState;

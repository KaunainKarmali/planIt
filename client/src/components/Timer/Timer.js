import React, { useState, useContext, useEffect, useRef } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useStyles from "./styles";
import { Card, Typography, ThemeProvider } from "@material-ui/core";
import { UserContext, TimerContext } from "../../Context";
import { saveDuration } from "../../api";

export default function CreateItem(props) {
  const theme = globalThemes;
  const componentClasses = useStyles();

  const [duration, setDuration] = useState(0);
  const { activeTimer, setActiveTimer } = useContext(TimerContext);
  const { user, setUser } = useContext(UserContext);
  const { toggle } = props;

  let timer = useRef(null);

  useEffect(() => {
    handleToggler();
  }, [toggle]);

  useEffect(() => {
    setActiveTimer({ ...activeTimer, duration: duration });
  }, [duration]);

  async function handleToggler() {
    // false -> same id
    // save duration
    // turn off timer
    // reset activeTimer state

    // false -> diff id
    // save duration if itemId isnt blank
    // turn off timer
    // reset activeTimer state

    // true -> same id
    // do nothing

    // true -> diff id
    // save duration if itemId isnt blank
    // turn off timer
    // reset activeTimer state

    // scenario: clicked the same item button twice
    if ((toggle === false) & (activeTimer.newItem._id === activeTimer.itemId)) {
      console.log("Scenario 1");
      const response = await saveDuration(user._id, activeTimer);
      setActiveTimer({ ...activeTimer, newItemId: "" });
      await save();
      await stop();
      await resetState();

      // save time
      // stop timer
      // reset activeTimer state
    }

    // scenario: turn off timer
    else if (
      (toggle === false) &
      (activeTimer.newItem._id !== activeTimer.itemId)
    ) {
      console.log("Scenario 2");
      activeTimer.itemId !== "" && (await save());
      await stop();
      await resetState();

      // save duration if itemId isnt blank
      // turn off timer
      // reset activeTimer state
    }

    // scenario: turn on timer
    else if (
      (toggle === true) &
      (activeTimer.newItem._id === activeTimer.itemId)
    ) {
      console.log("Scenario 3");
      await resetState();
      await start();

      // reset new item
      // start timer
    }

    // scenario: jumped to another item to start
    else if (
      (toggle === true) &
      (activeTimer.newItem._id === activeTimer.itemId)
    ) {
      console.log("Scenario 4");
      activeTimer.itemId !== "" && (await save());
      await stop();
      await resetState();
      await start();

      // save duration if itemId isnt blank
      // turn off timer
      // reset activeTimer state
      // start timer
    }
  }

  async function save() {
    // only save if the toggle turns false and there is time elapsed to be saved
    if (duration > 0) {
      const response = await saveDuration(user._id, activeTimer);

      // Update user state if response is 201
      if (response.status === 201) {
        setUser(response);
      } else {
        console.log("ERROR");
        console.log(response);
      }
    }
  }

  async function start() {
    // start tracking time if toggle is true
    if (toggle) {
      timer.current = setInterval(countUp, 1000);
    }
  }

  async function stop() {
    if (!toggle) {
      clearInterval(timer.current);
      setDuration(0);
    }
  }

  async function resetState() {
    if (toggle === false) {
      setActiveTimer({
        newItem: {},
        itemId: "",
        itemName: "",
        date: "",
        duration: 0,
      });
    } else if (
      (toggle === true) &
      (activeTimer.newItem._id === activeTimer.itemId)
    ) {
      setActiveTimer({ ...activeTimer, newItem: "" });
    } else if (
      (toggle === true) &
      (activeTimer.newItem._id === activeTimer.itemId)
    ) {
      setActiveTimer({
        ...activeTimer,
        newItem: {},
        itemId: activeTimer.newItem._id,
        itemName: activeTimer.newItem.itemName,
        date: "",
        duration: 0,
      });
    }
  }

  // function handleClick() {
  //   setToggle(!toggle);
  // }

  function countUp() {
    setDuration((duration) => duration + 1);
  }

  return (
    <ThemeProvider theme={theme}>
      {/* Show timer if its set to true */}

      {toggle && (
        <div className={componentClasses.container}>
          <Card className={componentClasses.card}>
            <Typography variant="h6" component="h3">
              {formatDuration(duration)}
            </Typography>
          </Card>
        </div>
      )}
    </ThemeProvider>
  );
}

function formatDuration(duration) {
  let formatted = "";

  const days = Math.floor(duration / (60 * 60 * 24)); // seconds x 60 sec/min x 60 min/hr x 24 hr/day
  if (days >= 1) {
    formatted = `${formatted} ${days}d`;
    duration = duration - days * 60 * 60 * 24;
  }

  const hours = Math.floor(duration / (60 * 60)); // seconds x 60 sec/min x 60 min/hr
  if (hours >= 1) {
    formatted = `${formatted} ${hours}h`;
    duration = duration - hours * 60 * 60;
  }

  const minutes = Math.floor(duration / 60); // seconds x 60 sec/min
  if (minutes >= 1) {
    formatted = `${formatted} ${minutes}m`;
    duration = duration - minutes * 60;
  }

  if (duration >= 1) {
    formatted = `${formatted} ${duration}s`;
  }

  return formatted;
}

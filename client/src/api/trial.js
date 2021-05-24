import axios from "axios";

// create url link to the back end route
const url = "http://localhost:5000/trial";

// function to send new note to the back end
export async function createNote(ip, note, board) {
  return await axios.post(url, { ip, note, board });
}

// function to send new project to the back end
export async function createProject(userId, newProject) {
  return await axios.post(`${url}/create-project`, { userId, newProject });
}

export async function createItem(userId, projectId, newItem) {
  return await axios.post(`${url}/create-item`, {
    userId,
    projectId,
    newItem,
  });
}

export async function editItem(userId, projectId, edittedItem) {
  return await axios.post(`${url}/edit-item`, {
    userId,
    projectId,
    edittedItem,
  });
}

export async function deleteItem(userId, projectId, itemId) {
  return await axios.post(`${url}/delete-item`, {
    userId,
    projectId,
    itemId,
  });
}

export async function saveDuration(userId, timeObject) {
  return await axios.post(`${url}/save-duration`, {
    userId,
    timeObject,
  });
}

export async function loadDuration(userId, projectId, itemId) {
  return await axios.get(
    `${url}/load-duration?userId=${userId}&projectId=${projectId}&itemId=${itemId}`
  );
}

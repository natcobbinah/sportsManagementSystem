import axiosinstance from "./axiosInstance";

function getAllPlayers() {
  return axiosinstance.get("/player/getAllPlayers");
}

function addNewPlayer() {
  return axiosinstance.post("/player/registerPlayer");
}

function updatePlayer(id) {
  return axiosinstance.patch(`/player/updatePlayer/${id}`);
}

function deletePlayer(id) {
  return axiosinstance.delete(`/player/deletePlayer/${id}`);
}

export { getAllPlayers, addNewPlayer, updatePlayer, deletePlayer };

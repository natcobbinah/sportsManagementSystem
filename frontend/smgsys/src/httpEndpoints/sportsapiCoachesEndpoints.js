import axiosinstance from "./axiosInstance";

function getAllCoaches() {
  return axiosinstance.get("/coach/getAllCoaches");
}

function addNewCoachAccount() {
  return axiosinstance.post("/coach/createAccount");
}

function updateCoachAccount(id) {
  return axiosinstance.patch(`/coach/updateCoachAccount/${id}`);
}

function deleteCoachAccount(id) {
  return axiosinstance.delete(`/coach/deleteCoachById/${id}`);
}

export {
  getAllCoaches,
  addNewCoachAccount,
  updateCoachAccount,
  deleteCoachAccount,
};

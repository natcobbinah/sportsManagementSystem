import axiosinstance from "./axiosInstance";

function getAllSupporters() {
  return axiosinstance.get("/supporters/getAllSupporters");
}

function getAllSupporterCommentsByEmail(email) {
  return axiosinstance.get(`/supporters/getAllComments/${email}`);
}

function createNewSupporterAccount() {
  return axiosinstance.post("/supporters/createAccount");
}

function updateSupporterAccount(id) {
  return axiosinstance.patch(`/supporters/updateSupporterAccount/${id}`);
}

function deleteSupporterById(id) {
  return axiosinstance.delete(`/supporters/deleteSupporterById/${id}`);
}

export {
  getAllSupporters,
  getAllSupporterCommentsByEmail,
  createNewSupporterAccount,
  updateSupporterAccount,
  deleteSupporterById,
};

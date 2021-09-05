import axiosinstance from "./axiosInstance";

function registerUser() {
  return axiosinstance.get("/wall/register");
}

function loginUser() {
  return axiosinstance.get("/wall/login");
}

function getAllRegisteredUsers() {
  return axiosinstance.get("/wall/getAllRegisteredUsers");
}

function deleteRegisteredUser(id) {
  return axiosinstance.delete(`/wall/deleteRegisteredUser/${id}`);
}

export { registerUser, loginUser, getAllRegisteredUsers, deleteRegisteredUser };

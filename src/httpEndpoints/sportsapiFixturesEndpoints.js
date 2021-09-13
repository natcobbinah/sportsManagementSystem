import axiosinstance from "./axiosInstance";

function getAllFixtures() {
  return axiosinstance.get("/fixture/getFixtures");
}

function addNewFixture(data) {
  return axiosinstance.post("/fixture/addFixtures", data);
}

function updateFixture(id) {
  return axiosinstance.patch(`/fixture/updateFixtures/${id}`);
}

function deleteCoachFixture(id) {
  return axiosinstance.delete(`/fixture/deleteFixture/${id}`);
}

export { getAllFixtures, addNewFixture, updateFixture, deleteCoachFixture };

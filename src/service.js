import {
  register,
  fetchSession,
  sendForgotPasswordEmail,
  userLectures,
} from "./mockServer";

// import axios from "axios";

const SERVER_URL = "https://tellme-60d3c.firebaseio.com/";

export const fetchLectures = async (filter) => {
  return getAPI("lectures", { filter: filter.join(",") });
};

export const fetchLectureData = (id) => {
  return getAPI("lectureData", { id });
};

export const signIn = ({ email, password }) => {
  return postAPI("login", { email, password });
};

export const signUp = ({ email, password }) => {
  return postAPI("register", { email, password });
};

export const forgotPassword = ({ email }) => {
  return callServiceMock(sendForgotPasswordEmail(email));
};

export const fetchSessionData = (token) => {
  return callServiceMock(fetchSession(token));
};

export const fetchUserLectures = (userId) => {
  return callServiceMock(userLectures(userId));
};

const callServiceMock = (result) => {
  return new Promise((resolve) => {
    resolve(result);
  });
};

window.yogev = (data) => {
  console.warn(data);
};

const getAPI = async (path, params) => {
  var s = document.createElement("script");
  s.src = "https://tellme-60d3c.firebaseio.com/rest/?callback=yogev";
  document.body.appendChild(s);
  // return fetch("https://tellme-60d3c.firebaseio.com/rest/?callback=yogev")
  //   .then((response) => {
  //     console.warn(response);
  //     return response.json();
  //   })
  //   .then((json) => {
  //     return json;
  //   });
  // let data;
  // await axios
  //   .get(`${SERVER_URL}/${path}`, { params })
  //   .then(function (response) {
  //     // handle success
  //     data = response.data;
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
  // return data;
};

const postAPI = async (path, params) => {
  let data;
  // await axios
  //   .post(`${SERVER_URL}/${path}`, { params })
  //   .then(function (response) {
  //     // handle success
  //     data = response.data;
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
  // return data;
};

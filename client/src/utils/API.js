import axios from "axios";

export default {
  getMoviesAPI: function (service, type, genre, page) {
    return axios.get(
      "https://streaming-availability.p.rapidapi.com/search/pro",
      {
        params: {
          country: "us",
          service: service,
          type: type,
          order_by: "year",
          genre: genre,
          page: page,
          language: "en",
        },
        headers: {
          "x-rapidapi-key":
            "30f344500fmsh8f56d37bef3e83dp127a8cjsn4a7a31ba2c70",
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
      }
    );
  },
  getMovies: function () {
    console.log("In movie API");
    return axios.get("/api/movies");
  },

  findSessions: function () {
    return axios.get("api/sessions");
  },

  sendMoviesSQL: function (movieData) {
    return axios.post("/api/sendMovies", movieData.results);
  },
  sendChoice: function (movieData) {
    return axios.post("/api/sendChoice", movieData);
  },

  signUpUser: function (signUpData) {
    console.log("In API");
    console.log(signUpData);
    return axios.post("/api/signup", signUpData);
  },

  loginUser: function (loginData) {
    console.log("init login");
    return axios.post("/api/login", loginData);
  },

  findUsers: function () {
    return axios.get("/api/users");
  },

  makeFriend: function (friendData) {
    console.log(friendData);
    return axios.post("api/friend", friendData);
  },

  findFriends: function () {
    return axios.get("api/findfriends");
  },
  sessionStart: function (newSession) {
    console.log("api session");
    return axios.post("api/session",newSession);
  },
};

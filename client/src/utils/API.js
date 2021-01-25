import axios from "axios";

export default {
  getMovies: function (service, type, genre, page) {
    return axios.get("https://netflix-unofficial.p.rapidapi.com/api/search", {
      params: {
        country: "us",
        service: service,
        type: type,
        order_by: "year",
        genre: genre,
        page: page,
        desc: "true",
        language: "en",
      },
      headers: {
        "x-rapidapi-key": "30f344500fmsh8f56d37bef3e83dp127a8cjsn4a7a31ba2c70",
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
      },
    });
  },

  signUpUser: function (signUpData) {
    console.log("In API")
    console.log(signUpData)
    return axios.post("/api/signup", signUpData)
    
  },

  moviePage: function(){
    console.log("In movie API")
    return axios.get("/api/movies")
  }

};

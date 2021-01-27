import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {Route, Redirect, Link, useHistory } from "react-router-dom";

const genres = [
  { name: "Biography", value: 1 },
  { name: "Musical", value: 4 },
  { name: "Sport", value: 5 },
  { name: "Short", value: 6 },
  { name: "Adventure", value: 12 },
  { name: "Fantasy", value: 14 },
  { name: "Animation", value: 16 },
  { name: "Drama", value: 18 },
  { name: "Horror", value: 27 },
  { name: "Action", value: 28 },
  { name: "Comedy", value: 35 },
  { name: "History", value: 36 },
  { name: "Western", value: 37 },
  { name: "Thriller", value: 53 },
  { name: "Crime", value: 80 },
  { name: "Documentary", value: 99 },
  { name: "Science Fiction", value: 878 },
  { name: "Mystery", value: 9648 },
  { name: "Music", value: 10402 },
  { name: "Romance", value: 10749 },
  { name: "Family", value: 10751 },
  { name: "War", value: 10752 },
  { name: "News", value: 10763 },
  { name: "Reality", value: 10764 },
  { name: "Talk Show", value: 10767 },
];

const providers = ["Netflix", "Hulu", "Disney", "Prime"];
export default function Start() {
  const [provider, setProvider] = useState();
  const [mediatype, setType] = useState();
  const [genre, setGenre] = useState();
  const [movies, setMovies] = useState([]);
  let history = useHistory();
  useEffect(() => {
    console.log(movies);
    if (movies.length === 0) {
      console.log("nodata");
    } else {
      console.log("sql");
      API.sendMoviesSQL(movies).then( redirectMovies);
      console.log(movies)
       
    }
  }, [movies]);

   function sendData(e) {

    Promise.all([
      API.getMoviesAPI(provider.toLowerCase(), mediatype, genre, 1),
      API.getMoviesAPI(provider.toLowerCase(), mediatype, genre, 2),
      API.getMoviesAPI(provider.toLowerCase(), mediatype, genre, 3),
    ]).then((values) => {
      console.log(values[0].data.results,values[1].data.results,values[2].data.results);
      const test =([...movies,...values[0].data.results,...values[1].data.results,...values[2].data.results])
     setMovies(test)
      console.log(test)
    });
    // API.getMoviesAPI(provider.toLowerCase(), mediatype, genre, 1).then(
    //   (res) => {
    //     console.log(res.data)
    //     setMovies(res.data.results);

    //   }
    // );
    // API.getMoviesAPI(provider.toLowerCase(), mediatype, genre, 2).then(
    //   (res) => {
    //     setMovies(...movies, res.data);
    //   }
    // );
    // API.getMoviesAPI(provider.toLowerCase(), mediatype, genre, 3).then(
    //   (res) => {
    //     setMovies(...movies, res.data);
    //   }
    // );
   
  }


   function redirectMovies(){
    console.log("should redirect")
    history.push("/movies")
  }

  function sendMovies(movies) {}
  function handleProviderSelect(provider) {
    setProvider(provider);
    console.log(provider);
  }

  function handleTypeSelect(type) {
    setType(type);
    console.log(type);
  }

  function handleGenreSelect(genre) {
    setGenre(genre);
    console.log(genre);
  }

  return (
    <div>
      <Container main>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Lets set up your search preferences.</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Container main>
          <Row>
            <Col size="12">
              <Container main>
                <div className="centerContent">
                  <h3> Select your Streaming Providers</h3>
                  <form>
                    {" "}
                    {providers.length ? (
                      <>
                        {providers.map((provider) => (
                          <>
                            <div className="btn-group mx-2" key={provider}>
                              <input
                                onChange={() => handleProviderSelect(provider)}
                                type="radio"
                                className="btn-check"
                                name="options"
                                id={provider}
                              />
                              <label
                                className="btn btn-info"
                                htmlFor={provider}
                              >
                                {provider}
                              </label>
                            </div>
                          </>
                        ))}
                      </>
                    ) : (
                      <h3>Something went wrong!</h3>
                    )}
                    <div>
                      <h3 className="mt-3">Select Type</h3>
                      <div className="btn-group">
                        <input
                          onChange={() => handleTypeSelect("movie")}
                          type="radio"
                          className="btn-check"
                          name="type"
                          id="movie"
                        />
                        <label className="btn btn-primary" htmlFor="movie">
                          Movie
                        </label>
                      </div>
                      <div className="btn-group">
                        <input
                          onChange={() => handleTypeSelect("series")}
                          type="radio"
                          className="btn-check"
                          name="type"
                          id="series"
                        />
                        <label className="btn btn-primary" htmlFor="series">
                          TV
                        </label>
                      </div>
                    </div>
                    <div className="form-row centerContent">
                      <div className="col-auto my-1">
                        <label
                          className="mr-sm-2"
                          htmlFor="inlineFormCustomSelect"
                        >
                          <h3 className="mt-3">Select a Genre</h3>
                        </label>
                        <select
                          value={genre}
                          onChange={(e) => handleGenreSelect(e.target.value)}
                          className="custom-select mr-sm-2"
                          id="inlineFormCustomSelect"
                        >
                          <option defaultValue>Choose...</option>
                          {genres ? (
                            <>
                              {genres.map((genre) => (
                                <option key={genre.name} value={genre.value}>
                                  {genre.name}
                                </option>
                              ))}
                            </>
                          ) : (
                            <h3>Something went wrong!</h3>
                          )}
                        </select>
                      </div>
                    </div>
                  </form>
                  <div className="centerContent my-5">
                    <button
                      className="btn btn-success btn-lg"
                      type="submit"
                      onClick={sendData}
                    >
                      Lets Go!
                    </button>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
 
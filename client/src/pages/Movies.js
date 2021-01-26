import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { Input, FormBtn } from "../components/Form";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import SwiperChoice from "../components/SwipeChoice";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Movies() {
  const [movies, setMovies] = useState({});
 
  useEffect(() => {
    API.getMovies().then((res) => {
      console.log(res.data) 
 
      setMovies(res.data)
    }
    );
  }, []);
 
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1></h1>
            <h1></h1>
          </Jumbotron>
          <Container main>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {" "}
              {movies.length ? (
                <>
                  {movies.map(
                    (movie) => (
                      console.log(movie),
                      console.log(movie.img),
                      (
                        <>
                          <SwiperSlide key={movie.movieId}>
                            <SwiperChoice {...movie}/>
                          </SwiperSlide>
                     
                        </>
                      )
                    )
                  )}
                </>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Swiper>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Movies;

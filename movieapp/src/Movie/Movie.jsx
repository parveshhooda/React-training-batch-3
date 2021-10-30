import React from "react";
import "../css/movie.css";

function Movie(props) {
  return (
    <div>
      <img src={props.banner} alt="test" />
      <br></br>
      <lablel>{props.name}</lablel>
      <br></br>
      <lablel>{props.likes}</lablel>
    </div>
  );
}
export default Movie;

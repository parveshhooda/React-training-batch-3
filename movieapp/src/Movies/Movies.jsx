import React from "react";
import Movie from "../Movie/Movie.jsx";

class Movies extends React.Component {
  render() {
    return (
      <div>
        <Movie
          name="lion"
          likes="5"
          banner="https://static.toiimg.com/photo/msid-56734198/56734198.jpg?222477"
        />
        <Movie
          name="pk"
          likes="50"
          banner="https://www.bollywoodpresents.com/wp-content/uploads/pk-poster.jpg"
        />
        <Movie
          name="bharath"
          likes="125"
          banner="https://i.ytimg.com/vi/rhrZpkUb2bw/maxresdefault.jpg"
        />
      </div>
    );
  }
}
export default Movies;

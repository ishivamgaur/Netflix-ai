import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/slices/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTrailerVideo = (id) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movie.trailerVideo);

  const fetchDetailsOfMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );

    const data = await response.json();

    // console.log("MOVIE VIDEOS LIST: ", data.results);
    const movieVideoResults = data.results;

    let trailerOrAnyVideo =
      movieVideoResults.find((video) => video.type === "Trailer") ||
      data.results[0];

    dispatch(addTrailerVideo(trailerOrAnyVideo));
  };

  useEffect(() => {
    !trailerVideo && fetchDetailsOfMovie();
  }, [id]);
};

export default useTrailerVideo;

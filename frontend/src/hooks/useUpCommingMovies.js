import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComming } from "../store/slices/movieSlice";
import { useEffect } from "react";

const useUpCommingMovies = () => {
  const dispatch = useDispatch();

  const upCommingMovies = useSelector((store) => store.movie.upCommingMovies);

  const fetchUpCommingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );

      const data = await response.json();
      // console.log("Fetched movies: ", data.results);
      dispatch(addUpComming(data.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    !upCommingMovies && fetchUpCommingMovies();
  }, []);
};

export default useUpCommingMovies;

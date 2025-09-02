import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopular } from "../store/slices/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );

      const data = await response.json();
      // console.log("Fetched movies: ", data.results);
      dispatch(addPopular(data.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;

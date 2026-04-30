import React from "react";
import Headers from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {

  const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Headers /> 
      {showGPTSearch ? (<GPTSearch />) : (<> <MainContainer /><SecondaryContainer /> </>) }
      {/* <MainContainer />
      <SecondaryContainer /> */}
      <div>Browse</div>
    </div>
  );
};

export default Browse;

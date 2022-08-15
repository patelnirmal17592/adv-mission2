import React from "react";
import { Link } from "react-router-dom";
import { FindACar } from "../components/findACar/FindACar.jsx";

const Home = () => {
  return (
    <>
      <Link to='/'><FindACar /></Link>
    </>
  );
};

export default Home;

import React from "react";
import styles from "./FindACar.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const FindACar = () => {
  const [cars_data, setCars_data] = useState();

  const options = {
    params: { limit: "10", page: "0" },
    headers: {
      // 'X-RapidAPI-Key': '466ed600b7mshbf9aa0ca80277cbp1a919cjsnb46a8dcbbc88',
      "X-RapidAPI-Host": "car-data.p.rapidapi.com",
    },
  };

  const searchHandler = () => {};

  useEffect(() => {
    axios
      .get("https://car-data.p.rapidapi.com/cars?limit=10&page=0", options)
      .then((res) => setCars_data(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className={styles.search_container}>
      <div className={styles.wrapper}>
        <div className={styles.search_btn} onClick={searchHandler()}>
          Search
        </div>
        <div className={styles.search_content}>hello</div>
      </div>
    </div>
  );
};

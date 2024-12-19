import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import board from "../../css/Board.module.css";
import Grid from "./grid";
import Pagination from "./pagination";
import TopBtn from "../../global_component/TopBtn";

const Board = () => {
  const { pageNumber } = useParams<{ pageNumber: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  return (
    <>
      <div className={board.container}>
        <div className={board.image_box}>
          <p className={board.p}>Tittle(추후조정)</p>
          <Grid></Grid>
        </div>
      </div>
      <div id={board.pagination}>
        <Pagination></Pagination>
      </div>
      <div>
        <TopBtn></TopBtn>
      </div>
      <div>{/* <LoginModal></LoginModal> */}</div>
    </>
  );
};

export default Board;

import React, { useState } from "react";
import detail from "../../css/Detail.module.css";
import heart_s from "../../images/heart_s.svg";
import heart_fill from "../../images/heart_fill.svg";

const HeartButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      className={detail.heartButton}
      onClick={toggleLike}
      aria-label={isLiked ? "Unlike" : "Like"}
    >
      {isLiked ? (
        <img src={heart_fill} className={detail.heartFill} alt="Filled Heart" />
      ) : (
        <img src={heart_s} className={detail.heart} alt="Empty Heart" />
      )}
    </button>
  );
};

export default HeartButton;

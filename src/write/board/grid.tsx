import React, { useState, useEffect } from "react";
import board from "../../css/Board.module.css";
import ProductCard from "../board/productCard";
const Grid = () => {
  const [productData, setProductData] = useState({
    thumbnailUrl: "",
    profileImageUrl: "",
    profileName: "",
    productTitle: "",
  });

  useEffect(() => {
    // 백엔드 서버에서 데이터를 가져오는 함수
    const fetchProductData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/images/upload"); // 여기에 백엔드 API URL을 넣습니다.
        const data = await response.json();

        // 받아온 데이터를 state에 저장
        setProductData({
          thumbnailUrl: data.thumbnailUrl,
          profileImageUrl: data.profileImageUrl,
          profileName: data.profileName,
          productTitle: data.productTitle,
        });
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <>
      <div className={board.row} id={board.row1}>
        <div className={board.col}>
          <ProductCard
            thumbnaiImg={productData.thumbnailUrl}
            profileImg={productData.profileImageUrl}
            profileName={productData.profileName}
            productTitle={productData.productTitle}
          />
        </div>
        <div className={board.col}>Column</div>
        <div className={board.col}>Column</div>
      </div>
      <div className={board.row} id={board.row2}>
        <div className={board.col}>Column</div>
        <div className={board.col}>Column</div>
        <div className={board.col}>Column</div>
      </div>
      <div className={board.row} id={board.row3}>
        <div className={board.col}>Column</div>
        <div className={board.col}>Column</div>
        <div className={board.col}>Column</div>
      </div>
    </>
  );
};

export default Grid;

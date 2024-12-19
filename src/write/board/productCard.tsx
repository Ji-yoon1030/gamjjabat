import React from "react";
import board from "../../css/Board.module.css";
import img from "../../images/main1.png";

interface ProductCardProps {
  thumbnaiImg: string;
  profileImg: string;
  profileName: string;
  productTitle: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  thumbnaiImg,
  profileImg,
  profileName,
  productTitle,
}) => {
  return (
    <div className={board.card}>
      <div className={board.thumbnailContainer}>
        <img
          src={thumbnaiImg || img}
          className={board.thumbnail}
          alt="Product Thumbnail"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div className={board.contentContainer}>
        <div className={board.profileSection}>
          <div className={board.test1}>
            <img
              src={profileImg}
              className={board.profileImage}
              alt={profileName}
            />
          </div>
          <div className={board.test2}>
            <p className={board.profileName}>{profileName}</p>
          </div>
        </div>
        <div className={board.productInfo}>
          <h5 className={board.productTitle}>{productTitle}</h5>
          {/* <h5 className={board.productTitle}>{productTitle}</h5> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import bookmark from '../css/BookMark.module.css';

const items = [
  { name: '1번옷', price: '1nnnn원' },
  { name: '2번옷', price: '2nnnn원' },
  { name: '옷이름', price: '1nnnn원' },
  { name: '옷이름', price: '1nnnn원' },
  { name: '옷이름', price: '1nnnn원' },
  { name: '옷이름', price: '1nnnn원' },
  { name: '옷이름', price: '1nnnn원' },
  { name: '옷이름', price: '1nnnn원' }
];

const GridItem: React.FC<{ name: string; price: string }> = ({ name, price }) => (
    <div className={bookmark.item}>
      <div className={bookmark.image_placeholder}></div>
      <div className={bookmark.item_info}>
        <p>{name}<br />{price}</p>
        <select>
          <option className={bookmark.option}>사이즈를 선택하세요</option>
          <option className={bookmark.option} value="s">S</option>
          <option className={bookmark.option} value="m">M</option>
          <option className={bookmark.option} value="l">L</option>
        </select>
        <button>장바구니 담기</button>
      </div>
    </div>
);

const GridContainer: React.FC = () => {
  return (
      <div className={bookmark.grid_container} id={bookmark.grid_container}>
        {items.map((item, index) => (
            <GridItem key={index} name={item.name} price={item.price} />
        ))}
      </div>
  );
};

const BookMark: React.FC = () => {
  return (
      <div className={bookmark.container}>
        <h1>나의 북마크</h1>
        <GridContainer />
      </div>
  );
};

export default BookMark;

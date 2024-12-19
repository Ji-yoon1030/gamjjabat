import React, { useState, useEffect } from 'react';
import btn from '../css/TopBtn.module.css';
import { FaAngleUp } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlButton = () => {
    setIsVisible(true);
    setLastScrollY(window.scrollY);
  };

  const handelClick = () => {
    window.scrollTo(0, 0);
  };

  //   const btnClick = () => {
  //     <Route path="/post" element={<Post />} />;
  //   };

  useEffect(() => {
    window.addEventListener('scroll', controlButton);
    return () => {
      window.removeEventListener('scroll', controlButton);
    };
  }, [lastScrollY]);

  return (
    <>
      <div>
        {isVisible && (
          <button onClick={handelClick} className={btn.scroll_button}>
            <FaAngleUp />
          </button>
        )}
      </div>
      <div>
        <Link to="/post">
          <button className={btn.post_button}>
            <FaPlus />
          </button>
        </Link>
      </div>
    </>
  );
};

export default ScrollButton;

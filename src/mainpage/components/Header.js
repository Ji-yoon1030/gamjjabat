import React, { useState } from 'react';
import Main from '../main.module.css';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../../account/login/LoginModal';
import Logo from '../../images/Logo.png';
import SearchBar from '../../global_component/SearchBar';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
      <>
        <header>
          <div className={Main.top_banner}>쇼핑몰 새로운 소식~~~~</div>
          <div className={Main.box}>
            <button className={Main.logoButton} onClick={handleClick}>
              <img src={Logo} alt="Logo" />
            </button>
            <nav className={Main.searchbox}>
              <SearchBar />
            </nav>
            <nav className={Main.menuContainer}>
              <nav className={Main.menuContainer}>
                <Link to="/like" className={Main.iconLink}>
                  <FaRegHeart className={Main.icons}/>
                </Link>
                <FaRegUser className={Main.icons} onClick={openModal}/>
              </nav>
            </nav>
          </div>
        </header>
        <LoginModal isModalOpen={isModalOpen} closeModal={closeModal}/>
      </>
  );
};

export default Header;
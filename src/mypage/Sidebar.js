import React from "react";
import sidebar from './mypage.module.css'
import {Link, useNavigate} from "react-router-dom";

const Sidebar = () => {


    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return(
        <div className={sidebar.bar}>
            <div className={sidebar.logo} onClick={handleClick}>로고</div>
            <div className={sidebar.title}>마이 페이지</div>
            <div className={sidebar.subtitle}>
                <Link to="/mypage/loginInfo">로그인 정보</Link>
                <Link to="/mypage/profileEdit">프로필 관리</Link>
                <Link to="/mypage/addressBook">주소록</Link>
                <Link to="/mypage/notification">알림</Link>
            </div>
        </div>
    );
}

export default Sidebar;
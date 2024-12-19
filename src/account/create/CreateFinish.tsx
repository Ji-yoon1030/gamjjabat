import React from "react";
import createfinish from "../../css/CreateFinish.module.css";
import {useNavigate} from 'react-router-dom';

const CreateFinish: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
      <>
        <div className={createfinish.container}>
          <h1 className={createfinish.title}>회원가입이 완료 되었습니다.</h1>
          <div className={createfinish.info_box}>
            <div className={createfinish.info_row}>
              <div className={createfinish.info_item}>이름</div>
              <div className={createfinish.info_value}>이름</div>
            </div>

            <div className={createfinish.info_row}>
              <div className={createfinish.info_item}>아이디</div>
              <div className={createfinish.info_value}>아이디</div>
            </div>

            <div className={createfinish.info_row}>
              <div className={createfinish.info_item}>이메일</div>
              <div className={createfinish.info_value}>이메일</div>
            </div>
          </div>
          <button className={createfinish.btn} onClick={handleClick}>메인으로</button>
        </div>
      </>
  );
}

export default CreateFinish;
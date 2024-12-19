import React from "react";
import PW from '../css/FindPW.module.css';

const FindPW: React.FC = () => {
  return (
      <>
      <div className={PW.scroll_container}>
        <div className={PW.main_content}>
          <h1 className={PW.h1}>비밀번호 찾기</h1>
          <p className={PW.p}>회원님의 정보를 안전하게 보호하기 위해 비밀번호 찾기 <span
              className={PW.new_line}>절차를 진행합니다. 필요한 정보를 입력해 주세요.</span></p>
          <div className={PW.short_line}></div>
          <form className={PW.form}>
            <label className={PW.label} htmlFor="name">아이디</label>
            <input className={PW.input} type="text" id={PW.id} placeholder="아이디"></input>
            <label className={PW.label} htmlFor="name">이름</label>
            <input className={PW.input} type="text" id={PW.name} placeholder="이름"></input>
            <label className={PW.label} htmlFor="email">이메일</label>
            <input className={PW.input} type="email" id={PW.email} placeholder="이메일"></input>
            <button className={PW.button} type="submit">확인</button>
          </form>
        </div>
        <div className={PW.long_line}></div>
      </div>
</>
)
  ;
}

export default FindPW;
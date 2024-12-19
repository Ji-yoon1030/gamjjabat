import React from 'react';
import like from '../css/Like.module.css';

const Like: React.FC = () => {
  return(
      <>
        <body>
        <div className={like.scroll_container}>
          <div className={like.main_content}>
            <h1 className={like.h1}>비밀번호 찾기</h1>
            <p className={like.p}>회원님의 정보를 안전하게 보호하기 위해 비밀번호 찾기 <span
                className={like.new_line}>절차를 진행합니다. 필요한 정보를 입력해 주세요.</span></p>
            <div className={like.short_line}></div>
            <form className={like.form}>
              <label className={like.label} htmlFor="name">아이디</label>
              <input className={like.input} type="text" id={like.id} placeholder="아이디"></input>
              <label className={like.label} htmlFor="name">이름</label>
              <input className={like.input} type="text" id={like.name} placeholder="이름"></input>
              <label className={like.label} htmlFor="email">이메일</label>
              <input className={like.input} type="email" id={like.email} placeholder="이메일"></input>
              <button className={like.button} type="submit">확인</button>
            </form>
          </div>
        </div>
        </body>
      </>
  );
}
export default Like;
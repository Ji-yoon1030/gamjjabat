import React, { useRef } from "react";
import detail from "../../css/Detail.module.css";
import img2 from "../../images/shirt.svg";
import img3 from "../../images/pants.svg";
import img4 from "../../images/shoes.svg";
import HeartButton from "./HeartButton";
import CardSlider from "./CardSlider";
import defaultProfile from "../../images/default-profile.svg";

const Detail = () => {
  return (
    <>
      <div className={detail.section1}>
        {/* 여기 싹 수정해야함. 일단 임시 방편 */}
        <div className={detail.comment_item}>
          <img
            src={defaultProfile}
            alt="User Profile"
            className={detail.comment_profile}
          />
          <div className={detail.comment_content}>
            <div className={detail.comment_user_info}>
              <span className={detail.user_id}>user123</span>
            </div>
          </div>
        </div>
      </div>
      <div className={detail.section2}>
        <CardSlider></CardSlider>

        <div className={detail.info}>
          <div className={detail.info_in}>
            <img className={detail.img_1} src={img2} alt="profile" />
            <div className={detail.desc}>__옷 설명__</div>
          </div>

          <div className={detail.info_in}>
            <img className={detail.img_1} src={img3} alt="profile" />
            <div className={detail.desc}>__옷 설명__</div>
          </div>

          <div className={detail.info_in}>
            <img
              className={detail.img_1}
              id={detail.img4}
              src={img4}
              alt="profile"
            />
            <div className={detail.desc}>__옷 설명__</div>
          </div>
        </div>
      </div>
      <div className={detail.section3}>
        <div className={detail.func}>
          <HeartButton />
          {/* <img className={detail.heart} src={chat} alt="chat" /> */}
        </div>
        <div className={detail.comment_box}>
          <div className={detail.comment_input_wrapper}>
            <img
              src={defaultProfile}
              alt="User Profile"
              className={detail.comment_profile}
            />
            <input
              type="text"
              placeholder="댓글을 입력하세요..."
              className={detail.comment_input}
            />
            <button className={detail.comment_submit}>게시</button>
          </div>

          <div className={detail.comment_list}>
            <div className={detail.comment_item}>
              <img
                src={defaultProfile}
                alt="User Profile"
                className={detail.comment_profile}
              />
              <div className={detail.comment_content}>
                <div className={detail.comment_user_info}>
                  <span className={detail.user_id}>user123</span>
                  <span className={detail.comment_time}>2시간 전</span>
                </div>
                <p className={detail.comment_text}>멋진 코디네요! 👍</p>
              </div>
            </div>

            <div className={detail.comment_item}>
              <img
                src={defaultProfile}
                alt="User Profile"
                className={detail.comment_profile}
              />
              <div className={detail.comment_content}>
                <div className={detail.comment_user_info}>
                  <span className={detail.user_id}>fashion_lover</span>
                  <span className={detail.comment_time}>3시간 전</span>
                </div>
                <p className={detail.comment_text}>어디서 구매하셨나요?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

/*import React from "react";
import Header from "../mainpage/components/Header";
import Sidebar from "./Sidebar";
import MypageContainer from "./MypageContainer";
import mypage from './mypage.module.css';

const Notification = () => {
    return(
        <>
            <Header/>
            <div className={mypage.notification}>
                <Sidebar/>
                <MypageContainer
                    pageText="알림"
                    optionTexts={[
                        { text: "푸시 알림", link: "#push-notifications" },
                        { text: "이메일 알림", link: "#email-notifications" }
                    ]}/>
            </div>
        </>
    );
}

export default Notification;*/

import React, { useState } from "react";
import Header from "../mainpage/components/Header";
import Sidebar from "./Sidebar";
import MypageContainer from "./MypageContainer";
import mypage from './mypage.module.css';

const Notification = () => {
    const [optionTexts, setOptionTexts] = useState([
        { text: "푸시 알림", link: "#push-notifications", isActive: false },
        { text: "이메일 알림", link: "#email-notifications", isActive: false }
    ]);

    // 토글 상태 변경 함수
    const onToggleSwitch = (index) => {
        setOptionTexts((prevState) =>
            prevState.map((option, idx) =>
                idx === index ? { ...option, isActive: !option.isActive } : option
            )
        );
    };

    return(
        <>
            <Header/>
            <div className={mypage.notification}>
                <Sidebar/>
                <MypageContainer
                    pageText="알림"
                    optionTexts={optionTexts}
                    onToggleSwitch={onToggleSwitch}
                />
            </div>
        </>
    );
}

export default Notification;


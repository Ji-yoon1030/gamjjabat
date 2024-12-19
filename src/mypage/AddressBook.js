import React, {useState} from "react";
import Header from "../mainpage/components/Header";
import Sidebar from "./Sidebar";
import MypageContainer from "./MypageContainer";
import mypage from './mypage.module.css';

const Address = () => {
    const [optionTexts, setOptionTexts] = useState([
        {text: "서울특별시 노원구 ..", isActive: false, isDisabled: true}
    ]);

    const onToggleSwitch = (index) => {
        setOptionTexts((prevState) =>
            prevState.map((option, idx) =>
                idx === index && !option.isDisabled ? { ...option, isActive: !option.isActive } : option
            )
        );
    };

    return(
        <>
            <Header/>
            <div className={mypage.address}>
                <Sidebar/>
                <MypageContainer
                    pageText="주소록"
                    page1Text="새 배송지 추가"
                    optionTexts={optionTexts}
                    onToggleSwitch={onToggleSwitch}
                />
            </div>
        </>
    );
}

export default Address;


import React from "react";
import page from './mypage.module.css';
import Header from "../mainpage/components/Header";
import Sidebar from "./Sidebar";
import ProfileContainer from "./ProfileContainer";

const Account = () => {
    const fields = [
        { title: '프로필 정보',
            labels: [
                {label:'이름', value: ''},
                {label:'소개', value: ''}
            ]
        },
        { title: '프로필 공개 범위',
            labels: [
                {label:'비공개 계정'}
            ]

        }
    ];

    return (
        <>
            <Header />
            <div className={page.accountarr}>
                <Sidebar />
                <ProfileContainer
                    pageText="프로필 관리"
                    fields={fields}
                />
            </div>
        </>
    );
}

export default Account;
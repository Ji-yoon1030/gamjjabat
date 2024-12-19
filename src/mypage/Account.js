import React from "react";
import page from './mypage.module.css';
import Header from "../mainpage/components/Header";
import Sidebar from "./Sidebar";
import AccountContainer from "./AccountContainer";

const Account = () => {
    const fields = [
        { title: '내 계정',
            labels: [
                {label:'아이디', value: 'qwer'},
                {label:'비밀번호', value: '123456789'},
                {label: '이메일 주소', value: 'abcd@naver.com'}
            ]
        }
    ];

    return (
        <>
            <Header />
            <div className={page.accountarr}>
                <Sidebar/>
                <AccountContainer
                    pageText="로그인 정보"
                    fields={fields}
                />
            </div>
        </>
    );
}

export default Account;

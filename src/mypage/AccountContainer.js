import React from "react";
import page from './mypage.module.css';

const AccountContainer = ({pageText, fields, onLogout,onDeleteAccount}) => {
    return (
        <div className={page.account}>
            <div className={page.pagetitle}>{pageText}</div>
            <hr/>
            <div className={page.field}>
                {fields.map((field, index) => (
                    <div key={index}>
                        <p className={page.fieldtitle}>{field.title}</p>
                        {field.labels.map((label, idx) => (
                            <div key={idx} className={page.subinfo}>
                                <span className={page.label}>{label.label}</span>
                                <span className={page.value}>{label.value}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className={page.labelContainer}>
                <span className={page.logoutLabel} onClick={onLogout}>로그아웃</span>
                <span className={page.deleteLabel} onClick={onDeleteAccount}>회원 탈퇴</span>
            </div>
        </div>
    );
}

export default AccountContainer;


/*
import React from "react";
import page from './mypage.module.css';

const MypageContainer= ({pageText,page1Text,optionTexts})=>{
    return(
        <>
            <div className={page.mypage}>
                <div className={page.pagetitle}>{pageText}</div>
                <div className={page.pageoption}>
                    <a href="#new_address">{page1Text}</a>
                </div>
                <hr/>
                <div>
                    {optionTexts.map((option, index) => (
                        <p className={page.option} key={index}>
                            {option.text}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MypageContainer;*/

import React from "react";
import page from './mypage.module.css';

const MypageContainer = ({pageText, page1Text, optionTexts, onToggleSwitch}) => {
    return (
        <>
            <div className={page.mypage}>
                <div className={page.pagetitle}>{pageText}</div>
                <div className={page.pageoption}>
                    <a href="#new_address">{page1Text}</a>
                </div>
                <hr/>
                <div>
                    {optionTexts.map((option, index) => (
                        <div className={page.optionContainer} key={index}>
                            <p className={page.option}>
                                {option.text}
                            </p>
                            <div
                                className={`${page.toggleSwitch} ${option.isActive ? 'active' : ''} ${option.isDisabled ? 'disabled' : ''}`}
                                onClick={() => onToggleSwitch(index)}
                            >
                                <div className={page.toggleButton}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MypageContainer;


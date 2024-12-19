import React, { useState } from 'react';
import post from '../postpage/tagpage.module.css';
import Header from "../mainpage/components/Header";

const TagPage = () => {
    const [productName, setProductName] = useState('');
    const [productLink, setProductLink] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSubmit = () => {
        // form 제출 시 필요한 로직을 작성
        console.log('옷 이름:', productName);
        console.log('링크 입력:', productLink);
        console.log('옷 종류:', selectedCategory);
    };

    return (
        <>
            <Header />
            <div className={post.container}>
                <h1 className={post.title}>상품 정보 입력</h1>
                <hr className={post.separator} />

                <div className={post.formGroup}>
                    <label className={post.label}>옷 이름</label>
                    <input
                        type="text"
                        className={post.input}
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="옷 이름을 입력하세요"
                    />
                </div>

                <div className={post.formGroup}>
                    <label className={post.label}>링크 입력</label>
                    <input
                        type="text"
                        className={`${post.input} ${post.linkInput}`}
                        value={productLink}
                        onChange={(e) => setProductLink(e.target.value)}
                        placeholder="상품 링크를 입력하세요"
                    />
                </div>

                <div className={post.formGroup}>
                    <label className={post.label}>옷 종류</label>
                    <div className={post.categoryContainer}>
                        {['상의', '하의', '신발', '기타'].map((category) => (
                            <button
                                key={category}
                                className={`${post.categoryButton} ${selectedCategory === category ? post.active : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <button className={post.submitButton} onClick={handleSubmit}>
                    태그하기
                </button>
            </div>
        </>
    );
};

export default TagPage;

import React, { useState } from 'react';
import Header from '../mainpage/components/Header';
import post from '../postpage/postpage.module.css';
import { useNavigate } from 'react-router-dom';
import PostImage from '../write/post/postimage';

const Post = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tags, setTags] = useState(['', '', '', '']);
  const navigate = useNavigate();
  const handleTagChange = (index: number, value: string) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const handleAddTagClick = () => {
    navigate('/post/tag');
  };

  return (
    <>
      <Header />
      <div className={post.container}>
        <h1 className={post.title}>코디 정보</h1>
        <hr className={post.separator} />

        <div className={post.formGroup}>
          <label className={post.label}>사진 첨부 (0/12)</label>
          <PostImage />
          {/* <div className={post.imageUpload}>
            <div className={post.imageBox}>
              <PostImage></PostImage>
            </div>
          {/* <div className={post.imageUpload}>
            <div className={post.imageBox}>
              <PostImage></PostImage>
            </div>
          </div> */}
        </div>

        <div className={post.relatedTagSection}>
          <div className={post.tagBox}>
            <span className={post.tagText}>
              관련 상품 태그
              <br />
              <span className={post.tagSubText}>상품을 태그해 보세요.</span>
            </span>

            <button className={post.addButton} onClick={handleAddTagClick}>
              +
            </button>
          </div>
        </div>

        <div className={post.formGroup}>
          <label className={post.label}>제목</label>
          <input
            type="text"
            className={post.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </div>

        <div className={post.formGroup}>
          <label className={post.label}>본문 입력</label>
          <textarea
            className={post.textArea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="본문을 입력하세요"
          />
        </div>

        <div className={post.formGroup}>
          <label className={post.label}>태그 입력</label>
          <div className={post.tagContainer}>
            {tags.map((tag, index) => (
              <input
                key={index}
                type="text"
                className={post.tagInput}
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
                placeholder={`#태그 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={post.buttonContainer}>
          <button className={post.saveButton}>임시저장</button>
          <button className={post.submitButton}>글쓰기</button>
        </div>
      </div>
    </>
  );
};

export default Post;

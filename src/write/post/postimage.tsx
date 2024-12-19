import React, { useState } from 'react';
import post from '../../css/Post.module.css';

const PostImage: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files);
      if (selectedImages.length + images.length > 12) {
        alert('최대 12장의 이미지만 업로드할 수 있습니다.');
        return;
      } else if (selectedImages.length < 1) {
        alert('최소 2장의 이미지를 업로드해야 합니다.');
        return;
      }
      setImages([...images, ...selectedImages]);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  // const handleSaveDraft = () => {
  //   console.log('Draft saved', { images, title, content });
  // };

  // const handleSavePost = () => {
  //   console.log('Post saved', { images, title, content });
  // };

  return (
      <div className={`container mt-5 ${post.createPostContainer}`}>
        <div className="form-group mt-4">
          <button
              type="button"
              className={post.uploadButton}
              onClick={() => document.getElementById('imageUpload')?.click()}
          >
            이미지 선택 영역
          </button>
          <input
              type="file"
              className={post.hiddenInput}
              id="imageUpload"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
          />
          <div className={post.imagePreviewContainer}>
            {images.map((image, index) => (
                <div key={index} className={post.imagePreviewWrapper}>
                  <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className={post.imagePreview}
                  />
                  <button
                      type="button"
                      className={post.removeButton}
                      onClick={() => removeImage(index)}
                  >
                    &times;
                  </button>
                </div>
            ))}
          </div>
        </div>
        {/*
      <div className="form-group mt-4">
        <label htmlFor="postTitle" className={post.label}>
          제목
        </label>
        <input
          type="text"
          className={`form-control ${post.input}`}
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="postContent" className={post.label}>
          본문 내용
        </label>
        <textarea
          className={`form-control ${post.textarea}`}
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          placeholder="내용을 입력하세요"
        />
      </div>
      <div className={post.btnContainer}>
        <button className={post.button_draft} onClick={handleSaveDraft}>
          임시저장
        </button>
        <button className={post.button_post} onClick={handleSavePost}>
          글쓰기
        </button>
      </div>*/}
      </div>
  );
};

export default PostImage;
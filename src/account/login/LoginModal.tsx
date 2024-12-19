import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../css/LoginModal.module.css";

const LoginModal = ({ isModalOpen, closeModal }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/members/login", {
        // 하드코딩된 URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/");
        closeModal();
      } else if (response.status === 401) {
        setError("이메일 또는 비밀번호가 잘못되었습니다.");
      } else {
        setError("서버 오류가 발생했습니다. 나중에 다시 시도하세요.");
      }
    } catch (error) {
      setError("네트워크 오류가 발생했습니다. 인터넷 연결을 확인하세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className={Modal.modal} onClick={handleModalClick}>
      <div className={Modal.modal_content}>
        <h1 className={Modal.title}>로그인</h1>
        <div className={Modal.long_line}></div>

        <div className={Modal.input_container}>
          <input
            className={Modal.email}
            placeholder="이메일을 입력하세요"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={Modal.input_container}>
          <input
            className={Modal.password}
            placeholder="비밀번호를 입력하세요"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className={Modal.login_btn}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </button>

        {error && <p className={Modal.error}>{error}</p>}

        <div className={Modal.links_container}>
          <div>
            <Link to="/findid" className={Modal.find_ID}>
              <span className={Modal.find_ID} onClick={closeModal}>
                아이디 찾기
              </span>
            </Link>
            <Link to="/findpw" className={Modal.find_PW}>
              <span className={Modal.find_PW} onClick={closeModal}>
                비밀번호 찾기
              </span>
            </Link>
          </div>
          <Link to="/create" className={Modal.create}>
            <span className={Modal.create} onClick={closeModal}>
              회원가입
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

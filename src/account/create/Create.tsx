import React from "react";
import create from "../../css/Create.module.css";
import FormGroup from "./FormGroup";
import Term from "./Term";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Create: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-finish");
  };

  const [formData, setFormData] = useState({
    name: "",
    userID: "",
    password: "",
    confirmPassword: "",
    number: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return navigate("/create");
    }

    try {
      const response = await fetch("172.30.1.16/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("회원가입이 완료되었습니다!");
        console.log("Response:", data);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버와의 통신 중 오류가 발생했습니다.");
    }
  };

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox6: false,
  });

  const handleAgreeAll = () => {
    const newState = {
      checkbox1: !checkboxes.checkbox1,
      checkbox2: !checkboxes.checkbox1,
      checkbox3: !checkboxes.checkbox1,
      checkbox4: !checkboxes.checkbox1,
      checkbox6: !checkboxes.checkbox1,
    };
    setCheckboxes(newState);
  };

  return (
    <>
      <div id={create.container_top}>
        <p className={create.title}>회원가입</p>
        <FormGroup
          label="회원인증"
          type="text"
          id={"member"}
          onChange={handleChange}
        />
        <FormGroup
          label="이름"
          type="text"
          id={"name"}
          value={formData.name}
          onChange={handleChange}
        />
        <FormGroup
          label="아이디"
          type="text"
          id={"userID"}
          value={formData.userID}
          onChange={handleChange}
          info="(영문소문자/숫자, 4~16자)"
        />
        <FormGroup
          label="비밀번호"
          type="password"
          id={"password"}
          value={formData.password}
          onChange={handleChange}
          info="(영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8~16자)"
        />
        <FormGroup
          label="비밀번호 확인"
          type="password"
          id={"confirmPassword"}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <FormGroup
          label="전화번호"
          type="text"
          id={"number"}
          value={formData.number}
          onChange={handleChange}
        />
        <FormGroup
          label="이메일"
          type="text"
          id={"email"}
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div id={create.container_bottom}>
        <p
          className={create.title}
          onClick={handleAgreeAll}
          style={{ cursor: "pointer" }}
        >
          전체동의
        </p>
        <div id={create.term1} className={create.term_top}>
          <input
            id={create.checkbox1}
            className={create.checkbox}
            type="checkbox"
            checked={checkboxes.checkbox1}
            onChange={handleAgreeAll}
          />
          <span className={create.agree_title}>
            이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
            동의합니다.
          </span>
        </div>
        <Term
          title="[필수] 이용약관 동의"
          checkboxId="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={(e) =>
            setCheckboxes({ ...checkboxes, checkbox2: e.target.checked })
          }
          question="이용약관에 동의하십니까?"
          agreementText="동의함"
        >
          <span>
            제1조(목적)이 약관은 주식회사 감자밭(전자상거래 사업자)가 운영하는
            감자밭 공식 홈페이지(이하 “몰”이라 한다)에서 제공하는 인터넷 관련
            서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의
            권리, 의무 및 책임사항을 규정함을 목적으로 합니다. ※「PC통신, 무선
            등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이
            약관을 준용합니다.」
          </span>
          <br></br>
          <br></br>
          <span>
            제2조(정의) ① “몰”이란 주식회사 감자밭 재화 또는 용역(이하 “재화
            등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를
            이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며,
            아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다. ②
            “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를
            받는 회원 및 비회원을 말합니다. ③ ‘회원’이라 함은 “몰”에 회원등록을
            한 자로서, 지속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를
            말합니다. ④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는
            서비스를 이용하는 자를 말합니다.
          </span>
          <br></br>
          <br></br>
          <span>
            제3조 (약관 등의 명시와 설명 및 개정) ① “몰”은 이 약관의 내용과 상호
            및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는
            곳의 주소를 포함), 전화번호, 모사전송번호, 전자우편주소,
            사업자등록번호, 통신판매업 신고번호, 개인정보보호책임자등을 이용자가
            쉽게 알 수 있도록 쓰리타임즈 공식 홈페이지의 초기 서비스화면(전면)에
            게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수
            있도록 할 수 있습니다. ② “몰은 이용자가 약관에 동의하기에 앞서
            약관에 정하여져 있는 내용 중 청약철회, 배송책임, 환불조건 등과 같은
            중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는
            팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다. ③ “몰”은
            「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한
            법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」,
            「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」,
            「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지
            않는 범위에서 이 약관을 개정할 수 있습 니다. ④ “몰”이 약관을 개정할
            경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의
            초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
            다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일
            이상의 사전 유예기간을 두고 공지합니다. 이 경우 “몰“은 개정 전
            내용과 개정 후 내용을 명확하게 비 교하여 이용자가 알기 쉽도록
            표시합니다. ⑤ “몰”이 약관을 개정할 경우에는 그 개정약관은 그
            적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된
            계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미
            계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을
            제3항에 의한 개정약관의 공지기간 내에 “몰”에 송신하여 “몰”의 동의를
            받은 경우에는 개정약관 조항이 적용됩니다. ⑥ 이 약관에서 정하지
            아니한 사항과 이 약관의 해석에 관하여는 자상거래 등에서의
            소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가
            정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에
            따릅니다.
          </span>
          <br></br>
          <br></br>
          <span>
            제4조(서비스의 제공 및 변경) ① “몰”은 다음과 같은 업무를 수행합니다.
            1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결   2.
            구매계약이 체결된 재화 또는 용역의 배송   3. 기타 “몰”이 정하는 업무
            ② “몰”은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는
            장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수
            있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를
            명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.
            ③ “몰”이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의
            품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를
            이용자에게 통지 가능한 주소로 즉시 통지합니다. ④ 전항의 경우 “몰”은
            이로 인하여 이용자가 입은 손해를 배상합니다. 다만, “몰”이 고의 또는
            과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
          </span>
          <br></br>
          <br></br>
          <span>
            제5조(서비스의 중단) ① “몰”은 컴퓨터 등 정보통신설비의 보수점검,
            교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의
            제공을 일시적으로 중단할 수 있습니다. ② “몰”은 제1항의 사유로
            서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가
            입은 손해에 대하여 배상합니다. 단, “몰”이 고의 또는 과실이 없음을
            입증하는 경우에는 그러하지 아니합니다. ③ 사업종목의 전환, 사업의
            포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는
            경우에는 “몰”은 제8조에 정한 방법으로 이용자에게 통지하고 당초
            “몰”에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, “몰”이
            보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는
            적립금 등을 “몰”에서 통용되는 통화가 치에 상응하는 현물 또는
            현금으로 이용자에게 지급합니다.
          </span>
          <br></br>
          <br></br>
          <span>
            제6조(회원가입) ① 이용자는 “몰이 정한 가입 양식에 따라 회원정보를
            기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을
            신청합니다. ② “몰”은 제1항과 같이 회원으로 가입할 것을 신청한 이용자
            중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.   1.
            가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한
            적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한
            자로서 “몰”의 회원재가입 승낙을 얻은 경우에는 예외로 한다.   2. 등록
            내용에 허위, 기재누락, 오기가 있는 경우   3. 기타 회원으로 등록하는
            것이 “몰”의 기술상 현저히 지장이 있다고 판단되는 경우 ③
            회원가입계약의 성립 시기는 “몰”의 승낙이 회원에게 도달한 시점으로
            합니다. ④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한
            기간 이내에 “몰”에 대하여 회원정보 수정 등의 방법으로 그 변경사항을
            알려야 합니다.
          </span>
        </Term>

        <Term
          title="[필수] 개인정보 수집 및 이용 동의"
          checkboxId="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={(e) =>
            setCheckboxes({ ...checkboxes, checkbox3: e.target.checked })
          }
          question="개인정보 수집 및 이용에 동의하십니까? "
          agreementText="동의함"
        >
          <span>
            ** 본 양식은 쇼핑몰 운영에 도움을 드리고자 샘플로 제공되는 서식으로
            쇼핑몰 운영형태에 따른 수정이 필요합니다. 쇼핑몰에 적용하시기 전,
            쇼핑몰 운영 사항 등을 확인하시고 적절한 내용을 반영하여 사용하시기
            바랍니다. **
          </span>
          <br></br>
          <br></br>
          <span>1. 개인정보 수집목적 및 이용목적</span>
          <br></br>
          <br></br>
          <span>
            가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
          </span>
          <br></br>
          <br></br>
          <span>
            콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 ,
            금융거래 본인 인증 및 금융 서비스
          </span>
          <br></br>
          <br></br>
          <span>나. 회원 관리</span>
          <br></br>
          <br></br>
          <span>
            회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정
            이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세
            미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등
            민원처리 , 고지사항 전달
          </span>
          <br></br>
          <br></br>
          <span>다. 마케팅 및 광고에 활용</span>
        </Term>

        <Term
          title="[선택] 쇼핑정보 수신 동의"
          checkboxId="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={(e) =>
            setCheckboxes({ ...checkboxes, checkbox4: e.target.checked })
          }
          question="SMS 수신에 동의하십니까?"
          agreementText="동의함"
          // additionalCheckboxes={[
          //   {
          //     id: "checkbox6",
          //     question: "이메일 수신에 동의하십니까?",
          //     agreementText: "동의함",
          //   },
          // ]}
        >
          <span>
            할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는 유익한
            쇼핑정보를 SMS나 이메일로 받아보실 수 있습니다.
          </span>
          <br></br>
          <br></br>
          <span>
            단, 주문/거래 정보 및 주요 정책과 관련된 내용은 수신동의 여부와
            관계없이 발송됩니다.
          </span>
          <br></br>
          <br></br>
          <span>
            가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
          </span>
          <br></br>
          <br></br>
          <span>
            콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 ,
            금융거래 본인 인증 및 금융 서비스
          </span>
          <br></br>
          <br></br>
          <span>
            선택 약관에 동의하지 않으셔도 회원가입은 가능하며, 회원가입 후
            회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.
          </span>
        </Term>
      </div>
      <form onSubmit={handleSubmit}>
        <button id={create.create_btn} type={"submit"} onClick={handleClick}>
          회원가입
        </button>
      </form>
    </>
  );
};

export default Create;

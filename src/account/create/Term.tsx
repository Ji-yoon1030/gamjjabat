// ConsentSection.tsx
import React from "react";
import create from "../../css/Create.module.css";

interface TermProps {
  title: string;
  checkboxId: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  question: string;
  agreementText: string;

  children: React.ReactNode;
  additionalCheckboxes?: Array<{
    id: string;
    question: string;
    agreementText: string;
  }>;
}

const Term: React.FC<TermProps> = ({
  title,
  checkboxId,
  checked,
  onChange,
  question,
  agreementText,
  children,
  additionalCheckboxes,
}) => {
  return (
    <div className={create.term_content}>
      <span className={create.agree_title}>{title}</span>
      <div className={create.term_box}>{children}</div>
      <div className={create.agree_box}>
        <span className={create.agree_question}>{question}</span>
        <input
          id={checkboxId}
          className={create.checkbox}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className={create.agree}>{agreementText}</span>
      </div>
      {additionalCheckboxes &&
        additionalCheckboxes.map((checkbox, index) => (
          <div key={index} className={create.agree_box}>
            <span className={create.agree_question}>{checkbox.question}</span>
            <input
              id={checkbox.id}
              className={create.checkbox}
              type="checkbox"
            />
            <span className={create.agree}>{checkbox.agreementText}</span>
          </div>
        ))}
    </div>
  );
};

export default Term;

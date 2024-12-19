// FormGroup.js 또는 FormGroup.tsx
import React from 'react';
import create from "../../css/Create.module.css";

interface FormGroupProps {
  label: string;
  type: string;
  id: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  info?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({label, type, id, value, onChange, info}) => {
  return (
      <>
        <div className={create.form_group}>
          <label className={create.label} htmlFor={id}>{label}</label>
          <input className={create.input}  type={type} id={id} value={value}
                 onChange={onChange}/>
          {info && <span className={create.info}>{info}</span>}
        </div>
        <div className={create.long_line}></div>
      </>
  );
};

export default FormGroup;

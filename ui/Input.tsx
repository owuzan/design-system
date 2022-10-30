import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  errors?: string | string[];
}
type Props = Omit<InputProps, "className">;

const Input = (props: Props) => {
  const { type, hint, errors } = props;

  return (
    <div className="flex flex-col items-start">
      <label htmlFor=""></label>
      <input type={type} className="border border-gray-300" />
      {!hint && errors && (
        <ul>
          <li></li>
        </ul>
      )}
    </div>
  );
};

export default Input;

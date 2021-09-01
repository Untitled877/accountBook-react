import styled from 'styled-components';
import React from 'react';

const Label = styled.label`
  display: flex;
  align-items: center;
  > span {
    margin-right: 16px;
    white-space: nowrap;
  }
  > input {
    display: block;
    width: 100%;
    height: 44px;
    background: none;
    border: none;
  }
  @media (max-height: 600px) {
    > input {
      height: 36px;
    }
  }
`;
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest}/>
    </Label>
  );
};

export {Input};
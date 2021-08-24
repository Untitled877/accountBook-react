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
`;

const Input: React.FC = () => {
  return (
    <Label>
      <span>标签名：</span>
      <input placeholder="输入新的标签名~"/>
    </Label>
  );
};

export {Input};
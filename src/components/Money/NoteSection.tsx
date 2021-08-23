import React from 'react';
import styled from 'styled-components';

const NoteWrapper = styled.section`
  .formItem {
    font-size: 16px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(187, 187, 187, 0.7);

    .name {
      padding-right: 16px;
    }

    input {
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
`;

const NoteSection:React.FC = () => {
  return (
    <NoteWrapper>
      <label className="formItem">
        <span className="name">备注</span>
        <input type="text" placeholder="在这里输入备注~"/>
      </label>
    </NoteWrapper>
  )
}

export {NoteSection};
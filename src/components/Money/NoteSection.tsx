import React from 'react';
import styled from 'styled-components';
import {Input} from 'components/Input';

const NoteWrapper = styled.section`
  border-top:1px solid rgba(187, 187, 187, 0.7);
  padding-left: 16px;
`;

const NoteSection:React.FC = () => {
  return (
    <NoteWrapper>
      <Input label="备注：" type="text" placeholder="在这里输入备注~"/>
    </NoteWrapper>
  )
}

export {NoteSection};
import React, {ChangeEventHandler} from 'react';
import styled from 'styled-components';
import {Input} from 'components/Input';

const NoteWrapper = styled.section`
  border-top: 1px solid rgba(187, 187, 187, 0.7);
  padding-left: 16px;
`;

type Props = {
  value: string
  onChange: (value: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <NoteWrapper>
      <Input label="备注："
             type="text"
             placeholder="在这里输入备注~"
             value={note}
             onChange={onChange}/>
    </NoteWrapper>
  );
};

export {NoteSection};
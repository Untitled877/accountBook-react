import React, {useState} from 'react';
import {TopBar} from 'components/TopBar';
import {Wrapper} from 'components/Wrapper';
import {Nav} from 'components/Nav';
import {Main} from 'components/Main';
import {TagsSection} from 'components/Money/TagsSection';
import {NoteSection} from 'components/Money/NoteSection';
import {NumberPadSection} from 'components/Money/NumberPadSection';
import styled from 'styled-components';
import {useRecords} from 'hooks/useRecords';
import {createId} from 'lib/createId';
import dayjs from 'dayjs';

const Space = styled.div`
  flex-grow: 1;
`;

type Category = '-' | '+'

const defaultFormData = {
  tagId: -1,
  note: '',
  category: '-' as Category,
  amount: 0,
};

const Money: React.FC = () => {
  const [selected, setSelected] = useState(defaultFormData);
  const [createAt, setCreateAt] = useState(new Date());
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submitDate = (createAt:Date) => {
    setCreateAt(createAt);
  }
  const submit = () => {
    const recordDate = dayjs(createAt).format('YYYY/MM/DD');
    const newRecord = {id: createId(), ...selected, createAt:recordDate};
    if (addRecord(newRecord)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
    // 将页面置为初始
  };

  return (
    <Wrapper>
      <TopBar title="记一笔帐" value={selected.category}
              onChange={category => onChange({category})}/>
      <Main>
        <TagsSection category={selected.category}
                     value={selected.tagId}
                     onChange={tagId => onChange({tagId})}/>
        <Space/>
        <NoteSection value={selected.note}
                     onChange={note => onChange({note})}/>
        <NumberPadSection value={selected.amount}
                          onChange={(amount) => onChange({amount})}
                          dateChange={(createAt) => submitDate(createAt)}
                          onOk={submit}
        />
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export {Money};
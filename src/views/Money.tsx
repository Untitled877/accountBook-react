import React, {useState} from 'react';
import {TopBar} from 'components/TopBar';
import {Wrapper} from 'components/Wrapper';
import {Nav} from 'components/Nav';
import {Main} from 'components/Main';
import {TagsSection} from 'components/Money/TagsSection';
import {NoteSection} from 'components/Money/NoteSection';
import {NumberPadSection} from 'components/Money/NumberPadSection';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {useRecords} from 'hooks/useRecords';
import {createId} from 'lib/createId';
//import {useTags} from 'hooks/useTags';

const Space = styled.div`
  flex-grow: 1;
`;

type Category = '-' | '+'

const defaultFormData = {
  tagId: -1,
  note: '',
  category: '-' as Category,
  amount: 0,
  createAt: dayjs(new Date()).format('YYYY/MM/DD')
}

const Money: React.FC = () => {
  // const {tags} = useTags();
  // console.log(tags);
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  }

  const submit = () => {
    const newRecord = {id:createId(), ...selected};
    if(addRecord(newRecord)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  }

  return (
    <Wrapper>
      <TopBar title="记一笔帐"/>
      <Main>
        <TagsSection/>
        <Space/>
        <NoteSection/>
        <NumberPadSection value={selected.amount}
                          date={selected.createAt}
                          onChange={amount => onChange({amount})}
                          onOk={submit}
        />
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export {Money};
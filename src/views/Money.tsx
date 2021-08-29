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
import {useTags} from 'hooks/useTags';
import {useHistory, useParams} from 'react-router-dom';

const Space = styled.div`
  flex-grow: 1;
`;

type Category = '-' | '+'

type Params = {
  recordId: string
}

const defaultFormData = {
  tagId: -1,
  note: '',
  category: '-' as Category,
  amount: 0,
};

const Money: React.FC = () => {
  const [selected, setSelected] = useState(defaultFormData);
  const [createAt, setCreateAt] = useState(new Date());
  const {addRecord, updateRecord} = useRecords();
  const {getName} = useTags();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submitDate = (createAt: Date) => {
    setCreateAt(createAt);
  };
  const isEdit = (useHistory().location.pathname.indexOf('edit') >= 0);
  const {recordId: recordIdString} = useParams<Params>();
  const submit = () => {
    const recordDate = dayjs(createAt).format('YYYY/MM/DD');
    const tagName = getName(selected.tagId);

    if (!isEdit) {
      const newRecord = {id: createId(), tagName: tagName, ...selected, createAt: recordDate};
      if (addRecord(newRecord)) {
        window.alert('保存成功');
        setSelected(defaultFormData);
        return true;
      }
      return false;
    } else {
      if (updateRecord(parseInt(recordIdString), {tagName:tagName, ...selected, createAt:recordDate})) {
        window.alert('修改成功');
        setSelected(defaultFormData);
        return true;
      }
      return false;
    }
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
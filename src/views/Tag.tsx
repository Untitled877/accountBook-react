import React from 'react';
import {Wrapper} from 'components/Wrapper';
import {Nav} from 'components/Nav';
import {Main} from 'components/Main';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import {Space} from 'components/Space';
import {Center} from 'components/Center';
import {Input} from 'components/Input';
import {useTags} from 'hooks/useTags';
import {useHistory, useParams} from 'react-router-dom';

const Header = styled.header`
  background: #f6f6f6;
  font-size: 24px;
  font-family: 'haibao', monospace;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  > .icon {
    width: 30px;
    height: 30px;
  }
`;

type Params = {
  id: string
}

const InputWrapper = styled.div`
  border-bottom: 1px solid rgba(187, 187, 187, 100);
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
  const h = document.documentElement.clientHeight;
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));

  const handleOnChange = (e: any) => {
    updateTag(tag.id, e.target.value);
  }

  const handleDelete = () => {
    if (window.confirm('确定删除该标签吗？')) {
      deleteTag(tag.id);
    } else {
      return;
    }
  }

  const tagContent = (tag: { id: number; text: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名："
               type="text"
               value={tag.text}
               placeholder="最好不要超过四个字哦~"
               onChange={handleOnChange}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Button onClick={handleDelete}>删除标签</Button>
      </Center>
    </div>
  );
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  }
  return (
    <Wrapper style={{height: h + 'px'}}>
      <Header>
        <Icon name="left" onClick={onClickBack}/>
        <span className="title">
          编辑标签
        </span>
        <Icon/>
      </Header>
      <Main>
        {tag ? tagContent(tag) : <Center><Space />tag 不存在</Center>}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export {Tag};
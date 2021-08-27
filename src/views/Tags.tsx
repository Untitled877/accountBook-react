import React, {useState} from 'react';
import {Nav} from 'components/Nav';
import {Wrapper} from 'components/Wrapper';
import {TopBar} from 'components/TopBar';
import {Main} from 'components/Main';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import {Space} from 'components/Space';
import {Center} from 'components/Center';
import {Button} from 'components/Button';
import {useTags} from 'hooks/useTags';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding-left: 16px;
    flex-shrink: 0;
    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Tags:React.FC = () => {
  const [category, setCategory] = useState<'+'|'-'>('-');
  const {tags, addTag} = useTags();
  const onChange = () => {
    setCategory(category === '-' ? '+' : '-');
  }
  const tagList = tags.filter(tag => tag.category === category);
  return (
    <Wrapper>
      <TopBar title="标签管理" value={category} onChange={onChange}/>
      <Main>
        <TagList>
          {tagList.map(tag =>
            <li key={tag.id}>
              <Link to={'/tags/' + tag.id}>
                <span className="oneLine">{tag.text}</span>
                <Icon name="right"/>
              </Link>
            </li>
          )}
        </TagList>
        <Center>
          <Space />
          <Space />
          <Button onClick={()=>addTag(category)}>新增标签</Button>
        </Center>
      </Main>
      <Nav/>
    </Wrapper>
  )
};

export {Tags};
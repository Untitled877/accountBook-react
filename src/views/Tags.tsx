import React from 'react';
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
  const tags = [
    {id:1, name:'标签名'},
    {id:2, name:'标签名'},
    {id:3, name:'标签名'},
    {id:4, name:'标签名'},
    {id:5, name:'标签名'},
    {id:6, name:'标签名'},
    {id:7, name:'标签名'},
    {id:8, name:'标签名'},
    {id:9, name:'标签名'},
    {id:10, name:'标签名'},

  ];
  const onchange = () => {}
  return (
    <Wrapper>
      <TopBar title="标签管理" value='-' onChange={onchange}/>
      <Main>
        <TagList>
          {tags.map(tag =>
            <li key={tag.id}>
              <Link to={'/tags/' + tag.id}>
                <span className="oneLine">{tag.name}</span>
                <Icon name="right"/>
              </Link>
            </li>
          )}
        </TagList>
        <Center>
          <Space />
          <Space />
          <Button>新增标签</Button>
        </Center>
      </Main>
      <Nav/>
    </Wrapper>
  )
};

export {Tags};
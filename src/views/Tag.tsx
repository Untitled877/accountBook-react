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

const Header = styled.header`
  background: #f6f6f6;
  font-size: 24px;
  font-family: 'haibao',monospace;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  >.icon {
    width: 30px;
    height: 30px;
  }
`;

const InputWrapper = styled.div`
  border-bottom: 1px solid rgba(187, 187, 187, 100);
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Icon name="left"/>
        <span className="title">
          编辑标签
        </span>
        <Icon/>
      </Header>
      <Main>
        <InputWrapper>
          <Input label="标签名：" type="text" placeholder="在这里输入新的标签名~"/>
        </InputWrapper>
        <Center>
          <Space/>
          <Space/>
          <Button>删除标签</Button>
        </Center>
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export {Tag};
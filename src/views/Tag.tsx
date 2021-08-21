import React from 'react';
import {Wrapper} from 'components/Wrapper';
import {Nav} from 'components/Nav';
import {Main} from 'components/Main';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Div} from 'components/Div';

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
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
        <Div>111</Div>
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export {Tag};
import React from 'react';
import {TopBar} from 'components/TopBar';
import {Wrapper} from 'components/Wrapper'
import {Nav} from 'components/Nav';
import {Main} from 'components/Main';
import {Div} from 'components/Div';



const Money: React.FC = () => {
  return (
    <Wrapper>
      <TopBar title="记一笔帐"/>
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
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export {Money};
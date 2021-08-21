import React from 'react';
import {Nav} from 'components/Nav';
import {Main} from 'components/Main';
import {Wrapper} from 'components/Wrapper';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Div} from 'components/Div';

const TopDiv = styled.div`
  background: #f6f6f6;
  .title {
    font-size: 24px;
    font-family: 'haibao', monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
  }

  .info-wrapper {
    background: #333333;
    color: white;
    display: flex;
    padding: 25px 0;

    .icon {
      fill: white;
    }

    > .dateSelector {
      display: flex;
      flex-direction: column;
      border-right: 1px solid white;
      width: 33.3333%;
      text-align: center;

    }

    > .expend, .income {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 33.3333%;
    }

    .textUp {
      margin-bottom: 5px;
      font-size: 14px;
    }

    .textDown {
      font-size: 20px;
    }
  }
  ul {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 10px 0;
    > li {
      background: white;
      font-size: 16px;
      color: #333333;
      display: flex;
      padding: 5px 0;
      width: 130px;
      justify-content: center;
      border: 1px solid rgba(187, 187, 187, 0.7);
      border-radius: 2px;

      &.selected {
        background: #333;
        color: white;
      }
    }
`;

const Statistics: React.FC = () => {
  return (
    <Wrapper>
      <TopDiv>
        <div className="title">账单详情</div>
        <div className="info-wrapper">
          <div className="dateSelector">
            <span className="textUp">2021年</span>
            <span className="textDown">8月&nbsp;<Icon name="down"/></span>
          </div>
          <div className="expend">
            <span className="textUp">支出（元）</span>
            <span className="textDown">0.00</span>
          </div>
          <div className="income">
            <span className="textUp">收入（元）</span>
            <span className="textDown">0.00</span>
          </div>
        </div>
        <ul className="tabs">
          <li className="selected">明细</li>
          <li>图表</li>
        </ul>
      </TopDiv>
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

export {Statistics};
import React, {useState} from 'react';
import {Nav} from 'components/Nav';
import {Main} from 'components/Main';
import {Wrapper} from 'components/Wrapper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {DatePicker} from 'element-react';
import 'element-theme-default';
//import dayjs from 'dayjs';

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
    padding: 25px 10px;
    justify-content: space-between;
    
    > .dateSelector {
      display: flex;
      align-items: center;
    }

    > .expend, .income {
      display: flex;
      flex-direction: column;
      text-align: center;
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

const Items = styled.div`
  .topBar, .record{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(187, 187, 187, 0.7);
  }

  .topBar {
    font-weight: bold;
    padding: 10px 12px;
  }
  .record {
    padding: 8px 12px;
    flex-shrink: 0;
    > .tagName {
      white-space: nowrap;
    }
    > .notes {
      margin-right: auto;
      margin-left: 16px;
      color: #999999;
    }
  }
`;

const Statistics: React.FC = () => {
  const grounpedList = [
    {id: 1, text: '餐饮', note: '备注很多字很多字很多字备注很多字很多字很多字备注很多字很多字很多字', type: '-', amount: 100},
    {id: 2, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 3, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 4, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 5, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 6, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 7, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 8, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 9, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 10, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 11, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 12, text: '餐饮', note: '备注', type: '-', amount: 100},
    {id: 13, text: '餐饮', note: '备注', type: '-', amount: 100},
  ];

  const [value] = useState(new Date());
  return (
    <Wrapper>
      <TopDiv>
        <div className="title">账单详情</div>
        <div className="info-wrapper">
          <div className="dateSelector">
            <DatePicker
              value={value}
              placeholder="选择月"
              onChange={date=>{
                console.log('month DatePicker changed: ', date)
                //setState(date)
              }}
              selectionMode="month"
            />
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

        <Items>
          <ol className="records">
            <li>
              <div className="topBar">
                2021/08/24
                <span>支出：100 收入：0.00</span>
              </div>
                {
                  grounpedList.map(record => (
                    <Link className="record" to={'/statistics/' + record.id} key={record.id}>
                      <span className="tagName">{record.text}</span>
                      <span className="notes oneLine">{record.note}</span>
                      <span className="amount">{record.type}{record.amount}</span>
                    </Link>
                  ))
                }
            </li>
          </ol>
        </Items>
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export {Statistics};
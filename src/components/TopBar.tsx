import React from 'react';
import styled from 'styled-components';

const TopBarWrapper = styled.div`
  background: #F6F6F6;
  //padding-bottom: 10px;
  .title {
    font-size: 24px;
    font-family: 'haibao',monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
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
  }
`;

type Props = {
  title: string;
}

const TopBar:React.FC<Props> = (props) => {
  return (
    <TopBarWrapper>
      <div className="title">{props.title}</div>
      <ul className="tabs">
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </TopBarWrapper>
  )
};

export {TopBar};
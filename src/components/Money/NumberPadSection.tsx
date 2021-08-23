import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';

const NumberPadWrapper = styled.section`
  display: flex;
  flex-direction: column;
  .output {
    font-size: 30px;
    font-family: Consolas, monospace;
    padding: 3px 16px;
    text-align: right;
    border-top: 1px solid rgba(187, 187, 187, 0.7);
  }

  .buttons {
    border-top: 1px solid rgba(187, 187, 187, 0.7);

    > button {
      width: 25%;
      font-size: 20px;
      padding: 10px 0;
      line-height: 30px;
      float: left;
      background: transparent;
      border: none;

      &.ok {
        float: right;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1), &:nth-child(2), &:nth-child(3),
      &:nth-child(4), &:nth-child(5), &:nth-child(6),
      &:nth-child(7), &:nth-child(8), &:nth-child(9),
      &:nth-child(10), &:nth-child(11), &:nth-child(12) {
        border-bottom: 1px solid rgba(187, 187, 187, 0.7);
      }

      &:nth-child(1), &:nth-child(2), &:nth-child(3),
      &:nth-child(5), &:nth-child(6), &:nth-child(7),
      &:nth-child(9), &:nth-child(10), &:nth-child(11),
      &:nth-child(13), &:nth-child(14) {
        border-right: 1px solid rgba(187, 187, 187, 0.7);
      }
      &:nth-child(15) {
        background: #333333;
        color: white;
      }
      &:nth-child(4), &:nth-child(12),&:nth-child(15) {
        font-size: 16px;
      }
      &:nth-child(4) {
        background: #f6f6f6;
      }
    }
  }
`;

const NumberPadSection: React.FC = () => {
  return (
    <NumberPadWrapper>
      <div className="output">0</div>
      <div className="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>今天</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>
          <Icon name="delete"/>
        </button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>清空</button>
        <button>.</button>
        <button className="zero">0</button>
        <button className="ok">确定</button>
      </div>
    </NumberPadWrapper>
  );
};

export {NumberPadSection};
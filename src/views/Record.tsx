import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';

const RecordWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > .topDiv {
    background: #f6f6f6;

    > .topBar {
      display: flex;
      align-items: center;
      padding: 10px 0 0 10px;

      > .icon {
        width: 30px;
        height: 30px;
      }
    }

    > .tagInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      padding-bottom: 5px;

      > .icon-wrapper {
        display: inline-block;
        background: white;
        border-radius: 50%;
        margin-bottom: 5px;

        .icon {
          vertical-align: middle;
          height: 40px;
          width: 40px;
          margin: 10px;
        }
      }
    }
  }

  > ul {
    flex-grow: 1;

    > li {
      font-size: 18px;
      padding: 10px;
      border-bottom: 1px solid rgba(187, 187, 187, 100);

      > .label {
        padding-right: 20px;
        color: #8E8B8B;
        white-space: nowrap;
      }
    }
  }


  > .buttons {
    border-top: 1px solid rgba(187, 187, 187, 100);
    >.left {
      border-right: 1px solid rgba(187, 187, 187, 100);
    }
    > button {
      border: none;
      background: none;
      font-size: 18px;
      width: 50%;
      padding: 15px 0;
    }
  }
`;

const Record: React.FC = () => {
  return (
    <RecordWrapper>
      <div className="topDiv">
        <div className="topBar">
          <Icon name="left"/>
        </div>
        <div className="tagInfo">
          <div className="icon-wrapper">
            <Icon name="money"/>
          </div>
          <span>账单</span>
        </div>
      </div>

      <ul>
        <li><span className="label">类型</span><span className="text">支出</span></li>
        <li><span className="label">金额</span><span className="text">2000</span></li>
        <li><span className="label">日期</span><span className="text">2021-08-19</span></li>
        <li><span className="label">备注</span><span className="text">房租</span></li>
      </ul>
      <div className="buttons">
        <button className="left">编辑</button>
        <button>删除</button>
      </div>
    </RecordWrapper>
  );
};

export {Record};
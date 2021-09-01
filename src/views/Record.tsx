import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useRecords} from 'hooks/useRecords';
import {Space} from 'components/Space';
import {Center} from 'components/Center';

const Header = styled.header`
  background: #f6f6f6;
  font-size: 24px;
  font-family: 'haibao', monospace;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  > .icon {
    width: 30px;
    height: 30px;
  }
`;

const RecordWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  > .recordContent {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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

      > .right {
        border-left: 1px solid rgba(187, 187, 187, 100);
      }

      > a > button, > button {
        border: none;
        background: none;
        font-size: 18px;
        width: 50%;
        padding: 15px 0;
      }
    }
  }
`;

type Params = {
  recordId: string
}

const Record: React.FC = () => {
  const h = document.documentElement.clientHeight;
  const {getRecord, deleteRecord} = useRecords();
  let {recordId: recordIdString} = useParams<Params>();
  const record = getRecord(parseInt(recordIdString))[0];

  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  const handleDelete = () => {
    if (window.confirm('确定删除该记录吗？')) {
      deleteRecord(record.id);
    } else {
      return;
    }
  };
  const recordContent = () => (
    <div className="recordContent">
      <ul>
        <li><span className="label">类型</span><span
          className="text">{record && record.category === '-' ? '支出' : '收入'}</span></li>
        <li><span className="label">标签</span><span className="text">{record && record.tagName}</span></li>
        <li><span className="label">金额</span><span className="text">{record && record.amount}</span></li>
        <li><span className="label">日期</span><span className="text">{record && record.createAt}</span></li>
        <li><span className="label">备注</span><span className="text">{record && record.note ? record.note : '无'}</span>
        </li>
      </ul>
      <div className="buttons">
        <Link to={'/money/' + record.id + '/edit'}>
          <button>编辑</button>
        </Link>
        <button className="right" onClick={handleDelete}>删除</button>
      </div>
    </div>
  );
  return (
    <RecordWrapper style={{height: h + 'px'}}>
      <Header>
        <Icon name="left" onClick={onClickBack}/>
        <span className="title">
          记录详情
        </span>
        <Icon/>
      </Header>
      {
        record ? recordContent()
          : <div><Center><Space/><Space/>该记录已删除</Center></div>
      }
    </RecordWrapper>
  );
};

export {Record};
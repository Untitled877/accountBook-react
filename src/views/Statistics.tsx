import React, {useState} from 'react';
import {Nav} from 'components/Nav';
import {Main} from 'components/Main';
import {Wrapper} from 'components/Wrapper';
import {TopDiv} from 'components/TopDiv';
import styled from 'styled-components';
// import {Link} from 'react-router-dom';

import {DatePicker} from 'element-react';
import 'element-theme-default';

import dayjs from 'dayjs';
import {RecordItem, useRecords} from 'hooks/useRecords';
import {useTags} from 'hooks/useTags';

const Items = styled.div`
  .topBar, .record {
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
  const {records} = useRecords();
  const {getName} = useTags();

  const [monthTotalExpend, setMonthTotalExpend] = useState(0);
  const [monthTotalIncome, setMonthTotalIncome] = useState(0);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const year = dayjs(selectedDate).year();
  const month = dayjs(selectedDate).month() + 1;

  const categoryMap = {'details': '明细', 'charts': '图表'};
  const [categoryList] = useState<('details' | 'charts')[]>(['details', 'charts']);
  const [category, setCategory] = useState('details');

  console.log(records);
  // const hash: {[K:string]:RecordItem[]} = {};
  // const selectedRecords = records.filter(r => parseInt(r.createAt.split('/')[0]) === year
  //   && parseInt(r.createAt.split('/')[1]) === month);
  //
  // selectedRecords.forEach(r => {
  //   const key = r.createAt;
  //   if(!(key in hash)) {
  //     hash[key] = [];
  //   }
  //   hash[key].push(r);
  // })
  //
  // const array = Object.entries(hash).sort((a, b) => {
  //   if(a[0] === b[0]) return 0;
  //   if(a[0] > b[0]) return -1;
  //   if(a[0] < b[0]) return 1;
  //   return 0;
  // });
  // console.log(array);

  const getGroupedRecords = () => {
    const hash: {[K:string]:RecordItem[]} = {};
    const selectedRecords = records.filter(r => parseInt(r.createAt.split('/')[0]) === year
      && parseInt(r.createAt.split('/')[1]) === month);
    if (selectedRecords.length === 0) {
      return [];
    }
    type Result = {
      title: string,
      totalExpend: number,
      totalIncome: number,
      items: RecordItem[]
    }[];
    const result: Result = [{title: selectedRecords[0].createAt, totalExpend: 0.00, totalIncome: 0.00, items: [selectedRecords[0]]}];
    for (let i = 1; i < selectedRecords.length; i++) {
      const current = selectedRecords[i];
      const last = result[result.length - 1];
      if (last.title.split('/')[2] === current.createAt.split('/')[2]) {
        last.items.push(current);
      } else {
        result.push({title: current.createAt, totalExpend: 0.00, totalIncome: 0.00, items: [current]});
      }
    }
    result.map(group => {
      group.totalExpend = group.items.reduce((sum, item) => {
        return sum + (item.category === '-' ? item.amount : 0);
      }, 0);
      group.totalIncome = group.items.reduce((sum, item) => {
        return sum + (item.category === '+' ? item.amount : 0);
      }, 0);
    });

    // for (let i = 0; i < result.length; i++) {
    //   this.monthTotalExpend += (result as Result)[i].totalExpend;
    //   this.monthTotalIncome += (result as Result)[i].totalIncome;
    // }

    return result;
  }

  if(getGroupedRecords() && getGroupedRecords()[0]) {
    console.log(getGroupedRecords()[0].totalExpend)
  }

  const detailsContent = () => (
    <Items>
      <ol className="records">
        {

          // groupedRecords() && groupedRecords().forEach((group, index) => {
          //     <li key={index}>
          //         <div className="topBar">
          //           {group.title}
          //           <span>支出：{group.totalExpend} 收入：{group.totalIncome}</span>
          //         </div>
          //         <ol>
          //           {
          //             group.items.forEach((item) => {
          //               <Link className="record" to={'/statistics/' + item.id} key={item.id}>
          //                 <span className="tagName">{item.tagId}</span>
          //                 <span className="notes oneLine">{item.note}</span>
          //                 <span className="amount">{item.category}{item.amount}</span>
          //               </Link>
          //             })
          //           }
          //         </ol>
          //     </li>
          // })
        }
      </ol>
    </Items>
  );

  const chartsContents = () => (
    <div>
      这里显示图表
    </div>
  );

  return (
    <Wrapper>
      <TopDiv>
        <div className="title">账单详情</div>
        <div className="info-wrapper">
          <div className="dateSelector">
            <DatePicker
              value={selectedDate}
              selectionMode="month"
              placeholder="选择月"
              onChange={date => {
                setSelectedDate(date);
              }}
            />
          </div>
          <div className="expend">
            <span className="textUp">支出（元）</span>
            <span className="textDown">{monthTotalExpend}</span>
          </div>
          <div className="income">
            <span className="textUp">收入（元）</span>
            <span className="textDown">{monthTotalIncome}</span>
          </div>
        </div>
        <ul className="tabs">
          {categoryList.map(c =>
            <li key={c}
                className={category === c ? 'selected' : ''}
                onClick={() => {setCategory(c);}}>
              {categoryMap[c]}
            </li>
          )}
        </ul>
      </TopDiv>
      <Main>
        {
          category === 'details' ? detailsContent() : chartsContents()
        }
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export {Statistics};
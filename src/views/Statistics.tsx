import React, {useEffect, useState} from 'react';
import {Nav} from 'components/Nav';
import {Main} from 'components/Main';
import {Wrapper} from 'components/Wrapper';
import {TopDiv} from 'components/TopDiv';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {DatePicker} from 'element-react';
import 'element-theme-default';

import dayjs from 'dayjs';
import {RecordItem, useRecords} from 'hooks/useRecords';
import clone from 'lib/clone';
import {Center} from 'components/Center';
import {Space} from 'components/Space';
import {Chart} from 'components/Chart';

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
  const h = document.documentElement.clientHeight;
  const {records} = useRecords();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const year = dayjs(selectedDate).year();
  const month = dayjs(selectedDate).month() + 1;

  const categoryMap = {'details': '明细', 'charts': '图表'};
  const [categoryList] = useState<('details' | 'charts')[]>(['details', 'charts']);
  const [category, setCategory] = useState('details');

  const [monthTotalExpend, setMonthTotalExpend] = useState(0);
  const [monthTotalIncome, setMonthTotalIncome] = useState(0);

  const newList = clone(records);

  const getGroupedRecords = () => {
    const selectedRecords = newList.filter(r => parseInt(r.createAt.split('/')[0]) === year
      && parseInt(r.createAt.split('/')[1]) === month)
      .sort((a, b) => parseInt(b.createAt.split('/')[2])
        - parseInt(a.createAt.split('/')[2]));
    if (selectedRecords.length === 0) {
      return [];
    }
    type Result = {
      title: string,
      totalExpend: number,
      totalIncome: number,
      items: RecordItem[]
    }[];
    const result: Result = [{
      title: selectedRecords[0].createAt,
      totalExpend: 0.00,
      totalIncome: 0.00,
      items: [selectedRecords[0]]
    }];
    for (let i = 1; i < selectedRecords.length; i++) {
      const current = selectedRecords[i];
      const last = result[result.length - 1];
      if (last.title.split('/')[2] === current.createAt.split('/')[2]) {
        last.items.push(current);
      } else {
        result.push({title: current.createAt, totalExpend: 0.00, totalIncome: 0.00, items: [current]});
      }
    }
    result.forEach(group => {
      group.totalExpend = group.items.reduce((sum, item) => {
        return sum + (item.category === '-' ? item.amount : 0);
      }, 0);
      group.totalIncome = group.items.reduce((sum, item) => {
        return sum + (item.category === '+' ? item.amount : 0);
      }, 0);
    });
    return result;
  };

  const getMonthTotal = (category: string) => {
    let total = 0;
    let result = getGroupedRecords();
    if (result.length > 0) {
      for (let i = 0; i < result.length; i++) {
        if (category === '-') {
          total += result[i].totalExpend;
        } else {
          total += result[i].totalIncome;
        }
      }
    }
    return total;
  };

  useEffect(() => {
    setMonthTotalExpend(getMonthTotal('-'));
    setMonthTotalIncome(getMonthTotal('+'));
  }, [getGroupedRecords()]); // eslint-disable-line react-hooks/exhaustive-deps

  const addZero = (num: number) => {
    return num < 10 ? '0' + num : num + '';
  };
  const beautify = (date: string) => {
    const today = dayjs(new Date()).format('YYYY/MM/DD');
    const todayYear = today.split('/')[0];
    const todayMonth = today.split('/')[1];
    const todayDay = today.split('/')[2];
    const recordDay = date.split('/')[2];
    if (date === today) {
      return '今天';
    } else if (year.toString() === todayYear
      && addZero(month) === todayMonth
      && parseInt(recordDay) === parseInt(todayDay) - 1) {
      return '昨天';
    } else if (todayYear === year.toString()) {
      return date.substr(5);
    } else {
      return date;
    }
  };

  const detailsContent = () => (
    <Items>
      <ol className="records">
        {
          getGroupedRecords().length <= 0 ? <div><Space/><Space/><Center>本月还没有账单记录哦~</Center></div> :
            getGroupedRecords().map((group, index) => {
              return (
                <li key={index}>
                  <div className="topBar">
                    {beautify(group.title)}
                    <span>支出：{group.totalExpend} 收入：{group.totalIncome}</span>
                  </div>
                  <ol>
                    {
                      group.items.map((item) => {
                        return (
                          <Link className="record" to={'/statistics/' + item.id} key={item.id}>
                            <span className="tagName">{item.tagName}</span>
                            <span className="notes oneLine">{item.note}</span>
                            <span className="amount">{item.category}{item.amount}</span>
                          </Link>
                        );
                      })
                    }
                  </ol>
                </li>
              );
            })
        }
      </ol>
    </Items>
  );
  type Category = '-' | '+'
  const [type, setType] = useState('-' as Category);
  const onChange = (value: Category) => {
    setType(value);
  };

  const getKeyValueList = () => {
    const hash:{[K:string]:number} = {};
    const classifiedList = records.filter(r => parseInt(r.createAt.split('/')[0]) === year
      && parseInt(r.createAt.split('/')[1]) === month && r.category === type);
    classifiedList.forEach(r => {
      const key = r.tagName;
      if(key in hash) {
        hash[key] += r.amount;
      } else {
        hash[key] = r.amount;
      }
    });
    return hash;
  }
  const [option, setOption] = useState({});

  useEffect(()=> {
    setOption(
      {
        color: '#999',
        grid:{
          top: 20,
          bottom: 45
        },
        xAxis: {
          type: 'category',
          data: Object.keys(getKeyValueList()),
          axisLabel:{
            interval: 0,
            rotate: 22
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: Object.values(getKeyValueList()),
          type: 'bar',
          label: {
            show: true,
            position: 'top'
          },
        }],
      }
    )
  }, [year, month, category, type]) // eslint-disable-line react-hooks/exhaustive-deps
  const chartsContents = () => (
    getGroupedRecords().length <= 0 ? <div><Space/><Space/><Center>本月还没有账单记录哦~</Center></div> :
    <div>
      <Chart option={option} category={type} onChange={(type) => onChange(type)}/>
    </div>
  );

  return (
    <Wrapper style={{height: h + 'px'}}>
      <TopDiv>
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
import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import echarts from 'echarts';

const ChartWrapper = styled.div`
  > .chartContainer {
    height: 400px;
  }

  > .tabs {
    display: flex;
    flex-direction: row-reverse;
    padding-right: 20px;
    margin-top: 10px;

    > li {
      background: white;
      font-size: 12px;
      padding: 3px;
      display: flex;
      justify-content: center;
      color: #333;
      border: 1px solid #999;

      &.selected {
        background: #999;
        color: white;
      }
    }
  }
`;

type Props = {
  option: any,
  category: '+' | '-',
  onChange: (category: '-' | '+') => void
}

const Chart: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('+' | '-')[]>(['+', '-']);
  const category = props.category;

  const {option} = props;
  const container = useRef(null);
  const chart = useRef(null);
  useEffect(() => {
    // @ts-ignore
    chart.current = echarts.init(container.current, 'default');
  }, []); // mounted 第一次渲染
  useEffect(() => {
    // @ts-ignore
    chart.current.setOption(option);
  }, [option])
  return (
    <ChartWrapper>
      <ul className="tabs">
        {categoryList.map(c =>
          <li key={c}
              className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c);}}
          >
            {categoryMap[c]}
          </li>
        )}
      </ul>
      <div className="chartContainer" ref={container}/>
    </ChartWrapper>
  );
};

export {Chart};
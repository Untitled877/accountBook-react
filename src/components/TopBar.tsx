import React, {useState} from 'react';
import styled from 'styled-components';

const TopBarWrapper = styled.div`
  background: #F6F6F6;
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
  value: '-' | '+'
  onChange: (value: '-' | '+') => void
}

const TopBar: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('+' | '-')[]>(['-', '+']);
  const category = props.value;
  return (
    <TopBarWrapper>
      <ul className="tabs">
        {categoryList.map(c =>
          <li key={c}
              className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c);}}>
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </TopBarWrapper>
  );
};

export {TopBar};
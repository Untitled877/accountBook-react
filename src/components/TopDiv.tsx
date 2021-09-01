import styled from 'styled-components';

const TopDiv = styled.div`
  background: #f6f6f6;

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

    @media (max-width: 360px) {
      .textUp {
        font-size: 12px;
      }

      .textDown {
        font-size: 16px;
      }
    }
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
export {TopDiv};
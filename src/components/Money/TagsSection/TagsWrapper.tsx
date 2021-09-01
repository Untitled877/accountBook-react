import styled from 'styled-components';

const TagsWrapper = styled.section`
  // 未选中状态
  .el-carousel__indicator .el-carousel__button {
    background: white;
    border-radius: 50%;
    height: 5px;
    width: 5px;
  }

  // 选中状态
  .el-carousel__indicator.is-active .el-carousel__button {
    background: #959595;
  }

  > .carousel {
    .tagList {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 10px;

      > .tagWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        width: 25%;
        font-size: 12px;
        margin-bottom: 10px;

        > span {
          white-space: nowrap;
        }

        &.selected {
          .icon-wrapper {
            background: #DCDCDC;
          }
        }

        > .icon-wrapper {
          display: inline-block;
          background: #f6f6f6;
          border-radius: 50%;

          .icon {
            vertical-align: middle;
            height: 40px;
            width: 40px;
            margin: 10px;
          }

          @media (max-height: 600px) {
            .icon {
              height: 35px;
              width: 35px;
            }
          }
        }
      }
    }

  }
`;

export {TagsWrapper};
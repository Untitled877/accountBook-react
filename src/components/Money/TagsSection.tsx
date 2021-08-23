import styled from 'styled-components';
import React from 'react';
import {Carousel} from 'element-react';

import 'element-theme-default';
import Icon from 'components/Icon';

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
      >.tagWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        width: 25%;
        font-size: 12px;
        margin-bottom: 10px;

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
        }
      }
    }
  }

`;

const TagsSection: React.FC = () => {
  const tagList = [
    {iconName: 'delete', text: '删除'},
    {iconName: 'money', text: '账本'},
    {iconName: 'delete', text: '删除'},
    {iconName: 'money', text: '账本'},
    {iconName: 'delete', text: '删除'},
    {iconName: 'money', text: '账本'},
    {iconName: 'delete', text: '删除'},
    {iconName: 'money', text: '账本'},
  ];

  return (
    <TagsWrapper>
      <Carousel height="200px" className="carousel" autoplay={false}>
        <Carousel.Item>
          <div className="tagList">
          {
            tagList.map((item, index) => {
              return (

                  <div className="tagWrapper" key={index}>
                    <div className="icon-wrapper">
                      <Icon name={item.iconName}/>
                    </div>
                    <span>{item.text}</span>
                  </div>
              );
            })
          }
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="tagList">
            {
              tagList.map((item, index) => {
                return (

                  <div className="tagWrapper" key={index}>
                    <div className="icon-wrapper">
                      <Icon name={item.iconName}/>
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })
            }
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="tagList">
            {
              tagList.map((item, index) => {
                return (

                  <div className="tagWrapper" key={index}>
                    <div className="icon-wrapper">
                      <Icon name={item.iconName}/>
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })
            }
          </div>
        </Carousel.Item>
      </Carousel>
    </TagsWrapper>
  );
};

export {TagsSection};
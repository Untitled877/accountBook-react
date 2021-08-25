import React from 'react';
import {Carousel} from 'element-react';

import 'element-theme-default';
import Icon from 'components/Icon';
import { TagsWrapper } from './TagsSection/TagsWrapper';



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
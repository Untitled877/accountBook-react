import React from 'react';
import {Carousel} from 'element-react';

import 'element-theme-default';
import Icon from 'components/Icon';
import {TagsWrapper} from './TagsSection/TagsWrapper';
import {useTags} from 'hooks/useTags';

type Props = {
  category: '-' | '+'
  value: number
  onChange: (selected: number) => void
}

type Tag = {
  id: number;
  category: string;
  iconName: string;
  text: string;
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags} = useTags();
  console.log(tags);
  // const selectedTagId = props.value;
  const category = props.category;
  const tagGroup = category === '-' ? tags.filter(t => t.category === '-')
    : tags.filter(t => t.category === '+');

  const getItemNum = () => {
    let itemNumArr = [];
    if(tagGroup) {
      const itemNum = Math.ceil((tagGroup.length + 1) / 8);
      for (let i = 0; i < itemNum; i++) {
        itemNumArr.push(i);
      }
      return itemNumArr;
    } else {
      return [];
    }
  };
  console.log(getItemNum());

  const sliceArray = function (array: Array<Tag>, size: number) {
    let result = [];
    if(array) {
      for (let i = 0; i < Math.ceil(array.length / size); i++) {
        let start = i * size;
        let end = start + size;
        result.push(array.slice(start, end));
      }
      return result;
    }
    return [];
  };

  //console.log(sliceArray(tagGroup, 8)[1]);

  return (
    <TagsWrapper>
      <Carousel height="200px" className="carousel" autoplay={false}>
        {
          getItemNum().map(i => {
            return (
              <Carousel.Item key={i}>
                <div className="tagList">
                  {
                    (sliceArray(tagGroup, 8)[i]) ? (sliceArray(tagGroup, 8)[i]).map((item, index) => {
                      return (
                        <div className="tagWrapper" key={index}>
                          <div className="icon-wrapper">
                            <Icon name={item.iconName}/>
                          </div>
                          <span>{item.text}</span>
                        </div>
                      );
                    }) : ''
                  }
                </div>
              </Carousel.Item>
            );
          })
        }
      </Carousel>
    </TagsWrapper>
  );
};

export {TagsSection};
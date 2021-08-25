import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import localTagList from 'constants/localTagList';
import {useUpdate} from 'hooks/useUpdate';

type Tag = {
  id: number;
  category: string;
  iconName: string;
  text: string;
}

const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if(localTags.length === 0) {
      for(let i = 0; i < localTagList.length; i++) {
        localTags.push({
          id: createId(),
          category:localTagList[i].category,
          iconName:localTagList[i].iconName,
          text:localTagList[i].text
        });
      }
    }
    setTags(localTags);
  }, []); //组件挂载时执行

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id:number) => {
    let result = -1;
    for(let i = 0; i < tags.length; i++) {
      if(tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  // 第二个参数是一个Object类型
  const updateTag = (id:number, {name}:{name:string}) => {
    setTags(tags.map(tag => tag.id === id ? {...tag, id, name:name} : tag));
  };

  const deleteTag = (id:number) => {
    setTags(tags.filter(tag => tag.id !== id));
  }

  const addTag = (category:string) => {
    const tagName = window.prompt('请输入新标签的名称');
    if(tagName !== null && tagName !== '') {
      const textList = (tags.filter(tag => tag.category === category)).map(tag => tag.text);
      if(textList.indexOf(tagName) >= 0) {
        window.alert('标签名已存在');
        return;
      } else {
        setTags([...tags, {id:createId(), category:category, iconName:'default', text:tagName}]);
      }
    } else {
      return;
    }
  };

  const getName = (id:number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.text : '';
  }

  return {tags, setTags,findTag, findTagIndex, updateTag, deleteTag, addTag, getName}
};


export {useTags};
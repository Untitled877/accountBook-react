import {useEffect, useState} from 'react';
import {useUpdate} from 'hooks/useUpdate';

export type RecordItem = {
  id: number
  tagId: number
  note: string
  category: '+' | '-'
  amount: number
  createAt: string
}

// 为了能定位到每一条记录并且对其进行更改，
// 需要给每一条记录添加一个主键 所以加入id字段
// 每一条recordItem 的 类型应该是：id type tagId(仅可以选择一个标签) note amount createAt

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);

  const addRecord = (newRecord: RecordItem) => {
    // 这里还有一种情况是 通过record 编辑路由过来的。
    // 所以名字需要改，还需要添加判断
    if(!newRecord.tagId || newRecord.tagId === -1) {
      alert('标签不能为空');
      return false;
    }
    if(newRecord.amount <= 0) {
      alert('金额不能为0');
      return false;
    }
    setRecords([...records, newRecord]);
    return true;
  }

  return {records, addRecord};
};
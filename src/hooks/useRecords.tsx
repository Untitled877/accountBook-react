import {useEffect, useState} from 'react';
import {useUpdate} from 'hooks/useUpdate';

export type RecordItem = {
  id: number
  tagName: string
  tagId: number // 这里应该有tagName 防止在删除标签后 记录里无法根据id找到tag的名字（只保留name字段？）
  note: string
  category: '+' | '-'
  amount: number
  createAt: string
}

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);

  const addRecord = (newRecord: RecordItem) => {
    if (!newRecord.tagId || newRecord.tagId === -1) {
      alert('标签不能为空');
      return false;
    }
    if (newRecord.amount <= 0) {
      alert('金额不能为0');
      return false;
    }
    setRecords([...records, newRecord]);
    return true;
  };

  const getRecord = (id: number) => {
    return records.filter(r => r.id === id);
  };

  const deleteRecord = (id: number) => {
    setRecords(records.filter(r => r.id !== id));
  };

  type EditRecord = Omit<RecordItem, 'id'>;

  const updateRecord = (id:number, record:EditRecord) => {
    if (!record.tagId || record.tagId === -1) {
      alert('标签不能为空');
      return false;
    }
    if (record.amount <= 0) {
      alert('金额不能为0');
      return false;
    }
    setRecords(records.map(r => r.id === id ? {id, ...record} : r));
    return true;
  }

  return {records, addRecord, getRecord, deleteRecord, updateRecord};
};
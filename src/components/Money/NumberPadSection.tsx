import DatePicker from 'react-mobile-datepicker';
import React, {useState} from 'react';
import dayjs from 'dayjs';
import {NumberPadWrapper} from './NumberPadSection/NumberPadWrapper';
import {generateOutput} from 'components/Money/NumberPadSection/generateOutput';

type Props = {
  value: number
  onChange: (value: number) => void
  dateChange: (createAt:Date) => void
  onOk?: () => void
}

const NumberPadSection: React.FC<Props> = (props) => {
  const [state, setState] = useState({
    time: new Date(),
    isOpen: false,
  });

  const handleClick = function () {
    setState({...state, isOpen: true});
  };

  const handleCancel = function () {
    setState({...state, isOpen: false});
  };

  const handleSelect = function (time: any) {
    setState({time, isOpen: false});
    props.dateChange(time);
  };

  const [output, _setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    let newOutput;
    if (output.length > 16) {
      newOutput = output.slice(0, 16);
    } else if(output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if(text === null) { return; }
    if (text === '确定') {
      if(props.onOk) {
        props.onOk();
      }
      return;
    }
    if ('0123456789.'.split('').concat(['清空','删除']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };

  return (
    <NumberPadWrapper>
      <div className="output">{output}</div>
      <div className="buttons" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button onClick={handleClick} className="dateButton">
          {dayjs(state.time).format('YYYY/MM/DD')}
        </button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>删除</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>清空</button>
        <button>.</button>
        <button className="zero">0</button>
        <button className="ok">确定</button>
      </div>
      <DatePicker
        theme={'ios'}
        value={state.time}
        isOpen={state.isOpen}
        onSelect={handleSelect}
        onCancel={handleCancel}/>
    </NumberPadWrapper>
  );
};

export {NumberPadSection};
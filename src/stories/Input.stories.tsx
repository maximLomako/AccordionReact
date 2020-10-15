import React, {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'input'
}


export const UnConrolledInput = () => <input/>;

export const TrackValueUnConrolledInput = () => {
  const [value, setValue] = useState('')
  const InputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return (
    <>
      <input
        onChange={InputChangeHandler}/> - {value}
    </>
  )
};

export const GetValueofUnconrolledInputByButtonPress = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)
  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }
  return (
    <>
      <input ref={inputRef}/>
      <button onClick={save}>save
      </button>
      - actual value: {value}
    </>
  )
};

export const ControlledInputWithFixedValue = () => <input value={'hard-code '}/>;

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <input value={parentValue} onChange={onChangeHandler}/>
};

export const ControlledCheckBox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }
  return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
};


export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2');
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChangeHandler}>
    <option>none</option>
    <option value={'1'}>Minsk</option>
    <option value={'2'}>Molodechno</option>
    <option value={'3'}>LA</option>
  </select>
}

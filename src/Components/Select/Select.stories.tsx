import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {ItemType, Select, SelectPropsType} from './Select'
import s from "./Select.module.css";


export default {
  title: 'Select stories',
  component: Select,
}

const OnOffClicked = action('active window')
const onClickOnItem = action(`item was clicked `)





export const SelectClose = (props: SelectPropsType) => {
  return (
    <div className={s.select}>
      <div className={s.title} onClick={OnOffClicked}>{'title'}</div>
    </div>
  )
}


export const SelectOpen = () => {

  const [collapsed, setCollapsed] = useState(true);
  const [itemValue, setItemValue] = useState< 1 | 2 | 3 >(1)

  const items: ItemType[] = [
    {title: 'Vasya', value: 1},
    {title: 'Petya', value: 2},
    {title: 'Kolya', value: 3},
    {title: 'Sveta', value: 4},
    {title: 'Masha', value: 5},
    {title: 'Katya', value: 6}
  ]

  return (
    <div className={s.select}>
      <div className={s.title} onClick={OnOffClicked}>title</div>
      {items.map(item =>
        <div
          className={`${s.options} ${!collapsed ? '' : s.options__active}`}
          key={item.value}
          onClick={onClickOnItem}
        >{item.title}
        </div>)}
    </div>
  )
}

export const ChangeSelectMode = (props: SelectPropsType) => {

  const [collapsed, setCollapsed] = useState(true);
  const [itemValue, setItemValue] = useState< 1 | 2 | 3 >(1)

  const items: ItemType[] = [
    {title: 'Vasya', value: 1},
    {title: 'Petya', value: 2},
    {title: 'Kolya', value: 3},
    {title: 'Sveta', value: 4},
    {title: 'Masha', value: 5},
    {title: 'Katya', value: 6}
  ]

  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const changeSelectTitleValue = (id: any) => {
    setItemValue(id)
    setCollapsed(!collapsed)
  }

  return (
    <div className={s.select}>
      <div className={s.title} onClick={changeCollapsed}>{items[itemValue-1].title}</div>
      {items.map(item =>
        <div
          className={`${s.options} ${!collapsed ? '' : s.options__active}`}
          key={item.value}
          onClick={() => {changeSelectTitleValue(item.value)}}
        >{item.title}
        </div>)}
    </div>
  )
}
import React, {useState} from "react";
import s from './Select.module.css'

export type ItemType = {
  title: string
  value: any
}

export type SelectPropsType = {
  items: Array<ItemType>
  itemValue: any
  changeCollapsed: () => void
  changeSelectTitleValue: (id: any) => void
  collapsed: boolean
}

export const Select = (props: SelectPropsType) => {
  return (
    <div className={s.select}>
      <div className={s.title} onClick={props.changeCollapsed}>{props.items[props.itemValue-1].title}</div>
      {props.items.map(item =>
        <div
          className={`${s.options} ${!props.collapsed ? '' : s.options__active}`}
          key={item.value}
          onClick={() => {props.changeSelectTitleValue(item.value)}}
        >{item.title}
        </div>)}
    </div>
  )
}
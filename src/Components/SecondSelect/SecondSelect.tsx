import React, {useEffect, useState} from "react";
import s from './SecondSelect.module.css'
import {KeyboardEvent} from 'react'

export type ItemType = {
  title: string
  value: any
}

export type SelectPropsType = {
  items: ItemType[]
  value?: any
  onChange: (value: any) => void
}

export const SecondSelect = (props: SelectPropsType) => {

  const [active, setActive] = useState(true);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  const selectedItem = props.items.find(i => i.value === props.value);
  const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])


  const toggleItems = () => setActive(!active)
  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItems();
  }

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
          if (pretendentElement) {
            props.onChange(pretendentElement.value)
            return;
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value);
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false);
    }
  }

  return (
    <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
      <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
      {active && <div className={s.items}>
        {props.items.map(i => <div
          onMouseEnter={() => {
            setHoveredElementValue(i.value)
          }}
          className={`${s.item} ${hoveredItem === i ? s.selected : ''}`}
          key={i.value}
          onClick={() => onItemClick(i.value)}>{i.title}</div>)}
      </div>}
    </div>
  )
}
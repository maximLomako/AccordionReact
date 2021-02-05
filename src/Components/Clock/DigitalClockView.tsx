import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = (props) => {
    const getTwoDigitString = (number: number) => {
        return number < 10 ? '0' + number : number
    }
    return <>
        <span>{getTwoDigitString(props.date.getHours())}</span>
        :
        <span>{getTwoDigitString(props.date.getMinutes())}</span>
        :
        <span>{getTwoDigitString(props.date.getSeconds())}</span>
    </>
}
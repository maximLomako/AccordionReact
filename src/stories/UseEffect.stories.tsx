import React, {useEffect, useState} from "react";

// export default {
//     title: 'useEffect demo'
// }
//
// export const simpleExample = () => {
//     const [counter, setCounter] = useState(1);
//     const [fake, setFake] = useState(1);
//     console.log('Simple Example')
//
//     useEffect(() => {
//         console.log('every render')
//         document.title = counter.toString();
//     },)
//     useEffect(() => {
//         console.log('only first render') //componentDidMount
//         document.title = counter.toString();
//     }, [])
//     useEffect(() => {
//         console.log('first render, and every counter change')
//         document.title = counter.toString();
//     }, [counter])
//
//     return (
//         <>
//             Hello, {counter} {fake}
//             <button onClick={() => {
//                 setFake(fake + 1)
//             }}>+
//             </button>
//         </>
//     )
// }

// export const SetTimeoutExample = () => {
//     const [counter, setCounter] = useState(1);
//     const [fake, setFake] = useState(1);
//     const [date, setDate] = useState<Date>();
//     let hours;
//     let minutes;
//     let seconds;
//     useEffect(() => {
//         setInterval(() => {
//             setDate(new Date());
//         }, 1000)
//     }, [])
//
//     if (date) {
//         hours = date.getHours();
//         minutes = date.getMinutes();
//         seconds = date.getSeconds();
//     }
//
//     const addZero = (time: any) => {
//         if (time < 10) {
//             time = "0" + time;
//         }
//         return time;
//     }
//
//     return (
//         <>
//             {addZero(hours)} : {addZero(minutes)} : {addZero(seconds)}
//             <button onClick={() => {
//                 setFake(fake + 1)
//             }}>fake+
//             </button>
//             <button onClick={() => {
//                 setCounter(counter + 1)
//             }}>counter+
//             </button>
//         </>
//     )
// }
import React, {useMemo, useState} from "react";

export default {
    title: 'useMemoD'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA *= i;
        }
        return tempResultA;
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>result for a: {resultA}</div>
        <div>result for b: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Hello rerender');
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Petr', 'Vasiliy', 'Ignat']);
    const newArr = useMemo(() => users.filter(u => u.indexOf('a') > -1), [users])

    const addUser = () => {
        const newUsers = [...users];
        newUsers.push('Sveta' + new Date().getTime());
        setUsers(newUsers);
    }

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+</button><button onClick={() => {
                addUser()
            }}>+++</button>
            {counter}
            <Users users={newArr}/>
        </>
    )
}
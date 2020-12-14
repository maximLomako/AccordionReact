import React, {useState} from "react";

export default {
  title: 'React.memo demo'
}

const NewMessageCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log(1);
  return <div>{
    props.users.map((u, i) => <div key={i}>{u}</div>)
  }</div>
}

const Users = React.memo(UsersSecret);

export const Example1 = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(['Petr', 'Vasiliy', 'Ignat']);

  const addUser = () => {
    const newUsers = [...users];
    newUsers.push('Sveta' + new Date().getTime());
    setUsers(newUsers);
  }

  return (
    <>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>+</button>
      <button onClick={() => {
        addUser();
      }}>add</button>
      <NewMessageCounter count={counter}/>
      <Users users={users}/>
    </>
  )
}


import React from 'react';
import { useSelector } from 'react-redux'


const Show = () => {
    const users = useSelector((state)=>state.users.users)
    console.log(users)
    let userslist = <p>Loading...</p>;
    if (users.length > 0) {
        userslist = users.map((u, i) => (
            <li
                key={i}
            >
                <div>
                    <div >{u.name}</div>
                   { u.email}
                </div>
                <span >14</span>
            </li>
        ));}
  return (
    <div>
        {userslist}
    </div>
  )
}

export default Show
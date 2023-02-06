import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../store/userSlice/userSlice';


const Add = () => {
    const navigate = useNavigate();
   const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submithandler = (e)=>{
        e.preventDefault();
        const user ={ 
            name,
            email,
        }
        dispatch(addUser(user))
        navigate('/show')
    }
  return (
    <div>
      <form onSubmit={submithandler} >
<input type="text" placeholder='username'value={name} onChange={(e)=> setName(e.target.value)} /><br /><br />
<input type="text" placeholder='email' value={email}
 onChange={(e)=> setEmail(e.target.value)} /><br /><br />
<button>sumbit</button>

      </form>
    </div>
  )
}

export default Add

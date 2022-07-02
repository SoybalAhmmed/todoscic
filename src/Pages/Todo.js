import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Todo = () => {
    const [users, setUsers] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);

    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
        }
    }

    return (
        <div  className="container mx-auto text-center">
        <h2 className='text-4xl'>Todo List   </h2>
        
        <ul >
            {
                users.map(user => <li
                className='gap-y-1'
                key={user._id}
                >{user.name}
                <Link to={`/update/${user._id}`}><button className="btn text-sm mx-1 btn-primary">Update</button></Link>
                <button className="btn text-sm mx-1 bg-red-900" onClick={() => handleUserDelete(user._id)}>Delete</button>
                </li>)
            }
        </ul>
    </div>
    );
};

export default Todo;
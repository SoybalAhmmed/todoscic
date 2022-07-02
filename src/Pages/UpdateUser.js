import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        

        const updateUser = {name};

        // send data to the server
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('users added successfully!!!');
            event.target.reset();
        })
    }

    return (
        <div  className="container mx-auto text-center">
            <h2>Update:  {user.name}</h2>
            <form  onSubmit={handleUpdateUser}>
            <input type="text" name="name" placeholder="name"  className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Update User"  className="btn btn-secondary w-full max-w-xs" />
        
          </form>
        </div>
    );
};

export default UpdateUser;
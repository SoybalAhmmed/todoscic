import React, { useEffect, useState } from 'react';


const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);
    return (
        <div  className="container mx-auto text-center">
            <h2 className='text-4xl'>Todo List   </h2>
            
            <ul>
                {
                    users.map(user => <li
                    key={user._id}
                    >{user.name}
                    
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;
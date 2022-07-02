import React from 'react';


const AddTask = () => {
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        

        const user = {name};

        // send data to the server
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('users added successfully!!!');
            event.target.reset();
        })
    }
    return (
        
        <div  className="container mx-auto text-center mb-2">
            <h2>AddTaskS</h2>
            <form  onSubmit={handleAddUser}>
            <input type="text" name="name" placeholder="name"  className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Add User"  className="btn btn-secondary w-full max-w-xs" />
        
          </form>
        </div>
    );
};

export default AddTask;
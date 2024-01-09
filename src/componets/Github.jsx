import React, { useEffect, useState } from 'react';

function Github ()  {
    const [data ,setData]=useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/sabberrahman")
        .then(res=> res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    return (
        <div className='text-center bg-gray-800 text-white p-4 m-2 flex flex-col  items-center '>
            GitHub Followers : {data.followers} 
            <img  src={data.avatar_url} alt="gethub pfp" width={200}/>
            
        </div>
    );
};

export default Github;
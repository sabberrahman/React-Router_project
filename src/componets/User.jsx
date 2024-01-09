import React from 'react';
import { useParams } from 'react-router-dom';

function User  ()  {
    const {userid}= useParams();
    return (
        <div className='bg bg-gray-700 text-center p-3 text-2xl text-white'>
            user : {userid}
        </div>
    );
};

export default User;
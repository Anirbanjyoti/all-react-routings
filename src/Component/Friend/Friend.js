import React from 'react';
import './Friends.css'

const Friend = (props) => {
    const {id, name} = props.friend;
    return (
        <div className='friend'>
                <h1>{name}</h1>
                <p><button>Friend ID: {id}</button></p>
        </div>
    );
};

export default Friend;
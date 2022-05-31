import React from 'react';
import { Link } from 'react-router-dom';
import './Friends.css'

const Friend = (props) => {
    const {id, name} = props.friend;
    return (
        <div className='friend'>
                <h1>{name}</h1>
                <p><button> <Link to={'/Friend/'+id} >Go To Friends Details:</Link> </button></p>
        </div>
    );
};

export default Friend;
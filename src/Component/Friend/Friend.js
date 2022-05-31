import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friends.css'

const Friend = (props) => {
    const {id, name} = props.friend;

    const navigate = useNavigate();
    const showFriendDetails = () =>{
            navigate('/Friend/'+id);
    } 

    return (
        <div className='friend'>
                <h1>{name}</h1>
                <p><button> <Link to={'/Friend/'+id} >System one: Using Link to go to Details:</Link> </button></p>
                <p><button onClick={showFriendDetails}> System Two: Using Onclick to go to Details</button></p>

                

        </div>
    );
};

export default Friend;
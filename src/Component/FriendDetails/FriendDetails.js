import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendID} = useParams();

    // how to get idividual friend id without params
    const [friend, setFriend] = useState({});
    useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users/${friendID}`
      console.log(url);
      
        fetch(url)
        .then((res) => res.json())
        .then((data) => setFriend(data));
    }, [friendID]);
    return (
        <div>
            <h1>This your Friends details: <br /> ID {friendID}</h1>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h5>Address: {friend.address?.city}</h5>

        </div>
    );
};

export default FriendDetails;
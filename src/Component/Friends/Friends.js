import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
      fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
  <div className="friends">
        {
            friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
        }
  </div>
  );
};

export default Friends;

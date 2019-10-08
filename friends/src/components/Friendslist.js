import React from "react";
import FriendForm from "./FriendForm"


const FriendsList = () => {
    return(
        <div className="friendslist">
            <FriendForm />
            <img src="https://images.pexels.com/photos/1436618/pexels-photo-1436618.jpeg?cs=srgb&dl=adult-bestfriends-daylight-1436618.jpg&fm=jpg" alt="three friends"/>
             <h2>List of Friends</h2>
        </div>
    )
}
export default FriendsList
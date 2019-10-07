import React from "react";
import FriendForm from "./FriendForm"

const FriendsList = () => {
    return(
        <div className="friendlist">
        <h2>List of Friends</h2>
        <img src="https://images.pexels.com/photos/1436618/pexels-photo-1436618.jpeg?cs=srgb&dl=adult-bestfriends-daylight-1436618.jpg&fm=jpg"/>
        <FriendForm />
        </div>
    )
}
export default FriendsList
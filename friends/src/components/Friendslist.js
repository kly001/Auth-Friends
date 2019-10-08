import React from "react";
import FriendForm from "./FriendForm"

import {axiosWithAuth} from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state={
        friends:[]
    }
   

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth().get("/friends")
        .then(res=> {
            console.log("FriendsList res:",res)
            this.setState({
                
            })
        })
        .catch(error => console.log(error)

        )
    }
    render() {
    return(
        <div className="friendslist">
            <FriendForm />
            <img src="https://images.pexels.com/photos/1436618/pexels-photo-1436618.jpeg?cs=srgb&dl=adult-bestfriends-daylight-1436618.jpg&fm=jpg" alt="three friends"/>
             <h2>List of Friends</h2>
        </div>
    )
}
}

export default FriendsList
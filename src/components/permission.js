import TextArea from "antd/lib/input/TextArea";
import React from "react";
import "./permission.css";
const Permission =() =>{

    return(
<div className="question">
<div className="notice">
    <h1 className="announce">Announce_Something</h1>
    <input type="date" id="date" name="date" className="datepermission" />
    <div className="email">
    <input type="text" name="username" placeholder="Email"></input>
    </div>
<TextArea className="question1"></TextArea>

</div>
<input class="submit" type="button" name="" value="Submit"/>
</div>


    )
}
export default Permission;
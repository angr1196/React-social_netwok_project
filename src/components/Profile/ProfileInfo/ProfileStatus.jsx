
import React, { useEffect, useState } from "react";

const ProfileStatus =(props)=> {

   let [editMode, setEditMode] = useState(false)
   let[userStatus, setUserStatus] = useState(props.userStatus)

   useEffect(()=>{
    setUserStatus(props.userStatus)
   },[props.userStatus])

   const activateEditMode =()=>{
    setEditMode(true)
   }

   const deactivateEditMode =()=>{
    setEditMode(false)
    props.updateUserStatus(userStatus) 
   }

   const onStatusChange =(e)=>{
    setUserStatus(e.target.value)
}



  
        return <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateEditMode} >{props.userStatus|| "---"}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={userStatus}  />
                </div>

            }
        </div>

    }



export default ProfileStatus;
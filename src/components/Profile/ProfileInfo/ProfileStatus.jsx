
import React from "react";
import { updateUserStatus } from './../../../redux/profileReducer';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        userStatus: this.props.userStatus
    }

    activateEditMode = () => {

        this.setState({ editMode: true })
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false })
        this.props.updateUserStatus(this.state.userStatus)

    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.userStatus!==prevProps.userStatus){
            this.setState({userStatus: this.props.userStatus})
            }
        }

    

    onStatusChange =(e)=>{
        this.setState({userStatus: e.target.value})
    }

    render() {
        return <div>
            {!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.userStatus|| "---"}</span>
                </div>
                : <div>
                    <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.userStatus} />
                </div>

            }
        </div>

    }

}

export default ProfileStatus;
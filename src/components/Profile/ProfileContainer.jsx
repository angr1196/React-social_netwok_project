
import React from "react";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profileReducer';
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams, Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId ;
        if (!userId) userId = 2;
        if(!userId){
            this.props.history.push("/login")
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps) {
		let userId = this.props.router.params.userId;
		if (prevProps.router.params.userId !== userId) {
			let userId = 2;
			this.props.getUserProfile(userId);
        }
    }

    render() {
       
        return (
            <Profile {...this.props}  />
        )
    }
}


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}




let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.userStatus
    }
}

export default compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
withRouter,
withAuthRedirect)
(ProfileContainer)
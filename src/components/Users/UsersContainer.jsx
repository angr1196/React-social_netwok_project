import { connect } from "react-redux";
import { follow, unfollow, requestUsers} from "../../redux/usersReducer";
import React from 'react';
import Users from './Users'
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from "../../redux/users-selectors";
import { getCurrentPage, getUsers } from './../../redux/users-selectors';



class UserContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return <Users users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress ={this.props.followingInProgress} />

    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}



export default connect(mapStateToProps, {getUsers: requestUsers, unfollow, follow})(UserContainer);

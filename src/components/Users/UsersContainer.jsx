import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setTotalUsersCountAC, setCurrentPageAC } from "../../redux/usersReducer";
import axios from 'axios';
import React from 'react';
import Users from './Users'


class UserContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        }
        )
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        }
        )
    }

    render() {
        return <Users users ={this.props.users}
        totalUsersCount ={this.props.totalUsersCount}
        pageSize ={this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChange = {this.onPageChange}
        follow = {this.props.follow}
        unollow = {this.props.unfollow}/>

    }
}


let mapStateToProps = (state)=>{
return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount
}
}

let mapDispatchToProps =(dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(followAC(userId));
        },

        unfollow: (userId)=>{
            dispatch(unfollowAC(userId));
        },

        setUsers: (users)=>{
            dispatch(setUsersAC(users));
        },

        setTotalUsersCount: (usersCount) =>{
            dispatch(setTotalUsersCountAC(usersCount));
        },

        setCurrentPage: (page) =>{
            dispatch(setCurrentPageAC(page));
        }



    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);


import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setTotalUsersCountAC, setCurrentPageAC } from "../../redux/usersReducer";
import Users from "./Users";



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

export default connect(mapStateToProps, mapDispatchToProps)(Users);


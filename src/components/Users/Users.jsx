
import s from './Users.module.css'


let Users = (props) =>{

    // if(props.users.length ===0){
    //     props.setUsers(,)
    // }


return <div>
        {
            props.users.map(u =>
                <div key ={u.id}>
                    <span>
                        <div>
                            <img src={u.avaURL} className ={s.usersPhoto} />
                        </div>
                        <div>
                        {u.following
                        ?<button onClick = {()=> props.unfollow(u.id)}>Unfollow</button>
                        :<button onClick={()=> props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                       <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                       </span>
                    </span>
                </div>
            )
        }
    </div>


}

export default Users;
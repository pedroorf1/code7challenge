import React from 'react'
import api from '../../../api/api'
import { Link } from "react-router-dom"

import "./Users.css"

const Users = () => {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        const res = api.get("users")
            .then((response) => {

                setUsers(response.data)

            })
            .catch((err) => { console.log(err) })

    }, [])

    console.log(users)

    return (
        <div className='container'>
            <h2>Users</h2>

            {users.map((user) => (

                <div className='userlist' key={user.id}>
                    <div className='name'>{user.name}</div>
                    <Link to={`/user/${user.id}`} ><div className='btn'>Details</div></Link>
                    <Link to={`/posts/${user.id}/${user.name}`}><div className='btn'>Posts</div></Link>
                </div>

            ))}

        </div>

    )

}

export default Users
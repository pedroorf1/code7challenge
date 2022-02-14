import React from 'react'
import api from '../../../api/api'
import { useParams } from "react-router";

import Comments from '../../modules/comments/comments';
import user from './imgs/user.png'
import './Posts.css'

const Posts = () => {
    const { userid, username } = useParams();
    const [posts, setPosts] = React.useState([])
    const dataPostsUser = []

    React.useEffect(async () => {

        const resp = await api.get('posts')
            .then((response) => {
                // console.log(response.data)
                setPosts(response.data)
            })

    }, [])

    if (posts.length > 0) {

        posts.map((item) => {
            if (item.userId == userid) {
                // console.log(item)
                dataPostsUser.push(item)
            }
        })


    }

    console.log(dataPostsUser)


    return (
        <div className='container'>
            {dataPostsUser.map((item) => (

                <div className='userposts' key={item.id}>
                    <div className='posthead'>
                        <h5><img src={user} /><strong>{username}</strong> <p>{item.title}</p></h5>
                    </div>
                    <Comments idPost={item.id} />
                </div>

            ))}


        </div>
    )
}

export default Posts

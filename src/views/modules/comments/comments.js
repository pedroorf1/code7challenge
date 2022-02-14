import React from 'react';
import api from '../../../api/api';

import './comments.css';
import faceImg from './imgs/face.png';

const Comments = ({ idPost }) => {

    const [comm, setComm] = React.useState([])
    const [show, setShow] = React.useState(false)

    React.useEffect(async () => {

        const resp = await api.get(`comments?postId=${idPost}`)
            .then((response) => {
                setComm(response.data)
            })

    }, [show])

    // console.log("Comensts: ", comm)

    function handleClick() {
        setShow(!show)
        console.log(show)
    }

    return (
        <div className='commnets'>
            <div className='btn' onClick={handleClick}>click here to see/hide comments</div>
            {comm.map((com) => (
                <div className={show ? 'comDetails' : 'hidden'} key={com.id} >
                    <section key={com.name}><img src={faceImg} title='faceimg' className='faceimg' />{com.name}</section>
                    <div className='bodyComment'>
                        {com.body}
                    </div>
                </div>

            ))
            }


        </div >
    )
}

export default Comments
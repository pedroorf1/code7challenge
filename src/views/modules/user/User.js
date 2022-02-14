import React from 'react';
import api from '../../../api/api'
import { Link } from 'react-router-dom'
import { useParams } from "react-router";

import './User.css'

const User = () => {

    const { id } = useParams();

    const [user, setUser] = React.useState([])
    React.useEffect(async () => {
        const response = await api.get('users', { params: { id } })
            .then((res) => {
                setUser(res.data)
            })

    }, [])
    console.log(user)

    return (
        <div className='container'>
            <h2>User details</h2>

            {user.map((data) => (
                <div key={data.id} className='userdetails'>
                    <li key={data.name}><span>Name:</span> {data.name}</li>
                    <li key={data.username}><span>User Name:</span> {data.username}</li>
                    <li key={data.phone}><span>Phone:</span> {data.phone}</li>
                    <li key={data.email}><span>Email:</span> {data.email}</li>
                    <li key={data.website}>
                        <span>
                            <a href={`http://${(data.website)}`} target="_blank" >Web Site:</a>
                        </span>
                        {data.website}</li>
                    <li key={data.address.city}><span>City:</span> {data.address.city}</li>
                    <li key={data.address.geo}>
                        <span>
                            <a href={`https://www.google.com.br/maps/@${data.address.geo.lat},${data.address.geo.lng}`} target="_blank">
                                Loc Geo: Lat:
                            </a>
                        </span> {data.address.geo.lat} <span>| Long:</span> {data.address.geo.lng} </li>
                    <li key={data.address.street}><span>Street:</span> {data.address.street}</li>
                    <li key={data.address.suite}><span>Suite:</span> {data.address.suite}</li>
                    <li key={data.address.zipcode}><span>Zip Code:</span> {data.address.zipcode}</li>
                </div>

            ))}

        </div>
    )
}

export default User
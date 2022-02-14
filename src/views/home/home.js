import React from 'react';
import "./Home.css"

import Banner from "./img/banner_inicial.png"

const Home = () => {

    return (
        <div className='container home'>
            <div className='banner'>
                <section className='collorPadrao'>Atenda seu cliente pelo melhor canal que existe:</section>
                <section className='azulPadrao'>o canal que ele preferir.</section>
                <section className='TextCollor'>Oferecemos todas as ferramentas para simplificar a comunicação entre marcas e consumidores, por canais simples ou de forma integrada.</section>

            </div>
            <div className='banner'>
                <img src={Banner}></img>
            </div>


        </div>

    )
}

export default Home
import React from 'react'
import { Carousel } from 'antd'
import imagen1 from '../../Media/img/Uno.jpeg'
import imagen2 from '../../Media/img/Dos.jpeg'
import imagen3 from '../../Media/img/Tres.jpeg'

const Home = () => (
    <Carousel vertical autoplay style={{height:"100%"}}>
    <div><img src={imagen1} alt="Uno"/></div>
    <div><img src={imagen2} alt="Dos"/></div>
    <div><img src={imagen3} alt="Tres"/></div>
    </Carousel>
)

export default Home
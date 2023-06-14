import React from 'react'
import { Container, Content, Img } from './style'
import { Carousel } from 'antd';
import hero from '../../assets/img/hero.png'

export default function Slider() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <Container>
      <Content>
        <Carousel autoplay dots={false}>
        <Img src={hero}/>
        <Img src={hero}/>
        <Img src={hero}/>
        </Carousel>
      </Content>
    </Container>
  )
}

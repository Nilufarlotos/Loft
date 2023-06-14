import React, { useEffect, useState } from 'react'
import { Container, Content, Row, Title } from './style'
import Slider from '../../components/Slider'
import Card from '../../components/Card'
import axios from 'axios'
import Footer from '../../components/Footer'
import { useActive } from '../../context/Active'

export default function Home() {
  const [data, setData] = useState([])
  const [render,setRender] = useState(false);
  const [active,setActive] = useActive()

   useEffect(()=>{
      axios.get("https://6427fbdc46fd35eb7c492488.mockapi.io/student",{
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        setData(res?.data)
        setActive(!active)
      })
      .catch(error=>console.log(error))
   },[render])

   

  return (
    <Container>
      <Content>
        <Slider />
        <Title>Хиты продаж</Title>
        <Row>
           {
          data.map(item=><Card setRender={setRender} key={item.id} value={item}/>)
        }
        </Row>
      </Content>
      <Footer/>
    </Container>
  )
}

import React, { useEffect, useState } from 'react'
import { Container,Menu, Row } from './style'
import { Link } from 'react-router-dom'
import List from '../../components/List'
import Footer from '../../components/Footer/index'
import { useStoreg } from '../../context/storeg';
import notfound  from '../../assets/img/empty.avif'
export default function Packet() {
  const [data,setData] = useState([])
  const [store,setStore] = useStoreg()
  useEffect(()=>{
    const d = JSON.parse(localStorage.getItem('loft'));
    if(d){
      setData([...d])
    }
    else{
      setData([])
    }
    
  },[store])
  return (
    <>
    
    <Container>
        <Menu>
          <span><Link to={'/'}>Главная</Link> / Корзина </span>
        </Menu>
        <Row>
          <Row.Title>Ваша корзина</Row.Title>
          <Row.Title>{data.length} предмета</Row.Title>
        </Row>

        <div>
          {
            data.length>0?
            data.map(item=><List key={item.id} value={item}/>)
            :
            <div style={{textAlign:"center",width:"100%"}}> <img src={notfound} alt="" /></div>
          }
        </div>
       
    </Container>
    <Footer/>
    </>
  )
}

import React, { useState, useEffect } from 'react'
import { Container, Content, Delevery, Form, Icons, Item, Logo, Phone, Heart, Cart } from './style'
import logo from '../../assets/img/logo.png'
import serach from '../../assets/img/search.png'
import phone from '../../assets/img/phone2.png'
import delevery from '../../assets/img/delivery-icon.png'
import heart from '../../assets/img/heart.png'
import bag from '../../assets/img/bag.png'
import user from '../../assets/img/user.png'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import { useActive } from '../../context/Active'
import { useStoreg } from '../../context/storeg';
export default function Navbar() {
  const [active, setActive] = useActive()
  const [data, setData] = useState([])
  const [local, setLocal] = useState(false)
  const [store,setStore] = useStoreg()

  useEffect(()=>{
     let res = JSON.parse(localStorage.getItem('loft'));
     if(res){
       setLocal(true)
     }
     else{
      setLocal(false)
     }
      
  },[store])


  useEffect(() => {
    axios.get("https://6427fbdc46fd35eb7c492488.mockapi.io/student", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        let active = res.data.filter(res => res.active == true);
        setData(active)
      })
      .catch(error => console.log(error))
  }, [active])
  //  console.log(data)

  return (
    <Container>
      <Content>
        <Link to={'/home'}> <Logo src={logo} alt='logo' /></Link>
        <NavLink to={"/home"}><Item>Главная</Item></NavLink>
        <NavLink to={"/about"}> <Item>О нас</Item></NavLink>
        <NavLink to={"/contact"}>  <Item>Контакты</Item></NavLink>

        <Form>
          <Form.Img src={serach} />
          <Form.Input placeholder="Поиск" />
        </Form>
        <Phone>
          <Phone.Img src={phone} />
          <Phone.Item href="tel:8 (964) 89 99 119"> 8 (964) 89 99 119</Phone.Item>
        </Phone>
        <Delevery>
          <Delevery.Img src={delevery} />
          <Delevery.Item>Доставка</Delevery.Item>
        </Delevery>
        <Icons>
          <Link to={'/favourite'}>
            <Heart className={data.length > 0 ? "favoret" : ""} />
          </Link>
          <Cart>
           <Link to={"/packet"}> <Icons.Icon src={bag} /></Link>
            {
              local&& <Cart.Icon />
            }
           
          </Cart>

          <Icons.Icon src={user} />
        </Icons>
      </Content>
    </Container>
  )
}

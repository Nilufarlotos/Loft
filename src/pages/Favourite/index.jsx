import React,{useState,useEffect} from 'react'
import { Container, Content, Row,Menu } from './style'
import Footer from '../../components/Footer'
import axios from 'axios'
import Card from '../../components/Card'
import empty from '../../assets/img/empty.avif'
import { Link } from 'react-router-dom'
import { useActive } from '../../context/Active'
export default function Favourite() {
  const [render,setRender] = useState(false);
  const [data, setData] = useState([])
  const [active,setActive] = useActive()

  useEffect(()=>{
     axios.get("https://6427fbdc46fd35eb7c492488.mockapi.io/student",{
       headers:{
         "Content-Type":"application/json"
       }
     })
     .then(res=>{
       let d = res.data.filter(res=>res.active==true);
       setData(d);
       setActive(!active)
     })
     .catch(error=>console.log(error))
  },[render])
  return (
    <Container>
      <Content>
      <Menu>
          <span><Link to={'/'}>Главная</Link> / Гостинные / Мягкая мебель / Диваны</span>
        </Menu>
        <Row>
         
          {
            data.length>0?
            data.map(item=><Card setRender={setRender} key={item.id} value={item}/>)
            :
           <div style={{textAlign:"center",width:"100%"}}> <img src={empty} alt="" /></div>
          }
        </Row>
        <Footer/>
      </Content>
    </Container>
  )
}

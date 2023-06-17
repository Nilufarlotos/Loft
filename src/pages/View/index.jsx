import React, { useEffect, useState } from 'react'
import { Col, Comment, Container, Detaels, Img, Menu, Name, Nav, Row, Sizes, Star, Stars, Title,Icon } from './style'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import star from '../../assets/img/star.png'
import heart from '../../assets/img/heart.png'
import Card from '../../components/Card';
import { useActive } from '../../context/Active'
import Footer from '../../components/Footer';

export default function View() {
  const [active,setActive]  =useActive()
  const [data, setData] = useState({})
  const [product, setProduct] = useState([])
  const [render,setRender] = useState(false)
  const params = useParams();
  useEffect(() => {
    axios.get(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${params?.id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data)
      setData({ ...res.data })
      
    })
      .catch(error => console.log(error))
  }, [params?.id])


  useEffect(() => {
    axios.get("https://6427fbdc46fd35eb7c492488.mockapi.io/student", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        setProduct(res?.data)
        setActive(!active)
      })
      .catch(error => console.log(error))
  }, [render])

  return (
    <>
      <Container>
        <Menu>
          <span><Link to={'/'}>Главная</Link> / Гостинные / Мягкая мебель / Диваны</span>
        </Menu>
        <Row>
          <Col style={{ textAlign: "center" }}><Img src={data?.url} /></Col>
          <Col>
            <Stars> <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
            </Stars>
            <Title>{data?.name}</Title>
            <Name>{data?.title}</Name>
            <Detaels>
              <Detaels.Price>{data?.price}₽</Detaels.Price>
              <Detaels.Button>Купить</Detaels.Button>
              <Icon src={heart} className={data?.active ? "favoret" : ""} />
              <Detaels.Text>
                Добавить в желаемое
              </Detaels.Text>
            </Detaels>
            <Sizes>
              <Sizes.Title>Размер (Д × Ш × В)</Sizes.Title>
              <Sizes.Text> {data?.width}CM × {data.depth}CM × {data?.height} </Sizes.Text>
            </Sizes>
            <Comment>
              <Comment.Title>Описание</Comment.Title>
              <Comment.Text>
                Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс». Сдержанный скандинавский дизайн украсит любую современную обстановку. Элегантность, комфорт и функциональность,
                собранные воедино – «Динс» просто создан для размеренного отдыха в кругу семьи или компании друзей!
              </Comment.Text>
            </Comment>
          </Col>
        </Row>

        <Nav>Хиты продаж</Nav>
        <Row>
          {
            product.map(item => <Card setRender={setRender} key={item.id} value={item} />)
          }
        </Row>

      </Container>
      <Footer />
    </>
  )
}

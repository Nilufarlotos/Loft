import React, { useState } from 'react'
import { Button, Container, Footer, Heart, Img, Price, SubTitle, Text, Title } from './style'
import chair from '../../assets/img/chair.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStoreg } from '../../context/storeg';
export default function Card({ value, setRender }) {
    const [store,setStore] = useStoreg()
    const navigate = useNavigate()
    const getId = (id) => {
        axios.get(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${id}`, {
            headers: {

                "Content-Type": "application/json"
            }
        }).then(res => putData(res.data))
            .catch(error => console.log(error))
    }

    const putData = (d) => {
        d.active = !d.active;
        axios.put(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${d.id}`, d, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            setRender((data) => !data)
        })
            .catch(error => console.log(error))
    }

    const addProduct = (item) => {
        
        setStore(!store)

        let res = JSON.parse(localStorage.getItem('loft'))

        if (res) {
            console.log(res)
            
           let result = res.filter(i => i.id == item.id);
            if (result.length > 0) {
                res.map(a => {
                    if (a.id == item.id) {
                        a.count = a.count + 1;
                    }
                    return a;
                })
                localStorage.setItem('loft', JSON.stringify(res))
            }
            else{
                item.count = 1;
                localStorage.setItem('loft', JSON.stringify([...res,item]))  
            }
        }
        else {
            item.count = 1;
            localStorage.setItem('loft', JSON.stringify([item]))
        }
    }


    return (
        <Container >
            <Heart>
                <Heart.Black className={value?.active ? "favoret" : ""} onClick={() => getId(value?.id)} />
            </Heart>
            <Container.Header onClick={() => navigate(`/view/${value?.id}`)}>
                <Img src={value.url} />
            </Container.Header>
            <Container.Body>
                <Title>{value.name}</Title>
                <Text>{value.title}</Text>
                <Price>{value.price} ₽</Price>
                <SubTitle>Размеры</SubTitle>
                <Footer>
                    <Footer.Col>
                        <Footer.Text>ШИРИНА</Footer.Text>
                        <Footer.Size>{value.width} СМ</Footer.Size>
                    </Footer.Col>
                    <Footer.Col>
                        <Footer.Text>ГЛУБИНА</Footer.Text>
                        <Footer.Size>{value.depeth} СМ</Footer.Size>
                    </Footer.Col>
                    <Footer.Col>
                        <Footer.Text>ВЫСОТА</Footer.Text>
                        <Footer.Size>{value.height} СМ</Footer.Size>
                    </Footer.Col>
                </Footer>
                <Button onClick={() => addProduct(value)}>Добавить в корзину</Button>
            </Container.Body>
        </Container>
    )
}

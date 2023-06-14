import React, { useState } from 'react'
import { Button, Container, Footer, Heart, Img, Price, SubTitle, Text, Title } from './style'
import chair from '../../assets/img/chair.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Card({ value, setRender }) {
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

        let res = JSON.parse(localStorage.getItem('loft'))
        if (!res) {
            item.count = 1;
            localStorage.setItem('loft', JSON.stringify([item]))
        }
        else {

            let s = res.map(el => {
                if (el.id == item.id) {
                    el.count = el.count + 1;
                    return el
                }
            })


            localStorage.setItem('loft', JSON.stringify(s))
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

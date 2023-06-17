import React, { useEffect, useState } from 'react'
import { Col, Container, Content, Item, Row, Title, Items, Logo, Address, Img, Close } from './style'
import logo from '../../assets/svg/logo.svg'
import { useStoreg } from '../../context/storeg';
export default function List({ value }) {
    const [store, setStore] = useStoreg()
    const removeItem = (id) => {
        console.log(id)
        let carts = JSON.parse(localStorage.getItem('loft'))
        if (carts) {
            debugger
            let filter = carts.filter(item => item.id != id);
            if (filter.length > 0) {
                localStorage.setItem('loft', JSON.stringify(filter))
            }
            else{
                localStorage.removeItem('loft')
            }
            setStore(!store)
        }
    }

    return (
        <Container>
            <Content>
                <Img src={value?.url} />
                <div>
                    <Content.Title>{value?.name}</Content.Title>
                    <Content.Count>Количество: {value?.count}</Content.Count>
                </div>
            </Content>
            <Close onClick={() => removeItem(value.id)}>&#215;</Close>
        </Container>
    )
}

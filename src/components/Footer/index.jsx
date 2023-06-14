import React from 'react'
import { Col, Container, Content, Item, Row, Title, Items, Logo, Address } from './style'
import logo from '../../assets/svg/logo.svg'

export default function Footer() {
    return (
        <Container>
            <Content>
                <Title>НАВИГАЦИЯ</Title>
                <Row>
                    <Col>
                        <Items>
                            <Item>Кухни</Item>
                            <Item>Спальни</Item>
                            <Item>Гостинные</Item>
                        </Items>
                        <Items>
                            <Item>Прихожие</Item>
                            <Item>Офисная мебель</Item>
                            <Item>Детская</Item>
                        </Items>
                        <Items>
                            <Item>Шкафы</Item>
                            <Item>Матрасы</Item>
                            <Item>Мягкая мебель</Item>
                        </Items>
                    </Col>
                    <Col >
                        <div style={{textAlign:'right'}}>
                            <Logo src={logo} /><br />
                            <Address>
                                г. Анапа, Анапское шоссе, <br />
                                30 Ж/К Черное море
                            </Address>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Container>
    )
}

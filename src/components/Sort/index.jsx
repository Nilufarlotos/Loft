import React from 'react'
import { Container, Content,Item, Row } from './style'
import kitchen from '../../assets/img/kitchen.png'
import bedroom from '../../assets/img/bedroom.png'
import livingroom from '../../assets/img/livingroom.png'
import closet from '../../assets/img/closet.png'
import office from '../../assets/img/office.png'
import childrensroom from '../../assets/img/childrensroom.png'
import etc from '../../assets/img/etc.png'
export default function Sort() {
  return (
    <Container>
      <Content>
        <Row>
           <Item>
        <Item.Img src={kitchen}/>
        <Item.Text>Кухни</Item.Text>
      </Item>
      <Item>
        <Item.Img src={bedroom}/>
        <Item.Text>Спальни</Item.Text>
      </Item>
      <Item>
        <Item.Img src={livingroom}/>
        <Item.Text>Гостинные</Item.Text>
      </Item>
      <Item>
        <Item.Img src={closet}/>
        <Item.Text>Прихожие</Item.Text>
      </Item>
      <Item>
        <Item.Img src={office}/>
        <Item.Text>Офисная мебель</Item.Text>
      </Item>
      <Item>
        <Item.Img src={childrensroom}/>
        <Item.Text>Детская</Item.Text>
      </Item>
      <Item>
        <Item.Sale>Акция</Item.Sale>
      </Item>
      <Item>
        <Item.Img src={etc}/>
      </Item>
        </Row>
     
      </Content>
    </Container>
  )
}

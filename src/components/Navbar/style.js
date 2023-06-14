import styled from 'styled-components';
import { ReactComponent as heart } from '../../assets/svg/heart.svg'
import { ReactComponent as cart } from '../../assets/svg/cart.svg'
export const Container = styled.div`
height: 126px;
display: flex;
align-items: center;
`

export const Content = styled.div`
width: 100%;
max-width: 1240px;
margin: 0 auto;
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Logo = styled.img`
 width: 112px;
 height: 25px;
 object-fit: contain;
`
export const Item = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #414141;
padding-left: 30px;
`
export const Form = styled.div`
max-width: 280px;
height: 40px;
padding: 13px 15px;
background: #F9F9F9;
display: flex;
align-items: center;
margin-left: 40px;
`
Form.Img = styled.img`
`
Form.Input = styled.input`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #414141;
border: 0;
background: none;
outline: none;
margin-left: 20px;
`

export const Phone = styled.div`
 display: flex;
 align-items: center;
`
Phone.Img = styled.img`
 margin-left: 32px;
`
Phone.Item = styled.a`
 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #414141;
margin-left: 11px;
`

export const Delevery = styled.div`
 display: flex;
 align-items: center;
`
Delevery.Img = styled.img`
 margin-left: 32px;
`
Delevery.Item = styled.span`
 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #414141;
margin-left: 11px;
`

export const Icons = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 40px;
`
Icons.Icon = styled.img`
margin-left: 30px;
 
`
export const Heart = styled(heart)`
cursor: pointer;
`
export const Cart = styled.div`
 position: relative;
`
Cart.Icon = styled(cart)`
position: absolute;
top: 2px;
    right: -1px;
`
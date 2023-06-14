import styled from 'styled-components';

export const Container = styled.div`
height:70px;
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
background: #FFFFFF;
`
export const Row=styled.div`
width: 100%;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
padding: 23px 40px;
display: flex;
align-items: center;
justify-content: space-between;
background: #FFFFFF;
`
export const Item = styled.div`
 display: flex;
 align-content: center;
`
Item.Img = styled.img`
 
`
Item.Text = styled.div`
 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #414141;
padding-left: 10px;
`
Item.Sale = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #D74444;
`


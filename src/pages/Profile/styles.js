import styled from 'styled-components'

export const Background = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
justify-content: center;

    div.ContainerPhoto {
    } 


`

export const ProfilePhoto = styled.div`
margin: 0;
padding: 0;
    
    img {
        object-fit: cover;
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }
`

export const ChangePhoto = styled.div`
padding: 0;
margin: 0;
cursor: pointer;
font-family: 'MontSerrat', sans-serif;
font-weight: 600;
color: #BA66A3;
`
export const CamIcon = styled.img`
padding: 20%;
position: relative;
width: 16px;
padding: 0;
margin-right: 10px;
`

export const Title = styled.div`
font-family: 'MontSerrat', sans-serif;
font-size: 30px;
font-weight: 300;
`

export const SubTitle = styled.div`
font-family: 'MontSerrat', sans-serif;
display: inline;
font-size: 40px;
font-weight: 700;
color: #C882B4;
`
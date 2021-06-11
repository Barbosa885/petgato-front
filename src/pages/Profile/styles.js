import styled from 'styled-components'

export const Background = styled.div`
margin: 0;
padding: 0;
justify-content: center;
align-items: center;
`

export const ProfilePhoto = styled.div`
margin: 0;
padding: 0;
display: inline;
position: relative;
left: 190px;
top: 50px;
    
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
position: relative;
display: inline;
top: 75px;
cursor: pointer;
font-family: 'MontSerrat', sans-serif;
font-weight: 600;
color: #BA66A3;
`
export const CamIcon = styled.img`
cursor: pointer;
display: inline;
width: 16px;
padding: 0;
margin-right: 10px;
`

export const Title = styled.div`
font-family: 'MontSerrat', sans-serif;
position: relative;
display: inline;
left: 70px;
bottom: 110px;
font-size: 20px;
font-weight: 500;
`

export const SubTitle = styled.div`
font-family: 'MontSerrat', sans-serif;
position: relative;
display: inline;
right: 60px;
bottom: 70px;
font-size: 35px;
font-weight: 600;
color: #C882B4;
`
export const InputNome = styled.span`
display: flex;
position: relative;
justify-content: center;
flex-direction: row;
bottom: 70px;
right: 50px;
`

export const InputNovaSenha = styled.span`
display: flex;
position: relative;
justify-content: center;
flex-direction: row;
bottom: 70px;
right: 50px;
`

export const InputSenhaAtual = styled.span`
display: flex;
position: relative;
justify-content: center;
flex-direction: row;
bottom: 70px;
right: 50px;
`
export const InputEmail = styled.span`
display: inline;
position: relative;
justify-content: center;
flex-direction: row;
bottom: 269px;
left: 730px;
`
export const InputConfirmSenha = styled.span`
display: inline;
position: relative;
justify-content: center;
flex-direction: row;
bottom: 200px;
left: 480px;
`

export const ButtonContainer = styled.div`
display: inline;
position: relative;
box-sizing: content-box;
justify-content: center;
bottom: 40px;
right: 55px;
`

export const txt = styled.a`
display: inline;
position: relative;
right: 165px;
bottom: 173px;
font-family: 'MontSerrat', sans-serif;
font-size: 0.6rem;
opacity: 0.6;
font-weight: 600;
`
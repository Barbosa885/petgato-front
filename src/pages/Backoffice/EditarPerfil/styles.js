import styled from 'styled-components'

export const Background = styled.div`
  margin: 30px auto;
  padding: 0;
  width: 80%;
  height: 100%;
`
export const InputContainer = styled.div`
  display: grid;
  gap: 10px 50px;  
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    ". ."
    ". .";
  margin-top: 30px; 
`

export const Title = styled.span`
  font-family: 'Montserrat',sans-serif;
  font-size: 22px;
`

export const Subtitle = styled.span`
  font-family: 'Montserrat',sans-serif;
  color: #C882B4;
  font-size: 2rem;
  font-weight: 700;
`

export const Form = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;

`

export const ButtonContainer = styled.div`
  display: inline-flex;
  
  Button { 
    margin-right: 20px;
  }
`
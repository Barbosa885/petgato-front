import styled from 'styled-components';

export const Contact = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Image = styled.img`
  width: 22%;
  height: 65%;
`

export const Form = styled.form`
  margin-left: 3rem;
  width: 65%;
  height: 60%;
`

export const Title = styled.span`
  font-family: 'Montserrat',sans-serif;
  font-size: 22px
`

export const Subtitle = styled.h1`
  font-family: 'Montserrat',sans-serif;
  color: #C882B4;
`

export const Label = styled.label`
  color: #C882B4;
  font-family: 'Montserrat',sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const FormContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Submit = styled.div`
  margin-left: 90%;
`

export const Message = styled.textarea`
  width: 100%;
  height: 25vh;
`

export const TextArea = styled.textarea`
  width: 30vw;
  height: 7vh;
`
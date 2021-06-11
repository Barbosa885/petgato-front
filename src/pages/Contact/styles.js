import styled from 'styled-components';

export const Contact = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Image = styled.img`
  object-fit: cover;
  width: 30%;
  height: 60%;
`

export const Form = styled.form`
  margin-left: 3rem;
  margin-bottom: 5rem;
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
  font-weight: bold;
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
  margin-left: 88%;
`
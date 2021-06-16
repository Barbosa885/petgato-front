import styled from 'styled-components'

export const Backoffice = styled.div`
    font-family: 'MontSerrat', sans-serif;
    display: flex;
    flex-direction: column;
    padding: 3rem;
`;

export const Title = styled.span`
  font-family: 'Montserrat',sans-serif;
  font-size: 22px
`

export const Subtitle = styled.h1`
  font-family: 'Montserrat',sans-serif;
  color: #C882B4;
`

export const Table = styled.tr`
    :nth-child(even){
      background: #f2f2f2;
    }
`

export const TableTitle = styled.th`
    text-align: left;
    padding: 8px;
    font-size: 25px;
    display: inline-block;
    width: 180px;
`

export const Subtable = styled.td`
    text-align: left;
    padding: 8px;
    font-size: 25px;
    display: inline-block;
    width: 180px;
    overflow: hidden !important;
`

export const Link = styled.td`
  text-align: left;
  padding: 8px;
  margin-left: 1rem;
  font-size: 20px;
  display: inline-block;
  overflow: hidden !important;
  color: #C882B4;
`

export const PostTitle = styled.td`
text-align: left;
padding: 8px;
font-size: 25px;
display: inline-block;
width: 550px;
overflow: hidden !important;
text-overflow: ellipsis;
`

export const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
import styled from 'styled-components'

export const Backoffice = styled.div`
    font-family: 'MontSerrat', sans-serif;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

export const Title = styled.span`
    font-family: 'Montserrat',sans-serif;
    font-size: 18px
`

export const Subtitle = styled.h1`
    font-family: 'Montserrat',sans-serif;
    color: #C882B4;
    font-size: 28px
`

export const Table = styled.tr`
    :nth-child(even){
      background: #f2f2f2;
    }
`

export const TableTitle = styled.th`
    text-align: left;
    padding: 8px;
    font-size: 15px;
    display: inline-block;
    width: 180px;
`

export const Subtable = styled.td`
    text-align: left;
    padding: 8px;
    font-size: 17px;
    display: inline-block;
    width: 180px;
`

export const PostTitle = styled.td`
    text-align: left;
    padding: 8px;
    font-size: 20px;
    display: inline-block;
    width: 550px;
    overflow: hidden !important;
    text-overflow: ellipsis;
`

export const EditButton = styled.td`
    text-align: left;
    padding: 8px;
    margin-left: 1rem;
    font-size: 15px;
    display: inline-block;
    overflow: hidden !important;
    color: #C882B4;
`

export const PageButtonsDiv= styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
`

export const Button= styled.button`
    border: 1px solid #BA66A3;
    background-color: white;
    color: black;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background: #BA66A3;
    }
`

export const Modal= styled.div`
display: none; /* Hidden by default */
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
padding-top: 100px; /* Location of the box */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const ModalContent= styled.div`
background-color: #fefefe;
margin: auto;
padding: 20px;
border: 1px solid #888;
width: 80%;
`
export const Close= styled.span`
color: #aaaaaa;
float: right;
font-size: 28px;
font-weight: bold;
}

&:hover,
&:focus {
color: #000;
text-decoration: none;
cursor: pointer;
}
`
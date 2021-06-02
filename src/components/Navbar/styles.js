import styled from 'styled-components';

export const Background = styled.section`
margin: 0;
padding: 0;
overflow: hidden;
justify-content: space-between; 
box-shadow: 0px 0px 10px black;
flex-direction: column;
background-color: #BA66A3;
list-style-type: none;
height: 15vh;

    ul {
        position: none;
        margin: 0;
        margin-right: 3vw;
        margin-top: 3.5vh;
        padding: 0;
        float: right;
        text-decoration: none;
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
        font-size: 120%;
        
        a {
            padding: 15px;
            text-decoration: none;
            color: #fff;
            font-weight: 300;
        };
        
        a:hover {
            position: relative;
            padding: 16px 0 5px;
            margin: 0 25px;
            text-decoration: none;
            font-size: 20px;
            font-weight: 500;
            transition: .4s
        };
        
    }
    
    li { 
        letter-spacing: 0.5px;
        margin-top: 2%;
        display: inline;
        float: left;
        
    }


`;

export const Logo = styled.img`
margin-left: 4vw;
width: 9%;
margin-top: 2.5vh;

` 


import styled from 'styled-components'

export const Background = styled.div`
  display: flex;
  margin: 50px auto 50px 50px;
  padding: 0;
`
export const LeftBox = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  flex-direction: column;
`

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  background-color: #FBE9F6;
    
  img.Foto{
    position: relative;
    margin-top: -2rem;
    object-fit: cover;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }

` 

export const TextoContainer = styled.div`
  display: flex;
  font-family: 'MontSerrat', sans-serif;
  width: 80%;
  text-align: center;
  margin: 0;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1em;
`

export const Title = styled.a`
  font-family: 'MontSerrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
`

export const Subtitle = styled.a`
  font-family: 'MontSerrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #C882B4;
`

export const Texto = styled.a`
  font-family: 'MontSerrat', sans-serif;
  font-weight: 350;
  font-size: 0.87rem;
  margin-top: 0.6rem;
`

export const RedesContainers = styled.div`
  display: flex;
  width: 40%;
  height: 25px;
  margin-top: 15px;
  justify-content: space-between;
  
  img.Twitter {
    cursor: pointer;
    border-style: solid;
    border-color: #FFFF;
  }

  img.Facebook {
    cursor: pointer;
    border-style: solid;
    border-color: #FFFF;
  }

  img.Instagram {
    cursor: pointer;
    border-style: solid;
    border-color: #ffffff;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  width: 65%;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  img.Botao {
    width: 25px;
    height: 25px;
    margin-left: -2rem;
    z-index: 1;
  }
`


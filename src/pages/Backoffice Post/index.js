import React, {useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import PublishButton from '../../components/WhiteButton';
import * as Styled from './styles';
import api from '../../services/api';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BackofficePost = () => {
    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem('token');
    const [page, setPage] = useState('1');
    let {id} = useParams();

    useEffect(() => {
    setPage(id)
    api.get(`posts?page=${id}&per_page=4`, {
        headers:{
            'Authorization': `${token}`,
        }
    })
    .then((response) => {
        setPosts(response.data);
    })
    .catch(error => {
        console.error(error);
        alert('Ocorreu um erro! Tente novamente.');
    });
    },[id])
  
    const handlePreviousPage = (id) => {
      if (id === "1") {
        return id;
      }
      return parseInt(id) - 1;
    }
  
    const handleNextPage = (id) => {
      if (id === "20") {
        return id;
      }
      return parseInt(id) + 1;
    }

    return (
        <div>
            <Navbar/>
            <Styled.Backoffice>
                <Styled.Title>BACKOFFICE</Styled.Title>
                <Styled.Subtitle>Todas as publicações</Styled.Subtitle>
                <Styled.Table>
                    <Styled.TableTitle>#</Styled.TableTitle>
                    <Styled.TableTitle>Data</Styled.TableTitle>
                    <Styled.TableTitle>Título</Styled.TableTitle>
                    <Styled.TableTitle></Styled.TableTitle>
                    <Styled.TableTitle></Styled.TableTitle>
                </Styled.Table>
                {posts.map(post =>
                    <Styled.Table>
                        <Styled.Subtable>{post.id}</Styled.Subtable>
                        <Styled.Subtable>{post.created_at}</Styled.Subtable>
                        <Styled.PostTitle><Styled.PostDiv>{post.title}</Styled.PostDiv></Styled.PostTitle>
                        <Styled.EditButton><strong>Excluir</strong></Styled.EditButton>
                        <Styled.EditButton><strong>Editar</strong></Styled.EditButton>
                    </Styled.Table>)}
                <Styled.Div>
                <Link to={'/createPubli'}>
                    <PublishButton>Nova publicação</PublishButton>
                </Link>
                    <Styled.PageButtonsDiv>
                        <Link to={`/backofficePost/${handlePreviousPage(id)}`}>
                            <Styled.Button>{'<<'}</Styled.Button>
                        </Link>
                        {id-1 != 0 ? (
                        <Link to={`/backofficePost/${handlePreviousPage(id)}`}>
                            <Styled.Button>{id - 1}</Styled.Button>
                        </Link>
                        ) : (<p></p>)}
                        <Link to={`/backofficePost/${id}`}>
                            <Styled.Button style={{backgroundColor: "#BA66A3"}}>{id}</Styled.Button>
                        </Link>
                        {parseInt(id)+1 != 21 ? (
                        <Link to={`/backofficePost/${handleNextPage(id)}`}>
                            <Styled.Button>{parseInt(id) + 1}</Styled.Button>
                        </Link>
                        ) : (<p></p>)}
                        <Link to={{ pathname: `/backofficePost/${handleNextPage(id)}` }}>
                            <Styled.Button>{'>>'}</Styled.Button>
                        </Link>
                    </Styled.PageButtonsDiv>
                </Styled.Div>
            </Styled.Backoffice>
            <Footer/>
        </div>
    );
}

export default BackofficePost;
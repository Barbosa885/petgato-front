import React, {useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import * as Styled from './styles';
import api from '../../services/api';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BackofficeUser = () => {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');
    const [page, setPage] = useState('1');
    let {id} = useParams();

    useEffect(() => {
    setPage(id)
    api.get(`users?page=${id}&per_page=4`, {
        headers:{
            'Authorization': `${token}`,
        }
    })
    .then((response) => {
        setUsers(response.data);
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
            <Styled.Backoffice>
                <Styled.Title>BACKOFFICE</Styled.Title>
                <Styled.Subtitle>Todas os usuários</Styled.Subtitle>
                <Styled.Table>
                    <Styled.TableTitle>Nome</Styled.TableTitle>
                    <Styled.TableTitle>Tipo de Usuário</Styled.TableTitle>
                    <Styled.TableTitle>Data de Ingresso</Styled.TableTitle>
                </Styled.Table>
                {users.map(user =>
                    <Styled.Table>
                        <Styled.Subtable>{user.name}</Styled.Subtable>
                        <Styled.Subtable>{user.is_admin ? <p>Administrador</p> : <p>Usuário</p>}</Styled.Subtable>
                        <Styled.Subtable>{user.created_at}</Styled.Subtable>
                        <Styled.EditButton><strong>Excluir</strong></Styled.EditButton>
                        <Styled.EditButton><strong>Editar</strong></Styled.EditButton>
                    </Styled.Table>)}
                    <Styled.PageButtonsDiv>
                        <Link to={`/backofficeUser/${handlePreviousPage(id)}`}>
                            <Styled.Button>{'<<'}</Styled.Button>
                        </Link>
                        {id-1 != 0 ? (
                        <Link to={`/backofficeUser/${handlePreviousPage(id)}`}>
                            <Styled.Button>{id - 1}</Styled.Button>
                        </Link>
                        ) : (<p></p>)}
                        <Link to={`/backofficeUser/${id}`}>
                            <Styled.Button style={{backgroundColor: "#BA66A3"}}>{id}</Styled.Button>
                        </Link>
                        {parseInt(id)+1 != 21 ? (
                        <Link to={`/backofficeUser/${handleNextPage(id)}`}>
                            <Styled.Button>{parseInt(id) + 1}</Styled.Button>
                        </Link>
                        ) : (<p></p>)}
                        <Link to={{ pathname: `/backofficeUser/${handleNextPage(id)}` }}>
                            <Styled.Button>{'>>'}</Styled.Button>
                        </Link>
                    </Styled.PageButtonsDiv>
            </Styled.Backoffice>
        </div>
    );
}

export default BackofficeUser;
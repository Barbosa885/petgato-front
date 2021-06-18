import React, {useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import * as Styled from './styles';
import LeftArrow from '../../assets/Icon awesome-chevron-left.svg';
import api from '../../services/api';
import Modal from "react-modal";

const BackofficeContact = () => {
    const [contacts, setContacts] = useState([]);
    const token = localStorage.getItem('token');
    const [page, setPage] = useState('1');
    const [isOpen, setIsOpen] = useState(false);
    const [key, setKey] = useState(true);

    let {id} = useParams();

    function toggleModal() {
      setIsOpen(!isOpen);
    }

    useEffect(() => {
    setPage(id)
    api.get(`contacts?page=${id}&per_page=4`, {
        headers:{
            'Authorization': `${token}`,
        }
    })
    .then((response) => {
        setContacts(response.data);
    })
    .catch(error => {
        console.error(error);
        alert('Ocorreu um erro! Tente novamente.');
    });
    },[id,key])

    const handleDelete = (id,token,key) => {
        api.delete(`contacts/${id}`, {
            headers:{
                'Authorization': `${token}`,
            }
        })
        .then(() => {
            setKey(!key);
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });      
    }
  
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
                    <Styled.TableTitle>Remetente</Styled.TableTitle>
                    <Styled.TableTitle>Descrição</Styled.TableTitle>
                    <Styled.TableTitle>Data de Envio</Styled.TableTitle>
                </Styled.Table>
                {contacts.map(contact =>
                    <Styled.Table>
                        <Styled.Subtable>{contact.name}</Styled.Subtable>
                        <Styled.Subtable>{contact.created_at}</Styled.Subtable>
                        <Styled.ContactTitle><Styled.ContactDiv>{contact.description}</Styled.ContactDiv></Styled.ContactTitle>
                        <Styled.EditButton onClick={toggleModal}><strong>Exibir</strong></Styled.EditButton>
                            <Modal isOpen={isOpen} onRequestClose={toggleModal} style={{
                                overlay: {
                                    top: 90,
                                    bottom: 50,
                                },
                                content: {
                                    borderRadius: '40px',
                                    padding: '30px',
                                }}}>
                                <Styled.Close onClick={toggleModal}><img src={LeftArrow}/></Styled.Close>
                                <h1>Mensagem: {contact.name}</h1>
                                <h3>Email: </h3><p>{contact.email}</p>
                                <h3>Mensagem:</h3>
                                <p>{contact.description}</p>                               
                            </Modal>
                        <Styled.EditButton onClick = {() => handleDelete(contact.id,token,key)}><strong>Excluir</strong></Styled.EditButton>
                    </Styled.Table>)}
                    <Styled.PageButtonsDiv>
                        <Link to={`/backofficeContact/${handlePreviousPage(id)}`}>
                            <Styled.Button>{'<<'}</Styled.Button>
                        </Link>
                        {id-1 != 0 ? (
                        <Link to={`/backofficeContact/${handlePreviousPage(id)}`}>
                            <Styled.Button>{id - 1}</Styled.Button>
                        </Link>
                        ) : (<p></p>)}
                        <Link to={`/backofficeContact/${id}`}>
                            <Styled.Button style={{backgroundColor: "#BA66A3"}}>{id}</Styled.Button>
                        </Link>
                        {parseInt(id)+1 != 21 ? (
                        <Link to={`/backofficeContact/${handleNextPage(id)}`}>
                            <Styled.Button>{parseInt(id) + 1}</Styled.Button>
                        </Link>
                        ) : (<p></p>)}
                        <Link to={{ pathname: `/backofficeContact/${handleNextPage(id)}` }}>
                            <Styled.Button>{'>>'}</Styled.Button>
                        </Link>
                    </Styled.PageButtonsDiv>
            </Styled.Backoffice>
        </div>
    );
}

export default BackofficeContact;
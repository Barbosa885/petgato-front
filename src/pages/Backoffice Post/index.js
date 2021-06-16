import React, {useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import PublishButton from '../../components/WhiteButton';
import PageButton from '../../components/Button';
import * as Styled from './styles';
import api from '../../services/api';

const BackofficePost = () => {
    const [page, setPage] = useState('1');
    let {id} = useParams();
  
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
  
    useEffect(() => {
      setPage(id)
    }, [id])

    return (
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
            <Styled.Table>
            <Styled.Subtable>Id do post</Styled.Subtable>
                <Styled.Subtable>Data do post</Styled.Subtable>
                <Styled.PostTitle>Título do post</Styled.PostTitle>
                <Styled.Link><strong>Excluir</strong></Styled.Link>
                <Styled.Link><strong>Editar</strong></Styled.Link>
            </Styled.Table>
            <Styled.Div>
                <PublishButton>Nova publicação</PublishButton>
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
    );
}

export default BackofficePost;
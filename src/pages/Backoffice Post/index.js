import React, {useState} from 'react';
import Button from '../../components/WhiteButton';
import InputText from '../../components/InputText';
import ImageLogin from '../../assets/Login.jpg';
import ImgLogo from '../../assets/gatinho_petgato.svg';
import * as Styled from './styles';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

const BackofficePost = () => {

    

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
            <Styled.Subtable>#</Styled.Subtable>
                <Styled.Subtable>Data</Styled.Subtable>
                <Styled.PostTitle>sdfsdfsdfsdfsdfsdfsdfsdfdfsdfsdfsdfdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd</Styled.PostTitle>
                <Styled.Link><strong>Excluir</strong></Styled.Link>
                <Styled.Link><strong>Editar</strong></Styled.Link>
            </Styled.Table>
            <Styled.Div>
            <Button>Nova publicação</Button>
            <button>proxima pagina</button>
            </Styled.Div>
            </Styled.Backoffice>
    );
}

export default BackofficePost;
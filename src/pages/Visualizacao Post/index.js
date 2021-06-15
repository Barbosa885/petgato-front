import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LeftArrow from '../../assets/Icon awesome-chevron-left.svg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import api from '../../services/api';

import Cadastro from '../../assets/Cadastro.jpg';

import * as Styled from './styles'

const VisualizacaoPost = () => {
    const [ post , setPost] = useState({});
    const [data, setData ] = useState('');
    const [hora, setHora ] = useState('');

    let history = useHistory();
    let {id} = useParams();

    useEffect(() => {
        api.get(`/posts/${id}`)
        .then((response) => {
            setPost(response.data);
            setData(response.data.created_at.split('T')[0]);
            setHora(response.data.created_at.split('T')[1]);
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });

        
    },[])
    
    const redirect = () => {
        history.push('/')
    }
    
    const nomeLegal = (data) => {
        var array = data.split('-');
        return `Postado dia ${array[2]}/${array[1]}/${array[0]}`
    }

    return (
        <div>
            <Navbar />
            <Styled.Page>
                <Styled.BackButton onClick={redirect}>
                    <img src={LeftArrow}/>
                    <Styled.Back>Voltar</Styled.Back>
                </Styled.BackButton>
                <Styled.Title>{post.title}</Styled.Title>
                <Styled.Date>{nomeLegal(data)}</Styled.Date>
                <Styled.Banner src={post.banner_image}></Styled.Banner>
                <Styled.Body dangerouslySetInnerHTML={{ __html: post.content }}>
                    
                </Styled.Body>
            </Styled.Page>
            <Footer />
        </div>
    );
}

export default VisualizacaoPost;
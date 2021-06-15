import React, { useState } from "react";
import * as Styled from "./styles";
import { Titulo } from "./styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InputText from "../../components/InputText";
import InputFile from "../../components/InputFile";
import ButtonMain from "../../components/Button";

const CreatePubli = () => {
    // const [name, setName] = useState('');
    // const [content, setContent] = useState('');
    // const [banner_image, setBannerImage] = useState(null);
  
    const [lista, setLista] = useState({
        name: "",
        content: "",
        banner_image: null
    });

    const handleOnChange = (text) => {
        setLista({ ...lista, content: text });
    };

    return (
        <Styled.Pagina>
        <Navbar />
        <Styled.Conteudo>
            <Styled.EstiloPar2> BACKOFFICE</Styled.EstiloPar2>
            <Styled.EstiloPar1> Criar Publicação</Styled.EstiloPar1>
            <InputText
            value={lista.name}
            onChange={(event) => {
                setLista({ ...lista, name: event });
            }}
            >
            Titulo da Publicação
            </InputText>
            <ReactQuill
            theme="snow"
            value={lista.content}
            onChange={handleOnChange}
            modules={{
                toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline','strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ['link'],
                    ['clean']
                ]
            }}
            />
            
            <InputFile value={lista.banner_image} onChange={handleOnChange}>Enviar</InputFile>
            <ButtonMain onClick={}> Publicar </ButtonMain>
        </Styled.Conteudo>
        <Footer />
        </Styled.Pagina>
    );
};

export default CreatePubli;

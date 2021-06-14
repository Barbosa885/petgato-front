import React, { useState } from "react";
import * as Styled from "./styles";
import { Titulo } from "./styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import ButtonMain from "../../components/Button";

const CreatePubli = () => {
  
    const [lista, setLista] = useState({
        name: "",
        content: "",
    });

    const handleOnChange = (text) => {
        setLista({ ...lista, content: text });
        console.log(lista);
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
                    ['link', 'image'],
                    ['clean']
                ]
            }}
            />
            ;<ButtonMain> Publicar </ButtonMain>
        </Styled.Conteudo>
        <Footer />
        </Styled.Pagina>
    );
};

export default CreatePubli;

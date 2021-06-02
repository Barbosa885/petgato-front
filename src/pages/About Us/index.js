import React from 'react';
import Cintia from './Cintia.jpeg';
import Floquinho from './Floquinho.jpeg';
import Mandragora from './Mandragora.jpeg';
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'
import Twitter from '../../assets/Twitter.svg'

import * as Styled from './styles'

const AboutUs = () => {
return (
    <Styled.AboutUs>
        <Styled.ImageGrid>
            <Styled.ImageTop src={Cintia} alt="cintia"/>
            <Styled.ImageContainer>
                <Styled.ImageBottom src={Floquinho} alt="periquito"/>
                <Styled.ImageBottom src={Mandragora} alt="doguinhobranco"/>
            </Styled.ImageContainer>
        </Styled.ImageGrid>
        <Styled.Text>
            <Styled.Title> SOBRE NÓS</Styled.Title>
            <Styled.Subtitle>O que é o Pet Gatô?</Styled.Subtitle>
            <Styled.Paragraph>O Pet Gatô surgiu em 2013 como um trabalho de faculdade. Estava cursando Medicina Veterinária e resolvi pegar uma disciplina de jornalismo, em que tive que escrever para um blog fictício. Dei o nome de <b>Pet Gatô</b>, como um trocadilho infame que minha professora adorou. Foi quando descobri minha paixão por escrever e resolvi unir o útil ao agradável e criar este blog.</Styled.Paragraph>
            <Styled.Paragraph>Desde então, utilizei deste meio para informar pais de pets do Brasil inteiro, estendendo os cuidados da minha profissão através da Internet. Além disso, compartilho histórias engraçadas, descobertas do meu cotidiano e fotos dos meus dois amores, o Floquinho, meu cão samoieda e a Mandrágora, minha cacatua.</Styled.Paragraph>
            <Styled.Paragraph>Meu Nome é Cíntia Lorenzzo e sou veterinária há 5 anos, apaixonada pelo mundo animal, principalmente os que estão sempre presentes no nosso dia a dia. Além de escrever, gosto de correr no Parque do Ibiapuera com o Floquinho e cantar com a Mands, uma berradora nata.</Styled.Paragraph>
            <Styled.Paragraph>Quer conhecer mais sobre mim? Me siga nas minhas redes sociais:</Styled.Paragraph>
            <Styled.SocialMedia>
                <Styled.Icon src={Facebook} alt="Facebook"/>
                <Styled.Icon src={Instagram} alt="Instagram"/>
                <Styled.Icon src={Twitter} alt="Twitter"/>
            </Styled.SocialMedia>
        </Styled.Text>
    </Styled.AboutUs>
);
}

export default AboutUs;
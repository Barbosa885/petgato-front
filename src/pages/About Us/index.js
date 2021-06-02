import React from 'react';
import Cintia from './CIntia.jpeg';
import Floquinho from './Floquinho.jpeg';
import Mandragora from './Mandragora.jpeg';
import Facebook from './Facebook.svg'
import Instagram from './Instagram.svg'
import Twitter from './Twitter.svg'

import * as Styled from './styles'

const AboutUs = () => {
return (
    <Styled.AboutUs>
        <Styled.ImageContainer>
            <Styled.ImageTop src={Cintia} alt="cintia"/>
            <Styled.ImageBottom src={Floquinho} alt="periquito"/>
            <Styled.ImageBottom src={Mandragora} alt="doguinhobranco"/>
        </Styled.ImageContainer>
        <Styled.Text>
            <Styled.Title> SOBRE NÓS</Styled.Title>
            <Styled.Subtitle>O que é o Pet Gatô?</Styled.Subtitle>
            <Styled.Paragraph></Styled.Paragraph>
            <Styled.SocialMedia>
                <Styled.Icon>
                    <Facebook />
                </Styled.Icon>
                <Styled.Icon>
                    <Instagram />
                </Styled.Icon>
                <Styled.Icon>
                    <Twitter />
                </Styled.Icon>
            </Styled.SocialMedia>
        </Styled.Text>
    </Styled.AboutUs>
);
}

export default AboutUs;
import nerdImage from '../assets/images/illustration.png';
import Button from './Button';
import { ButtonContainer, CardContainer, ContentContainer, H1, Image, P, Tag } from './styles/Container.style';
import { StyledTitle } from './styles/Custom.style';
export default function Card(){
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color="#4361ee">EXCLUSIVE</Tag>
                <H1><StyledTitle text="React Styled Components" color="#fff" /></H1>
                <P>
                    Sunt velit culpa sunt nulla adipisicing ut in officia voluptate esse cillum Lorem aliqua anim. Laboris sint irure deserunt adipisicing elit ipsum officia cupidatat sit sint.
                </P>
                <ButtonContainer>
                    <Button link="https://mdrahathossain.com" text="Watch Now" />
                    <Button link="https://mdrahathossain.com" text="Github Repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    )
}
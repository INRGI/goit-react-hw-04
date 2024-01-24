import { Container, LoadButton } from './Button.styled';

const Button = ({onClick}) => {
    return (
        <Container>
            <LoadButton type="button" onClick={onClick}>Load more</LoadButton>
        </Container>
  ); 
};

export default Button;
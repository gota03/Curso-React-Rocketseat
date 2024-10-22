import styled, {css} from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'sucess' | 'danger';

interface ButtonContainerProps{
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    sucess: 'green',
    danger: 'red'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 50px;

    background-color: ${props => props.theme.primary};
`
import React from 'react';

//React.FC -> Function Component Generic
//Generic -> Um tipo do Typescript q recebe parâmetro

//interface -> Definitir uma tipagem de um objeto

interface HeaderProps{
    title: string;
} 

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )

}

export default Header;
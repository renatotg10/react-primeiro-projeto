import React from 'react';

function Greeting() {
    function handleClick() {
        alert('Botão clicado!');
    }

    return (
        <div>
            <h1>Hello, React!</h1>
            <button onClick={handleClick}>Clique aqui</button>
        </div>
    );

}

export default Greeting;
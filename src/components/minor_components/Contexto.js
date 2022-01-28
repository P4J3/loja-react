import React from 'react';



export const LoginContext = React.createContext(false);

<LoginContext.Consumer>
    {valor=>(
        <span className="badge bg-secondary" style={{"margin":"10px"}}>
            <a type="button" bstyle={login_style} onClick={logar}>{valor===true?'Olá, João Victor':'Login'}</a>
        </span>
    )}
</LoginContext.Consumer>
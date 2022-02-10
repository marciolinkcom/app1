import { useState } from "react"
import { Botao } from "../components/ui/botao"
import { Input } from "../components/ui/input"

const Login = () => { 

    const [PARAM_1, PARAM_2] = useState('VALOR INICIAL')
    // PARAM 1 - VALOR DA MINHA VARIÁVEL
    // PARAM 2 - FUNÇÃO QUE ALTERA O PARAM_1

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    //console.log('email',email);
    //console.log('senha',senha);



    return (
        <div>
            <h1>Login</h1>
            <div className = "form">
                <Input setValue={setEmail} label ="email" type = "text" id="email" name = "email" placeholder="seu email"/>
                <Input setValue={setPassword} label ="senha" type = "password" id="password" name = "password" placeholder="sua senha"/>
                <Botao>ACESSAR</Botao>
            </div>
        </div>
    )
}

export default Login
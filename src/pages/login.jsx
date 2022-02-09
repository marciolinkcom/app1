import { Botao } from "../components/ui/botao"
import { Input } from "../components/ui/input"

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <div className = "form">
                <Input label ="email" type = "text" id="email" name = "email" placeholder="seu email"/>
                <Input label ="senha" type = "password" id="password" name = "password" placeholder="sua senha"/>
                <Botao>ACESSAR</Botao>
            </div>
        </div>
    )
}

export default Login
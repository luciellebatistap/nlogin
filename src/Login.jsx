import "./Login.css";
import { useState } from "react";

function Login () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    function handleLogin(e) {
        e.preventDefault();
        
    const emailFake = "teste@gmail.com";
        const senhaFake = "123456";

        if (email === emailFake && senha === senhaFake) {
            alert("Login realizado com sucesso!");
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    }

    return (
        <div className="principal">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
            <div>
                <input type="email" className="inputemail" placeholder="📧 Digite seu email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="inputsenha" placeholder="🔑Digite sua senha" value={senha}
                        onChange={(e) => setSenha(e.target.value)} />
                <button type="submit" className="button">Entrar</button>
            </div>
                
            </form>
            <p className="credenciais">
    Email para testar: <strong>teste@gmail.com</strong><br />
    Senha para testar: <strong>123456</strong>
</p>
        </div>
    )
}

export default Login
 
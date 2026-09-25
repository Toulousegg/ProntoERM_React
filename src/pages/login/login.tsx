import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const URL_BASE = "http://localhost:8000/home";

const ICON_VIEW = "https://cdn-icons-png.flaticon.com/512/709/709612.png";
const ICON_HIDE = "https://cdn-icons-png.flaticon.com/512/2767/2767146.png";

interface LoginProps {
    message?: string;
}

export default function Login({ message }: LoginProps) {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [mensaje, setMensaje] = useState<string>("")
    const navigate = useNavigate();

    useEffect(() => {
        const previousTitle = document.title;
        const previousLang = document.documentElement.lang;

        document.title = "Login | ProntoERP";
        document.documentElement.lang = "pt-BR";

        const fontLink = document.createElement("link");
        fontLink.href =
            "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap";
        fontLink.rel = "stylesheet";
        document.head.appendChild(fontLink);

        return () => {
            document.title = previousTitle;
            document.documentElement.lang = previousLang;
            document.head.removeChild(fontLink);
        };
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget); //el formdata es otra forma de mandar informacion al backend, es como mandar un json
        const username = formData.get("username");//aqui estoy agarrando la info de username del formulario 
        const password = formData.get("password"); //aqui lo mismo pero con la password

        //ese es el formato que espero OAuth2 para poder hacer el login correctamente sin ser texto plano

        const data = new URLSearchParams();

        data.append("username", username as string);
        data.append("password", password as string);

        try {
            const response = await Request(data)

            console.log("STATUS:", response.status);
            console.log("DATA:", response.data);
            console.log("URL:", response.request?.responseURL);

            console.log(username)//afirmativo esta recibiendo los datos que el usuario coloca
            console.log(password)
            navigate("/sidebar")
        } catch (error) {
            const status = error.response?.status;

            if (status === 401) {
                setMensaje("Usuário ou senha incorretos");
            } else if (status === 403) {
                setMensaje("Você não tem permissão para acessar");
            } else if (status === 500) {
                setMensaje("Ocorreu um erro no servidor");
            } else {
                setMensaje("Ocorreu um erro inesperado");
            }
        }
    };

    async function Request(data) {
        const response = await axios.post(URL_BASE + "/login", 
            data, 
            { 
                withCredentials: true,
            }
        );

        return response
    };

    // useEffect(() => {

    //     try {
    //         function cargarRequest() {
    //             return Request()
    //         }

    //         cargarRequest()

    //     } catch (error) {
    //         const status = error.response?.status;

    //         if (status === 401) {
    //             setMensaje("Usuário ou senha incorretos");
    //         } else if (status === 403) {
    //             setMensaje("Você não tem permissão para acessar");
    //         } else if (status === 500) {
    //             setMensaje("Ocorreu um erro no servidor");
    //         } else {
    //             setMensaje("Ocorreu um erro inesperado");
    //         }
    //     }
    //     //aqui quiero que si el usuario coloca algun dato equivocado entonces muestre un mensaje de error tal como lo  hace en el html
    // }, [])
    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const alertClass =
        mensaje &&
            (mensaje.toLowerCase().includes("error") ||
                mensaje.toLowerCase().includes("incorrect"))
            ? "alert-error"
            : "alert-success";

    return (
        <div className="login-container">
            <div className="login-header">
                <h1>ProntoERP</h1>
                <p>Gerencie suas entidades com eficiência</p>
            </div>

            {mensaje && <div className={`alert ${alertClass}`}>{mensaje}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Usuário</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Seu usuário"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            id="toggleBtn"
                            onClick={togglePassword}
                        >
                            <img
                                src={showPassword ? ICON_HIDE : ICON_VIEW}
                                id="eyeIcon"
                                alt="Show password"
                            />
                        </button>
                    </div>
                </div>

                <button type="submit" className="btn-login">
                    Entrar
                </button>
            </form>

            <div className="footer-links">
                <p>
                    Não tem uma conta? <a href={`${URL_BASE}/signup`}>Cadastre-se aqui</a>
                </p>
                <p>
                    Esqueceu a senha?{" "}
                    <a href={`${URL_BASE}/forgot_password`}>Redefina aqui</a>
                </p>
            </div>

            {/* {% include 'loading.html' %} -> no me pasaste loading.html, ver nota */}
        </div>
    );
}
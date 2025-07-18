import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (user) =>
        (user.username === inputName || user.email === inputName) &&
        user.password === inputPassword
    );

    if (foundUser) {
      window.location.href = "/home"; //para atulizar já a pagina
      localStorage.setItem("loggedUser", JSON.stringify(foundUser));
      navigate("/home"); 
      
    } else {
      setError("Nome de utilizador ou senha incorretos.");
    }
  };

  return (
    <section className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg text-[#33658A] text-lg">
      <h1 className="text-4xl font-bold text-center mb-10">ESTUDO+</h1>

      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label htmlFor="iname" className="block mb-2 font-medium">
            Email ou nome de utilizador
          </label>
          <input
            id="iname"
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Insira o seu nome"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33658A]"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="ipassword" className="block mb-2 font-medium">
            Senha
          </label>
          <input
            id="ipassword"
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Insira a sua senha"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33658A]"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm mb-4 font-semibold">{error}</p>
        )}

        <button
          type="submit"
          className="cursor-pointer w-full h-12 bg-[#2F4858] text-white rounded-md hover:bg-[#33658A] transition-colors duration-300 font-semibold"
        >
          Entrar
        </button>
      </form>

      <div className="text-center mt-6 text-sm">
        <p>
          Ainda não tem conta?{" "}
          <a href="/register" className="underline font-bold">
            Criar Perfil
          </a>
        </p>
      </div>
    </section>
  );
}

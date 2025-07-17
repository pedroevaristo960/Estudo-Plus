export default function Login() {
  return (
    <section className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg text-[#2F4858] text-lg">
      <h1 className="text-4xl font-bold text-center mb-10">ESTUDO+</h1>

      <div className="mb-6">
        <label htmlFor="iname" className="block mb-2 font-medium">
          Email ou nome de utilizador
        </label>
        <input
          id="iname"
          type="text"
          placeholder="Por favor, insira o seu nome"
          className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F4858] focus:border-transparent"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="ipassword" className="block mb-2 font-medium">
          Senha
        </label>
        <input
          id="ipassword"
          type="password"
          placeholder="Por favor, insira a sua senha"
          className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F4858] focus:border-transparent"
        />
      </div>

      <button
        className="w-full h-12 bg-[#2F4858] text-white rounded-md hover:bg-[#466b82] transition-colors duration-300 font-semibold"
      >
        Entrar
      </button>

      <div className="text-center mt-6 text-sm">
        <p>
          Ainda não tem conta?{' '}
          <a href="#" className="underline font-bold">
            Cadastrar-se
          </a>
        </p>
      </div>
    </section>
  );
}

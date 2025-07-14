export const Saudação = () => {
  const hour = new Date().getHours();
  const saudacao =
    hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";
    const username = "Erasmo Veloso"; // Depois vamos repassar aqui o nome do usuario dinamicamente

  return (
    <div className="text-1xl font-semibold text-gray-800 ">
      {saudacao}, <span className="font-bold"> {username}</span>!
    </div>
  );
}
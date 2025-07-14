export const Photo = ({ src, alt, className }) => {//Aqui recebe a imagem do usuario caso não tiver poe a padrao
  return (
    <img
      src={src? src : "../../public/icons/Ellipse 5.svg"} // Caminho para a imagem padrão
      alt={alt? alt : "Foto de perfil"}
      className={`rounded-full shadow-md ${className}`}
    />
  );
}
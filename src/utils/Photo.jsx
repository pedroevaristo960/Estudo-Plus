export const Photo = ({ src, alt, className }) => {
  const defaultImg = "/icons/Ellipse 5.svg"; 

  return (
    <img
      src={src || defaultImg}
      alt={alt || "Foto de perfil"}
      className={`w-10 h-10 rounded-full shadow-md object-cover ${className}`}
    />
  );
};

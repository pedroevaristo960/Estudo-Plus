const NavItem = ({ icon, label }) => (
  <a href={`#${label.toLowerCase()}`}
    className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition-colors">
    {icon}
    <span>{label}</span>
  </a>
);
export default NavItem;
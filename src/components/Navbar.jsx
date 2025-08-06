import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  GraduationCap,
  Layers,
  CheckCircle,
  StickyNote,
  FileText,
  Bot
} from "lucide-react";

const navItems = [
  { to: "/home", label: "Visão Geral", icon: <LayoutDashboard size={20} /> },
  { to: "/horario", label: "Horário", icon: <Calendar size={20} /> },
  { to: "/library", label: "Biblioteca", icon: <BookOpen size={20} /> },
  { to: "/aula", label: "Aula", icon: <GraduationCap size={20} /> },
  { to: "/disciplinas", label: "Disciplinas", icon: <Layers size={20} /> },
  { to: "/tarefas", label: "Tarefas", icon: <CheckCircle size={20} /> },
  { to: "/notas", label: "Notas", icon: <StickyNote size={20} /> },
  { to: "/provas", label: "Provas", icon: <FileText size={20} /> },
  { to: "/nerdola", label: "Nerdola", icon: <Bot size={20} /> }
];

const Navbar = () => {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-200 text-blue-700">
        Estudo+
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            to={to}
            key={to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Navbar;

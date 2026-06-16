import { User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconButton, Dropdown, DropdownTrigger, DropdownItem, DropdownContent, Switch, SearchField } from "@/shared";
import logo from "@/assets/images/logo-2.png";
import { logout } from "../../features/auth/service/logoutService";

export default function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/auth");
    };

    const [search, setSearch] = useState("");

    const handleSearch = (value) => {
        console.log("Buscar", value);
    };

    const handleClear = () => {
        console.log("Campo limpiado");
    };

    const [isActive, setIsActive] = useState(true);

    const handleStatusChange = (value) => {
        setIsActive(value);
        console.log("Nuevo estado", value);
    };

    return (
        <nav className="w-full bg-transparent border-b-2">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <div className="items-center hidden sm:inline-flex">
                        <Link to={"/dashboard/home"} className="text-h1 font-heading">
                            <img src={logo} alt="Logo" className="h-12" />
                        </Link>
                    </div>

                    {/* Switch */}
                    <Switch
                        checked={isActive}
                        onChange={handleStatusChange}
                        size="md"
                        className="hidden sm:inline-flex"
                    />

                    {/* Links de navegacion */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <Link to={"/inicio"} className="hover:text-primary transition">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-primary transition">
                                Cursos
                            </Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-primary transition">
                                Multimedia
                            </Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-primary transition">
                                Contacto
                            </Link>
                        </li>
                    </ul>

                    {/* Buscador */}
                    <SearchField
                        value={search}
                        onChange={setSearch}
                        onSubmit={handleSearch}
                        onClear={handleClear}
                        placeholder="Buscar Productos..."
                        size="md"
                        variant="filled"
                        className="w-76"
                    />

                    {/* Dropdown usuario */}
                    <div className="p-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <IconButton aria-label="Menu de usuario"> 
                                    <User />
                                </IconButton>
                            </DropdownTrigger>

                            <DropdownContent className="right-0 w-48">
                                <DropdownItem>
                                    <Link to="/auth" className="block w-full">
                                        Autenticacion
                                    </Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/dashboard" className="block w-full">
                                        Panel de control
                                    </Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/dashboard/userList" className="block w-full">
                                        Gestionar Usuarios
                                    </Link>
                                </DropdownItem>
                                <DropdownItem onClick={handleLogout}>
                                    Cerrar sesion
                                </DropdownItem>
                            </DropdownContent>
                        </Dropdown>
                    </div>

                </div>
            </div>
        </nav>
    );
}
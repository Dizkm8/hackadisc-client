import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import { homePath, loginPath } from "../router/routes-paths";
import useTokenRemove from "../../auth/hooks/useTokenRemove";
import { useNavigate } from "react-router-dom";

const userSettingsOpts = ["Mi perfil"];
const signOutText = "Cerrar Sesión";

const pages = [
  {
    name: "Home",
    href: homePath,
  },
  {
    name: "Sobre Nosotros",
    href: "/sobre-nosotros",
  },
  {
    name: "Servicios",
    href: "/servicios",
  },
  {
    name: "Precios",
    href: "/precios",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
];
const userInformation = {
  name: "Jorge Rivera",
  email: "bols@pignus.cl",
  pic: "https://media.licdn.com/dms/image/D4E35AQEu4OzdezYJNA/profile-framedphoto-shrink_400_400/0/1718143845563?e=1719450000&v=beta&t=KQF-xwuJcNXki7xjb-za-gy6DNmOhxJU1D8dK6nNv9E",
};
const pignusLogoSrc = "/logo-pignus-dark.webp";

const activePathClassName =
  "bg-white md:bg-transparent text-pignus-600 hover:!text-pignus-600";
const notActivePathClassName =
  "bg-white md:bg-transparent text-white hover:!text-pignus-600";

const Navbar = () => {
  const { removeToken } = useTokenRemove();
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
    navigate(loginPath);
  };

  return (
    <FlowbiteNavbar fluid rounded className=" bg-pignusBlue-500 rounded-none">
      <FlowbiteNavbar.Brand href={homePath} onClick={(e) => e.preventDefault()}>
        <img src={pignusLogoSrc} className="mr-3 h-6" alt="Logo Pignus" />
      </FlowbiteNavbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={userInformation.pic} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{userInformation.name}</span>
            <span className="block truncate text-sm font-medium">
              {userInformation.email}
            </span>
          </Dropdown.Header>
          {userSettingsOpts.map((page) => (
            <Dropdown.Item key={page}>{page}</Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>{signOutText}</Dropdown.Item>
        </Dropdown>
        <FlowbiteNavbar.Toggle />
      </div>
      <FlowbiteNavbar.Collapse>
        {pages.map(({ name, href }) => (
          <FlowbiteNavbar.Link
            key={name}
            href={href}
            className={
              href === window.location.pathname
                ? activePathClassName
                : notActivePathClassName
            }
          >
            {name}
          </FlowbiteNavbar.Link>
        ))}
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
};
export default Navbar;

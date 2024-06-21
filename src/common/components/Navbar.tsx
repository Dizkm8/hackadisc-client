import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import { activitiesPath, homePath, loginPath } from "../router/routes-paths";
import { useNavigate } from "react-router-dom";
import useLogout from "../../auth/hooks/useLogout";

const userSettingsOpts = ["Mi perfil"];
const signOutText = "Cerrar Sesión";

const pages = [
  {
    name: "Home",
    href: homePath,
  },
  {
    name: "Actividades",
    href: activitiesPath,
  },
];
const userInformation = {
  name: "Jorge Rivera",
  email: "jorge.rivera@pignus.cl",
  pic: "https://media.licdn.com/dms/image/D4E35AQEu4OzdezYJNA/profile-framedphoto-shrink_400_400/0/1718143845563?e=1719450000&v=beta&t=KQF-xwuJcNXki7xjb-za-gy6DNmOhxJU1D8dK6nNv9E",
};
const pignusLogoSrc = "/logo-pignus-dark.webp";

const activePathClassName =
  "bg-white md:bg-transparent text-pignus-600 hover:!text-pignus-600";
const notActivePathClassName =
  "bg-white md:bg-transparent text-white hover:!text-pignus-600";

const Navbar = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(loginPath);
  };

  const onBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(homePath);
  };

  return (
    <FlowbiteNavbar fluid rounded className=" bg-pignusBlue-500 rounded-none">
      <FlowbiteNavbar.Brand href={homePath} onClick={onBrandClick}>
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
          <Dropdown.Item onClick={handleLogout}>{signOutText}</Dropdown.Item>
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

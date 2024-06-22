import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import { homePath, loginPath } from "../router/routes-paths";
import { useNavigate } from "react-router-dom";
import useLogout from "../../auth/hooks/useLogout";
import useUserInformation from "../../auth/hooks/useUserInformation";

const signOutText = "Cerrar Sesión";

const hardcodedPic = "/jorge-rivera.webp";
const pignusLogoSrc = "/logo-pignus-dark.webp";

const activePathClassName =
  "bg-white md:bg-transparent text-pignus-600 hover:!text-pignus-600 uppercase";
const notActivePathClassName =
  "bg-white md:bg-transparent text-white hover:!text-pignus-600 uppercase";

const getEmail = (username: string) => {
  const values = username.replace(" ", ".");
  return values.concat("@pignus.cl").toLowerCase();
};

interface NavbarOpts {
  name: string;
  href: string;
}

interface Props {
  pages: NavbarOpts[];
}

const Navbar = ({ pages }: Props) => {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const { username } = useUserInformation();

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
          label={<Avatar alt="User settings" img={hardcodedPic} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">{username}</span>
            <span className="block truncate text-sm font-medium">
              {getEmail(username)}
            </span>
          </Dropdown.Header>
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

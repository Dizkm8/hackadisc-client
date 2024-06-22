import { SHIFT_MANAGER } from "../../api/constants/roles";
import useUserInformation from "../../auth/hooks/useUserInformation";
import Navbar from "../components/Navbar";
import {
  activitiesPath,
  dashboardPathV2,
  homePath,
} from "../router/routes-paths";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { role } = useUserInformation();

  const areaManagerOpts = [
    {
      name: "Inicio",
      href: homePath,
    },
    {
      name: "Actividades",
      href: activitiesPath,
    },
    {
      name: "Estadísticas",
      href: dashboardPathV2,
    },
  ];

  const enterpriseManagerOpts = [
    {
      name: "Inicio",
      href: homePath,
    },
  ];

  return (
    <>
      <Navbar
        pages={role === SHIFT_MANAGER ? areaManagerOpts : enterpriseManagerOpts}
      />
      {children}
    </>
  );
};

export default MainLayout;

import { JWTPayload } from "../../api/constants/jwt-payload";
import useStorage from "../../common/hooks/useStorage";
import { jwtDecode } from "jwt-decode";

const useTokenStore = () => {
  const { setToken, setRole } = useStorage();

  const setTokenState = (newToken: string) => {
    const { role } = jwtDecode<JWTPayload>(newToken);
    setToken(newToken);
    setRole(role);
  };

  return {
    setToken: setTokenState,
  };
};

export default useTokenStore;

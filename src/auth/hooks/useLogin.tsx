import { JWTPayload } from "../../api/constants/jwt-payload";
import useStorage from "../../common/hooks/useStorage";
import { jwtDecode } from "jwt-decode";

const useTokenStore = () => {
  const { setToken, setRole, setUsername } = useStorage();

  const setTokenState = (newToken: string) => {
    const { role, user_id } = jwtDecode<JWTPayload>(newToken);
    setToken(newToken);
    setUsername(user_id.toString());
    setRole(role);
  };

  return {
    setToken: setTokenState,
  };
};

export default useTokenStore;

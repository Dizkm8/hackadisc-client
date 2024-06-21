import useStorage from "../../common/hooks/useStorage";

const useLogout = () => {
  const { setToken, setRole } = useStorage();

  const logout = () => {
    setToken("");
    setRole(-1);
  };

  return {
    logout,
  };
};

export default useLogout;

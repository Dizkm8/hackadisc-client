import useStorage from "../../common/hooks/useStorage";

const useTokenStore = () => {
  const { setToken } = useStorage();

  const setTokenState = (newToken: string) => {
    setToken(newToken);
  };

  return {
    setToken: setTokenState,
  };
};

export default useTokenStore;

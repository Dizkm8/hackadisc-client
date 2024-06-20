import useStorage from "../../common/hooks/useStorage";

const useTokenRemove = () => {
  const { setToken } = useStorage();

  const removeToken = () => {
    setToken("");
  };

  return {
    removeToken,
  };
};

export default useTokenRemove;

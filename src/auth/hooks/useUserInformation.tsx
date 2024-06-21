import useStorage from "../../common/hooks/useStorage";

const useUserInformation = () => {
  const { username, role } = useStorage();

  return {
    username,
    role,
  };
};

export default useUserInformation;

import { useSelector } from "react-redux";
import { RootState } from "../store";

const useAuth = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  return { isAuthenticated: !!user };
};

export default useAuth;

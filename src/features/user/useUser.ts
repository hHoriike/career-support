import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";

const useUser = () => {
  const [user, setUser] = useState<UserInfo | undefined>(undefined);
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id != null) setUser({ name: "堀池浩輝" });
  }, []);
  return user;
};

export default useUser;

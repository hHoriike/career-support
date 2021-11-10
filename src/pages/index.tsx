import useUser from "features/user/useUser";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import HomeTemplate from "../domains/home/template";

const Home: NextPage = (props) => {
  const user = useUser();
  const router = useRouter();
  const { keyword } = router.query;
  return (
    <HomeTemplate
      user={user}
      keyword={typeof keyword === "string" ? keyword : undefined}
    />
  );
};

export default Home;

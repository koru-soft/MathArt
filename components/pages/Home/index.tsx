import Link from "next/link";
import SC from "./style";

const Home = () => {
  return (
    <SC.HomeContainer>
      <Link href="/stalker">ストーカー</Link>
    </SC.HomeContainer>
  );
};

export default Home;

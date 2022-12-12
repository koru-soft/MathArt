import Link from "next/link";
import SC from "./style";

const Home = () => {
  return (
    <SC.HomeContainer>
      <SC.LinkWrapper>
        <Link href="sketches/stalker">ストーカー</Link>
      </SC.LinkWrapper>
      <SC.LinkWrapper>
        <Link href="sketches/noise">ノイズ</Link>
      </SC.LinkWrapper>
      <SC.LinkWrapper>
        <Link href="sketches/brushes/normal">ブラシ</Link>
      </SC.LinkWrapper>
    </SC.HomeContainer>
  );
};

export default Home;

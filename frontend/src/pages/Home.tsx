import { HomeHeader } from '../components/ui/header/homeHeader/HomeHeader';
import Base from '../components/base/base';
import MainContentVerticalUI from '../components/ui/mainContentVertical/MainContentVerticalUI';

export default function Home() {
  return (
    <Base>
      {/* ↓↓↓ My Content ↓↓↓ */}
      {/* <HomeHeader /> */}
      <MainContentVerticalUI/>
      {/* ↑↑↑ My Content ↑↑↑ */}
    </Base>
  );
}
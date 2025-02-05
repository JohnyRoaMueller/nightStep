import { HomeHeader } from '../components/ui/header/homeHeader/HomeHeader';
import Base from '../components/base/base';
import MainContentVertical from '../components/ui/mainContentVertical/MainContentVertical';

export default function Home() {
  return (
    <Base>
      {/* ↓↓↓ My Content ↓↓↓ */}
      <HomeHeader />
      <MainContentVertical/>
      {/* ↑↑↑ My Content ↑↑↑ */}
    </Base>
  );
}
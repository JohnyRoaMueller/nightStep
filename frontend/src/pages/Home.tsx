import { HomeHeader } from '../components/ui/header/homeHeader/HomeHeader';
import Base from '../components/base/base';

export default function Home() {
  return (
    <Base>
      {/* ↓↓↓ My Content ↓↓↓ */}
      <HomeHeader />
      {/* ↑↑↑ My Content ↑↑↑ */}
    </Base>
  );
}
import Base from '../components/base/base';
import BarCards from '../components/ui/HomeContent/barCards/BarCards';
import ClubCards from '../components/ui/HomeContent/clubCards/ClubCards';
import MainContentVerticalUI from '../components/ui/HomeContent/clubCards/ClubCards';

export default function Home() {
  return (
    <Base>
      {/* ↓↓↓ My Content ↓↓↓ */}
      <ClubCards/>
      <BarCards/>
      {/* ↑↑↑ My Content ↑↑↑ */}
    </Base>
  );
}
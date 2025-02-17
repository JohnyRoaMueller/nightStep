import Base from '../components/base/base';
import MainContentVerticalUI from '../components/ui/mainContentVertical/MainContentVerticalUI';

export default function Home() {
  return (
    <Base>
      {/* ↓↓↓ My Content ↓↓↓ */}
      <MainContentVerticalUI/>
      {/* ↑↑↑ My Content ↑↑↑ */}
    </Base>
  );
}
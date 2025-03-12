import Base from '../components/base/base';
import VenueCards from '../components/ui/venueCards/VenueCards';

export default function Home() {
  return (
    <Base>
      {/* ↓↓↓ My Content ↓↓↓ */}
      <VenueCards venueType="Nightclub"/>
      <VenueCards venueType="Bar"/>
      {/* ↑↑↑ My Content ↑↑↑ */}
    </Base>
  );
}
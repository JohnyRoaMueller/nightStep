import ContactForm from '../components/form/contactForm/ContactForm';
import Base from '../components/base/base';

export default function Contact() {
  return (
    <Base>
      {/* ↓↓↓ My Content ↓↓↓ */}
      <ContactForm />
      {/* ↑↑↑ My Content ↑↑↑ */}
    </Base>
  );
}
import LoginForm from "../components/form/loginForm/LoginForm";
import Base from "../components/base/base";

export default function Login() {
  return (
    <Base>
      {/* ↓↓↓ My Content ↓↓↓ */}
      <LoginForm />
      {/* ↑↑↑ My Content ↑↑↑ */}
    </Base>
  );
}
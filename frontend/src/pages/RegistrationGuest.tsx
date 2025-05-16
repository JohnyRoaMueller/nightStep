import Base from "../components/base/base";
import RegisterGuestFormCopy from "../components/form/registerGuestForm copy/RegisterGuestFormCopy";
import RegisterGuestForm from "../components/form/registerGuestForm/RegisterGuestForm";

export default function RegistrationGuest() {

    return (
      <Base children={
        <>
                {/* ↓↓↓ My Content ↓↓↓ */}
                <RegisterGuestFormCopy/>
                {/* ↑↑↑ My Content ↑↑↑ */}
        </>
            }>
      </Base>
    )
}
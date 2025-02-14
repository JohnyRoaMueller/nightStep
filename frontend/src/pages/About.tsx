import { AboutComponent } from "../components/about/AboutComponent";
import Base from "../components/base/base";
import { TypoBody1, TypoBody2, TypoH1, TypoH2 } from "../styled-components/styledTypographie";

export default function AboutUs() {
    return (
        <>
            <Base>
                <AboutComponent/>
            </Base>
        </>
    )
}

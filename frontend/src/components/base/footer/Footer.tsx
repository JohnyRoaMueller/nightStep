import { Link } from "react-router-dom";
import { CleanLink, ContentFrame, FooterFrame, NightStepLogo, TypoBody1Link } from "./Footer.styles";
import { TypoBody1 } from "../../../styled-components/styledTypographie";

export default function Footer() {

    return (
        <>
            <FooterFrame>
                <ContentFrame>
                    <NightStepLogo/>
                </ContentFrame>
                <ContentFrame>
                    <CleanLink to={'/aboutUs'}>
                        <TypoBody1Link>
                            about us
                        </TypoBody1Link>
                    </CleanLink>
                    <CleanLink to={'/contact'}>
                        <TypoBody1Link>
                            contact
                        </TypoBody1Link>
                    </CleanLink>
                    <CleanLink to={'/imprint'}>
                        <TypoBody1Link>
                            imprint
                        </TypoBody1Link>
                    </CleanLink>
                </ContentFrame>
                <ContentFrame>

                </ContentFrame>
            </FooterFrame>
        </>
    )
}
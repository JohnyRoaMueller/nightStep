import { useEffect, useState } from "react";
import { ClubCard, ClubCardContent, ClubCardMedia, ClubDescTypo, ClubNameTypo, GridContainer, GridItem, HeaderWrapper, VenueTypeHeader, WhiteLine, } from "./mainContentVertical.styles";
import { TypoBody1, TypoH2 } from "../../../styled-components/styledTypographie";
import { Height } from "@mui/icons-material";



const placeholder = "./public/uploads/clubstep/Platzhalter_Clubbild.png"

export interface ClubType {
    id: number;
    name: string;
    type: string;
    capacity: number;
    city: string;
    district: string;
    street: string;
    houseNumber: string;
    postalCode: string;
    description: string;
    picAddresses: string[];
    picBlobs: Blob[];
}

const apiUrl =import.meta.env.VITE_APP_API_URL

function MainContentVerticalUI() {

    const [clubs, setClubs] = useState<ClubType[]>([])
    const [images, SetImages] = useState<Blob[]>([])

      useEffect(() => {



        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/clubs`);

                if (!response.ok) throw new Error(`fetching ${apiUrl} failed`);
                else
                {
                    const data = await response.json();
                    setClubs(data);
                    console.log(data)
                }

            } 
            catch (error) 
            {    
                if (error instanceof Error) console.log(`${error.message} at ${apiUrl}/clubs`);
                else console.log('unknown error for' + apiUrl);
            }
        };

        fetchData();  // calling the async function inside the useEffekt()

    }, []);

    clubs.map((club) => console.log(club.picAddresses[0]))
    clubs.map((club) => console.log(`${apiUrl}/images${club.picAddresses[0]}`))
    clubs.map((club) => console.log(`${apiUrl}/images/${club.picAddresses[0].replace("/", "-")}`))
    
    const regex =/acb/

    return (
        <>      <HeaderWrapper>
                    <VenueTypeHeader>
                        <TypoH2>Clubs</TypoH2>
                    </VenueTypeHeader>
                    <WhiteLine/>
                </HeaderWrapper>
                <GridContainer>
                {clubs.map((club) => (
                    <GridItem>
                        <ClubCard>
                            <ClubCardMedia component="img" image={`${apiUrl}/images/${club.picAddresses[0].replace(/\//g, "-")}`}/>
                            <ClubCardContent>
                                <ClubNameTypo>{club.name}</ClubNameTypo>
                                <ClubDescTypo>A club offering a vibrant atmosphere for socializing, networking, and entertainment. Enjoy great music, events, and a welcoming community for all members. Ideal for relaxation and making new connections. </ClubDescTypo>
                            </ClubCardContent>
                        </ClubCard>
                    </GridItem >
                ))}
                </GridContainer>
        </>
    )







}

export default MainContentVerticalUI
import { useEffect, useState } from "react";
import { ClubCard, ClubCardContent, ClubCardMedia, ClubDescTypo, ClubNameTypo, GridContainer, GridItem, HeaderWrapper, VenueTypeHeader, WhiteLine, } from "./ClubCards.Style";
import { TypoBody1, TypoH2 } from "../../../../styled-components/styledTypographie";
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

function ClubCards() {

    const [clubs, setClubs] = useState<ClubType[]>([])

      useEffect(() => {

        setClubs([])

        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/clubs`);

                console.log(response)

                if (!response.ok) throw new Error(`fetching ${apiUrl} failed`);

                const data = await response.json();

                const loadedClubs: any[] = []

                await data.forEach(venue => {
                    if (venue.type === "Club") {
                        loadedClubs.push(venue)
                    }
                });

                setClubs(loadedClubs)


            } 
            catch (error) 
            {    
                if (error instanceof Error) console.log(`${error.message} at ${apiUrl}/clubs`);
                else console.log('unknown error for' + apiUrl);
            }
        };

        fetchData();  // calling the async function inside the useEffekt()

    }, []);

    console.log("path logs down under")
    clubs.map((club) => console.log(club.picAddresses[0]))
    clubs.map((club) => console.log(`${apiUrl}/images${club.picAddresses[0]}`))
    clubs.map((club) => console.log(`${apiUrl}/images/${club.picAddresses[0].replace(/\//g, "-")}`))


    return (
        <>      
                <HeaderWrapper>
                    <VenueTypeHeader>
                        <TypoH2>Clubs</TypoH2>
                    </VenueTypeHeader>
                    <WhiteLine/>
                </HeaderWrapper>
                <GridContainer>
                {clubs.map((club) => (                                                                            
                    <GridItem>                                                   {/**↓ PathVariable doesn't work with /image/path ↓*/}
                        <ClubCard>                                           {/**↓ so converting / to - and converting back in backend ↓*/}
                            <ClubCardMedia component="img" image={`${apiUrl}/images/${club.picAddresses[0].replace(/\//g, "-")}`}/>
                            <ClubCardContent>
                                <ClubNameTypo>{club.name}</ClubNameTypo>
                                <ClubDescTypo>{club.district}</ClubDescTypo>
                                <ClubDescTypo>This is a club discription that gives you a impress of the Club</ClubDescTypo>
                            </ClubCardContent>
                        </ClubCard>
                    </GridItem >
                ))}
                </GridContainer>
        </>
    )







}

export default ClubCards
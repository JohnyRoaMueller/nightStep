import { useEffect, useState } from "react";
import { ClubCard, ClubCardContent, ClubCardMedia, ClubDescTypo, ClubNameTypo, GridContainer, GridItem, HeaderWrapper, VenueTypeHeader, WhiteLine, } from "./mainContentVertical.styles";
import { TypoBody1, TypoH2 } from "../../../styled-components/styledTypographie";



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


function MainContentVerticalUI() {

    const [clubs, setClubs] = useState<ClubType[]>([])
    const [images, SetImages] = useState<Blob[]>([])

      useEffect(() => {

        const apiUrl =import.meta.env.VITE_APP_API_URL

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


    clubs.forEach(club => {      

        const apiUrl =import.meta.env.VITE_APP_API_URL

        const fetchImageBlobs = async () => {
            try {
                const imageResponse =  await fetch (`${apiUrl}/images/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ imageAddress: `${club.picAddresses[0]}` })
                });
                const blob = await imageResponse.blob();
                SetImages(prevBlobs => [...prevBlobs, blob])

            } 
            catch (error) 
            {    
                if (error instanceof Error) console.log(`${error.message} at ${apiUrl}/images`);
                else console.log('unknown error for' + apiUrl);
            }
        }
        fetchImageBlobs()
    });




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
                            <ClubCardMedia component="img" image={placeholder}/>
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
import { useEffect, useState } from "react"
import { TypoH2 } from "../../../../styled-components/styledTypographie"
import { GridContainer } from "../clubCards/ClubCards.Style"
import { ClubCard, ClubCardContent, ClubCardMedia, ClubDescTypo, ClubNameTypo, GridItem, HeaderWrapper, VenueTypeHeader, WhiteLine } from "./BarCards.Styles"

function BarCards() {

    interface BarType {
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

    const [bars, setBars] = useState<BarType[]>([])

      useEffect(() => {

        setBars([])

        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/clubs`);

                if (!response.ok) throw new Error(`fetching ${apiUrl} failed`);

                const data = await response.json();

                const loadedBars = [];

                await data.forEach(venue => {
                    if (venue.type ===  "Bar") {
                        loadedBars.push(venue)
                    }
                });
                console.log("bars after fetching: ", bars)

                setBars(loadedBars);

            } 
            catch (error) 
            {    
                if (error instanceof Error) console.log(`${error.message} at ${apiUrl}/clubs`);
                else console.log('unknown error for' + apiUrl);
            }
        };

        fetchData();  // calling the async function inside the useEffekt()

    }, []);


    return (
        <>
                <HeaderWrapper>
                    <VenueTypeHeader>
                        <TypoH2>Bars</TypoH2>
                    </VenueTypeHeader>
                    <WhiteLine/>
                </HeaderWrapper>     
                
                <GridContainer>
                {bars.map((bar) => (                                                                            
                    <GridItem>                                                   {/**↓ PathVariable doesn't work with /image/path ↓*/}
                        <ClubCard>                                           {/**↓ so converting / to - and converting back in backend ↓*/}
                            <ClubCardMedia component="img" image={`${apiUrl}/images/${bar.picAddresses[0].replace(/\//g, "-")}`}/>
                            <ClubCardContent>
                                <ClubNameTypo>{bar.name}</ClubNameTypo>
                                <ClubDescTypo>{bar.district}</ClubDescTypo>
                                <ClubDescTypo>This is a club discription that gives you a impress of the Club</ClubDescTypo>
                            </ClubCardContent>
                        </ClubCard>
                    </GridItem >
                ))}
                </GridContainer>                       
        </>
    )

}

export default BarCards
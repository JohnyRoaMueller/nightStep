import { useEffect, useState } from "react";
import { VenueCard, VenueCardContent, VenueCardMedia, VenueCardOverlay, VenueDescTypo, VenueNameTypo, GridContainer, GridItem, HeaderWrapper, LoadingSpace, VenueTypeHeader, WhiteLine, RandomWrapper, } from "./VenueCards.Style";
import { TypoBody1, TypoBody2, TypoH1, TypoH2 } from "../../../styled-components/styledTypographie";
import { Dot, LoadingAnimation } from "../../../functions/animations/LoadingAnimation";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../common/button/primaryButton/PrimaryButton";
import HoverOverlay from "../hoverOverlay/HoverOverlay";

const apiUrl =import.meta.env.VITE_APP_API_URL

export interface VenueType {
    id: string;
    name: string;
    type: string;
    capacity: number;
    city: string;
    district: string;
    eventId: string[] | null;
    hostId: string 
    street: string;
    houseNumber: string;
    postalCode: string;
    description: string;
    picAddresses: string[];
    picBlobs: Blob[];
    eventsIds: string[]
}

function VenueCards(props: { venueType: string; }) {

    const [venues, setVenues] = useState<VenueType[]>([])
    const [mockVenue, setMockVenue] = useState<number[]>([1, 2, 3, 4, 5, 6])

    const [loading, setLoading] = useState(true)

    const navigateTo = useNavigate();

      useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/venues`);

                if (!response.ok) throw new Error(`fetching ${apiUrl} failed`);

                const data = await response.json();

                const loadedVenues: VenueType[] = []

                await data.forEach((venue: VenueType) => {
                    if (venue.type === props.venueType) {
                        loadedVenues.push(venue)
                    }
                });

                const shuffledArray = loadedVenues.sort(() => 0.5 - Math.random());
                const slicedArray = shuffledArray.slice(0, 6)

                setVenues(slicedArray)


                setLoading(false)

                


            } 
            catch (error) 
            {    
                if (error instanceof Error) console.log(`${error.message} at ${apiUrl}/Venues`);
                else console.log('unknown error for' + apiUrl);
            }
        };

        fetchData();  // calling the async function inside the useEffekt()

    }, []);


    if (loading || venues.length === 0)
    {
    return (
        <>

        </>
        )
    } 
    else 
    {   
    return (
        <>      
                <HeaderWrapper>
                    <VenueTypeHeader>
                        <TypoH2>{props.venueType}</TypoH2>
                    </VenueTypeHeader>
                    <WhiteLine/>
                </HeaderWrapper>
                <GridContainer>
                {venues.map((venue) => (                                                                            
                    <GridItem>         
                                   {/**↓ PathVariable doesn't work with /image/path ↓*/}
                        <VenueCard onClick={() => navigateTo(`/venue/${venue.name}`)}>{/**↓ so converting / to - and converting back in backend ↓*/}
                            <VenueCardMedia component="img" loading="eager" image={`${apiUrl}/images/${venue.picAddresses[0].replace(/\//g, "-")}`}/>
                            <VenueCardContent>
                                <HoverOverlay/>
                                <VenueNameTypo>{venue.name}</VenueNameTypo>
                                <TypoBody2>{venue.district}</TypoBody2>
                            </VenueCardContent>
                        </VenueCard>
            
                    </GridItem >
                ))}
                </GridContainer>
        </>
    )
}


}

export default VenueCards
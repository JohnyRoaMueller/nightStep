import { useEffect, useState } from "react";
import { VenueCard, VenueCardContent, VenueCardMedia, VenueCardOverlay, VenueDescTypo, VenueNameTypo, GridContainer, GridItem, HeaderWrapper, LoadingSpace, VenueTypeHeader, WhiteLine, } from "./VenueCards.Style";
import { TypoBody1, TypoH2 } from "../../../styled-components/styledTypographie";
import { Dot, LoadingAnimation } from "../../../functions/animations/LoadingAnimation";
import { useNavigate } from "react-router-dom";

const apiUrl =import.meta.env.VITE_APP_API_URL

export interface VenueType {
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

function VenueCards(props: { venueType: string; }) {

    const [venues, setVenues] = useState<VenueType[]>([])
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


    if (loading)
    {
    return (
        <>
            <LoadingSpace></LoadingSpace>
        </>
        )
    } 
    else 
    {   
        console.log(venues.length)
        console.log(venues[0].name)
        console.log(venues[0].picAddresses)
        console.log(`${apiUrl}/images/${venues[0].picAddresses[0].replace(/\//g, "-")}`)

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
                            <VenueCardMedia component="img" image={`${apiUrl}/images/${venue.picAddresses[0].replace(/\//g, "-")}`}/>
                            <VenueCardContent>
                                <VenueCardOverlay className="Venue-card-overlay"/>
                                <VenueNameTypo>{venue.name}</VenueNameTypo>
                                <VenueDescTypo>{venue.district}</VenueDescTypo>
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
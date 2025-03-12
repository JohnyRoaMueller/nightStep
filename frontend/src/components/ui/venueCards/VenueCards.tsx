import { useEffect, useState } from "react";
import { ClubCard, ClubCardContent, ClubCardMedia, ClubCardOverlay, ClubDescTypo, ClubNameTypo, GridContainer, GridItem, HeaderWrapper, LoadingSpace, VenueTypeHeader, WhiteLine, } from "./VenueCards.Style";
import { TypoBody1, TypoH2 } from "../../../styled-components/styledTypographie";
import { Dot, LoadingAnimation } from "../../../functions/animations/LoadingAnimation";
import { useNavigate } from "react-router-dom";



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

const apiUrl =import.meta.env.VITE_APP_API_URL

function VenueCards(props) {

    const [venues, setVenues] = useState<VenueType[]>([])
    const [loading, setLoading] = useState(true)

    const navigateTo = useNavigate();

      useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/clubs`);

                console.log(`${apiUrl}/clubs`)

                console.log(response)

                if (!response.ok) throw new Error(`fetching ${apiUrl} failed`);

                const data = await response.json();

                const loadedVenues: any[] = []

                await data.forEach(venue => {
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
                if (error instanceof Error) console.log(`${error.message} at ${apiUrl}/clubs`);
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
                        <ClubCard onClick={() => navigateTo(`/venue/${venue.name}`)}>{/**↓ so converting / to - and converting back in backend ↓*/}
                            <ClubCardMedia component="img" image={`${apiUrl}/images/${venue.picAddresses[0].replace(/\//g, "-")}`}/>
                            <ClubCardContent>
                                <ClubCardOverlay className="club-card-overlay"/>
                                <ClubNameTypo>{venue.name}</ClubNameTypo>
                                <ClubDescTypo>{venue.district}</ClubDescTypo>
                            </ClubCardContent>
                        </ClubCard>

                    </GridItem >
                ))}
                </GridContainer>
        </>
    )
}


}

export default VenueCards
import { useEffect, useState } from "react";
import { ClubCard, ClubCardContent, ClubCardMedia, ClubCardNameTypoH2, ClubCardTypoH2, ClubNameTypo, GridContainer, GridContainerWrapper, GridItem, } from "./mainContentVertical.styles";
import { TypoBody1, TypoBody2, TypoH2 } from "../../../styled-components/styledTypographie";



const placeholder = "./public/uploads/clubstep/Platzhalter_Clubbild.png"

export interface ClubType {
    id: number,
    name: string,
    disctrict: string,
    description: string,
    picAdresses: string[]
}


function MainContentVerticalUI() {

    const [clubs, setClubs] = useState<ClubType[]>([])


    const urls = [
    //    'http://10.0.2.24:8080/api/home', // pc damago
        'http://192.168.178.28:8080/api/home', // pc home
      ];


        const fetchData = async() => {
                for(const url of urls) {
                    try {
                    console.log("iteration")
                    const response = await fetch(url)
                    if      (!response.ok) {throw new Error(`fetching ${url} failed`)}
                    else if ( response.ok) {
                        console.log(`fetching ${url} successful`)
                        const data = await response.json() 
                        return(data)
                    }
                } catch (error: unknown) {
                    if (error instanceof Error) {
                        console.log(`${error.message} at ${url}`)
                    } else {
                        console.log('unknown error for' + url)
                    }
                    continue;
                }
            } 
        }


    const loadData = async () => {
        const data = await fetchData()
        setClubs(data)
    }

    useEffect(() => {
        loadData()
    }, [])






    return (
        <>
                <GridContainer>
                {clubs.map((club) => (
                    <GridItem>
                        <ClubCard>
                            <ClubCardMedia component="img" image={placeholder}/>
                            <ClubCardContent>
                                <ClubNameTypo>Clubname</ClubNameTypo>
                                <TypoBody1>A club offering a vibrant atmosphere for socializing, networking, and entertainment. Enjoy great music, events, and a welcoming community for all members. Ideal for relaxation and making new connections. </TypoBody1>
                            </ClubCardContent>

                        </ClubCard>
                    </GridItem >
                    ))}
                </GridContainer>
        </>
    )







}

export default MainContentVerticalUI
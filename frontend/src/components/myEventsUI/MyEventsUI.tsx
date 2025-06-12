import { Box, Button } from "@mui/material"
import { ActionButton, ActionsWrapper, EventsWrapper, NoEventsNotice } from "./myEventsUI.Styles"
import EventCard from "../../common/event/EventCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TypoH2 } from "../../styled-components/styledTypographie";

console.log(Math.floor(Math.random() * 4))

    const apiUrl =import.meta.env.VITE_APP_API_URL

function MyEventsUI() {

    const navigateTo = useNavigate();

    type eventsType = {
        name: string
        startTimeDate: string
        endTimeDate: string
        price: string
        liks: string
        description: string
        soldTickets: string 
        imagePaths: string[]
    }

    const [events, setEvents] = useState<eventsType[]>()

    useEffect(() => {
        async function fetchData() {
            const result = await fetch(`${apiUrl}/events/showAllEvents`, {
                credentials: 'include'
            })
            if (result.ok) {
                const resultJSON = await result.json()
                setEvents(resultJSON)   
            }
        }
        fetchData()
    }, [])




function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('de-DE')
}

function formatDateTime(dateString: string): string {
    return new Date(dateString).toLocaleString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}    


    return(
    <>
        <ActionsWrapper>
            <ActionButton onClick={() => navigateTo("/myEvents/addEvent")}>
                add event
            </ActionButton>
        </ActionsWrapper>
        <EventsWrapper>
            {events?.length < 1 ?
            (
                <NoEventsNotice><TypoH2>no current events</TypoH2></NoEventsNotice>
            ) : (
                events?.map((event) => (
                <>
                <EventCard isHost={false} imgSrc={`${apiUrl}/images/${event.imagePaths[0].replace(/\//g, "-")}`} eventName={event.name} venueName={""} date={formatDate(event.startTimeDate)} startTime={formatDateTime(event.startTimeDate)} endTime={formatDateTime(event.endTimeDate)} price={`${event.price}€`} likes={event.likes} soldTickets={""} />
                </>
            ))
            )
            }                      
        </EventsWrapper>
    </>
    )
}

export default MyEventsUI
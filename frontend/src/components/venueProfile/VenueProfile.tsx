import { useParams } from "react-router";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { VenueType } from "../ui/venueCards/VenueCards";
import { AdressWrapper, DragOverlay, EventCardWrapper, HeaderWrapper, ImageBox, ImagesWrapper, NameWrapper, NoEventsNotice, ProfileWrapper } from "./VenueProfile.Styles";
import { TypoBody1, TypoBody2, TypoH1, TypoH2 } from "../../styled-components/styledTypographie";
import { useDraggable } from "react-use-draggable-scroll";
import React from "react";
import { useDragScroll } from "../../hooks/useScrollDrag";
import { Height, WidthFull } from "@mui/icons-material";
import { Box } from "@mui/material";
import EventCard from "../../common/event/EventCard";



const apiUrl =import.meta.env.VITE_APP_API_URL

// "/venue/:venuename"
export default function VenueProfile() {

  const param = useParams();
  const [venue, setVenue] = useState<VenueType>();




  useEffect(() => {

    console.log("fetching to: ", `${apiUrl}/venue/${param.venuename}`)
      
    async function fetchData() {

      const response = await fetch(`${apiUrl}/venue/${param.venuename}`)

      const dataJson = await response.json()

      setVenue(dataJson)

    }
    fetchData()

  }, [])

  // user can upload 12 images
  function getImages() {

    const imagesArray = []

    for (let i = 0; i <= 11; i++) 
      if (venue?.picAddresses[i]) {

        const image = <img src={`${apiUrl}/images/${venue?.picAddresses[i].replace(/\//g, "-")}` }></img>
        imagesArray.push(image)

    } 
    else return imagesArray;
  }

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  useEffect(() => {
    console.log('ref.current:', ref.current);
  }, []);


  const [overlayOffset, setOverlayOffset] = useState(0);

  const handleScroll = () => {
    if (ref.current) {
      setOverlayOffset(ref.current.scrollLeft);
      console.log(ref.current.scrollLeft)
    }
  };

  useEffect(() => {
    const current = ref.current;
    if (current) {
      current.addEventListener('scroll', handleScroll);
    }
    return () => {
      current?.removeEventListener('scroll', handleScroll);
    };
  }, []);


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


  return (
    <>
        <ProfileWrapper>
          <HeaderWrapper>
            <TypoH1>{venue?.name}</TypoH1>
          </HeaderWrapper>
        </ProfileWrapper>
        <ImagesWrapper>
          <ImageBox ref={ref} {...events}> 
            {/* Drag and scroll only works with this overlay! Otherwise, grabbing the <img> interferes with the behavior. */}
            <DragOverlay style={{ transform: `translateX(${overlayOffset}px)` }}/>
            {getImages()}
          </ImageBox>
        </ImagesWrapper>
        <AdressWrapper>
          <TypoBody2>{"•"}{venue?.city}{"•"}</TypoBody2>
          <TypoBody2>{"•"}{venue?.street}{" "}{venue?.houseNumber}{"•"}</TypoBody2>
          <TypoBody2>{"•"}{venue?.postalCode}{"•"}</TypoBody2>
          <TypoBody2>{"•"}{venue?.district}{"•"}</TypoBody2>
        </AdressWrapper>
        <HeaderWrapper>
          <TypoH2>Events</TypoH2>
        </HeaderWrapper>
        <EventCardWrapper>

        {venue?.events.length < 1 ?
        (
          <NoEventsNotice><TypoH2>no current events</TypoH2></NoEventsNotice>
        ) : (
          venue?.events.map((event) => <EventCard isHost={false} imgSrc={`${apiUrl}/images/${event.imagePaths[0].replace(/\//g, "-")}`} eventName={event.name} venueName={""} date={formatDate(event.startTimeDate)} startTime={formatDateTime(event.startTimeDate)} endTime={formatDateTime(event.endTimeDate)} price={event.price} likes={event.likes} soldTickets={""}></EventCard>)
        )  
        }

        </EventCardWrapper>
    </>
  )


}
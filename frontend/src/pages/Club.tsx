import { useParams } from "react-router";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import NoMatch from "./NoMatch";
import { ClubType } from "../components/ui/mainContentVertical/MainContentVerticalUI";


export default function Club() {
  const { clubName } = useParams();
  const [clubs, setClubs] = useState<ClubType[]>([]);

  useEffect(() => {
    fetch('http://10.0.2.24:8080/api/home')
      .then(response => response.json())
      .then(data => setClubs(data));
  }, []);

  const checkIfExists = clubs.find((club) => club.name.toLowerCase() === clubName?.toLocaleLowerCase());

  if (checkIfExists) {
    return (
    <>
      {clubs.map((club) => (
        <Box>
          {club.name}
        </Box>
      ))}
    </>
    )
  } else return (<NoMatch />);
}
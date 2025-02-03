import { useParams } from "react-router";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ClubType } from "../components/ui/mainContentVertical/mainContentVertical";
import NoMatch from "./NoMatch";

export default function Club() {
  const { clubName } = useParams();
  const [clubs, setClubs] = useState<ClubType[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/home')
      .then(response => response.json())
      .then(data => setClubs(data));
  }, []);

  const checkIfExists = clubs.find((club) => club.name.toLowerCase() === clubName?.toLocaleLowerCase());

  if (checkIfExists) {
    return (
      <Box>
        data from {clubName}
      </Box>
    );
  } else return (<NoMatch />);
}
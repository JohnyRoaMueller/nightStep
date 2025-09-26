export type Guest = {
  id: string;                     // MongoDB @Id
  gender: string;
  firstname: string;
  lastname: string;
  birthday: string;
  email: string;
  street: string;
  housenumber: string;
  phonenumber: string;
  userAuthId: string;             // Referenz zum Auth-Objekt
  followedClubIds: string[];      // Liste von Club-IDs
};
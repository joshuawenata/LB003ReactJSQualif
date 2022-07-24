import { gql } from "@apollo/client";

export const CARI_CHARACTER = gql`
query CariCharacter($names:String!){
    characterByName(name:$names) {
      _id
      name
      imageUrl
      tvShows
      films
      shortFilms
      videoGames
    }
}  
`
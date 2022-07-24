import { gql } from "@apollo/client";

export const ALL_CHARACTER = gql`
{
  characters{
    items{
      _id,
      name,
      imageUrl,
      tvShows,
      films,
      shortFilms,
      videoGames
    }
  }
}
`

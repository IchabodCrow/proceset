
import { gql } from "apollo-boost";

export default gql`
query currentUser{
    currentUser{
      firstName
      secondName
      email
    }
  }
`;

import { gql } from "apollo-boost";

export default gql`
  mutation signup($firstName: String!, $secondName: String!, $email: String!, $password: String! ) {
    signup(firstName: $firstName, secondName: $secondName, email: $email, password: $password ) 
  }
`;

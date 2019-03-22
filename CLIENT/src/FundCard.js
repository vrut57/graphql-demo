import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 1px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 5px;
  padding: 10px;
  
  > div {
    border-bottom: 1px solid darkgray;
    padding: 5px 0;
  }
`;

export const GqlCard = styled(Card)`
  color: royalblue;
  border: 2px solid royalblue;


`;

export const RestCard = styled(Card)`
    color: forestgreen;
    border: 2px solid forestgreen;
`;

export default Card;

import styled from "styled-components";

const Container = styled.div`
    background: white;
    margin: 50px;
    padding: 10px;
    flex-basis: auto;
`;

export const GqlContainer = styled(Container)`
    border: 2px solid darkblue;
`;

export const RestContainer = styled(Container)`
    border: 2px solid darkgreen;
`;
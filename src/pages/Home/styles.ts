import styled from 'styled-components';

export const Container = styled.div`
  width: 100%auto;
  padding: 2rem;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
  padding-bottom: 30px;
  scroll-margin: inherit;
`;


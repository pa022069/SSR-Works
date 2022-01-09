import styled from 'styled-components';
import Document from '../../components/StyledDoc';

export default Document;

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 48px);
  overflow-y: auto;
  border-bottom: 1px solid #333;
  padding-top: 62px;
`;

export const ListContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 7.5px;
`;

export const ItemContainer = styled.div`
  position: relative;
  width: calc((100% / 4) - 15px);
  min-height: calc(((100vw - 15px) / 4) - 15px);
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  margin: 7.5px;
`;

export const ItemContent = styled.div`
  position: relative;
  width: 100%;
  padding: 7.5px;
  border-top: 1px solid #333;
  h3 {
    margin: 0;
    margin-bottom: 7.5px;
    font-weight: bold;
    font-size: 16px;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const FullContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  border: 1px solid #333;
  margin: 7.5px;
  display: flex;
  flex-direction: row;
`; 

export const FullContent = styled.div`
  position: relative;
  width: 40%;
  padding: 7.5px;
  h3 {
    margin: 0;
    margin-bottom: 7.5px;
    font-weight: bold;
    font-size: 16px;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const SortContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0 7.5px;
  padding-top: 15px;
  a {
    width: 20px;
    display: block;
    position: relative;
    margin: 0 7.5px;
    cursor: pointer;
  }
  svg {
    width: 100%;
    transition: all 0.3s;
  }
`;

export const ItemPhotos = styled.div`
  &:hover {
    a {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const ExpandButton = styled.a`
  position: absolute;
  right: 5px;
  bottom: 5px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  cursor: pointer;
  svg {
    width: 30px;
    padding: 5px;
  }
`;

import styled from 'styled-components';
import Document from '../StyledDoc';

export default Document;

export const HeaderContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  border-bottom: 1px solid #333;
`;

export const LinkTag = styled.a`
  display: block;
  padding: 5px 10px;
  text-decoration: none;
  cursor: pointer;
  &.active {
    border-bottom: 1px solid #333;
  }
`;

export const LinkList = styled.ul`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  li {
    list-style: none;
    margin: 0 15px;
    a {
      border-bottom: 1px solid rgba(0, 0, 0, 0);
      transition: all 0.3s;
      &:hover {
        border-bottom: 1px solid #333;
      }
    }
  }
`;

export const FooterContainer = styled.footer`
  position: relative;
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  div {
    font-size: 14px;
  }
`;

import styled from 'styled-components';
import Document from '../StyledDoc';

export default Document;

export const HeaderContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  // background: rgba(240, 240, 240, 0.1);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1.5rem;
  // border-bottom: 1px solid #333;
`;

export const HeaderLogo = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  color: #666;
`

export const LinkTag = styled.a`
  position: relative;
  display: block;
  padding: 5px 10px;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  color: #555;

  &::after {
    content: '${(props: {text: string}) => props.text}';
    display: block;
    white-space: nowrap;
    transition: all 0.4s;
    margin-top: 10px;
    color: #555;
  }
  &:hover {
    transform: translateY(-50%);
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
    height: 34px;
    overflow: hidden;
    @media (min-width: 1200px) {
      font-size: 1.125rem;
    }
    
    &.active {
      border-bottom: 1px solid #333;
    }

    a {
      border-bottom: 1px solid rgba(0, 0, 0, 0);
      transition: all 0.3s;
    }
  }
`;

export const FooterContainer = styled.footer`
  position: relative;
  // background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  // box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  div {
    font-size: 14px;
  }
`;

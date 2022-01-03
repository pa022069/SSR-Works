import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  display: block;
  padding: 5px 10px;
  text-decoration: none;
`;

export const LinkList = styled.ul`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  li {
    list-style: none;
  }
`;
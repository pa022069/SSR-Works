import { Head, Link } from '../NextComponents';
import { HeaderContainer, LinkTag, LinkList, FooterContainer } from './_document';

export const WrapHeader = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Link href="/">Logo</Link>
      <nav>
        {/* <a href="/">Menu <span></span><span></span><span></span></a> */}
        <LinkList>
          <li>
            <Link href="/about">
              <LinkTag>About</LinkTag>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <LinkTag>Works</LinkTag>
            </Link>
          </li>
          <li>
            <Link href="/">
              <LinkTag>Contact</LinkTag>
            </Link>
          </li>
        </LinkList>
      </nav>
    </HeaderContainer>
  );
};

export const WrapFooter = (): JSX.Element => {
  return (
    <FooterContainer>Footer</FooterContainer>
  );
};

import { Head, Link } from '../NextComponents';
import { HeaderContainer, LinkTag, LinkList, FooterContainer } from './_document';
import { useRouter } from "next/router";

export const WrapHeader = (): JSX.Element => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <Link href="/">Logo</Link>
      <nav>
        {/* <a href="/">Menu <span></span><span></span><span></span></a> */}
        <LinkList>
          <li>
            <Link href="/about">
              <LinkTag className={router.pathname == "/about" ? "active" : ""}>About</LinkTag>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <LinkTag className={router.pathname == "/works" ? "active" : ""}>Works</LinkTag>
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

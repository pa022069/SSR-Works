import { Head, Link } from '../NextComponents';
import React, { useEffect } from 'react';
import { HeaderContainer, LinkTag, LinkList, FooterContainer, HeaderLogo } from './_document';
import { useRouter } from "next/router";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const WrapHeader = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link href="/" >J.W.</Link>
      </HeaderLogo>
      {/* <nav>
        <a href="/">Menu <span></span><span></span><span></span></a>
        <LinkList>
          <li className={router.pathname == "/about" ? "active" : ""}>
            <Link href="/about">
              <LinkTag text="關於我">About</LinkTag>
            </Link>
          </li>
          <li className={router.pathname == "/works" ? "active" : ""}>
            <Link href="/works">
              <LinkTag text="精選作品">Works</LinkTag>
            </Link>
          </li>
        </LinkList>
      </nav> */}
    </HeaderContainer>
  );
};

export const WrapFooter = (): JSX.Element => {
  return (
    <FooterContainer>
      <div>© 2022 Jeffrey Wu. ALL RIGHTS RESERVED.</div>
      <a>pa022069@gmail.com</a>
    </FooterContainer>
  );
};

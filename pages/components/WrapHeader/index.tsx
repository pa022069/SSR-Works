import { HeaderContainer, Link, LinkList } from './_style';

const WrapHeader = () => {
  return (
    <HeaderContainer>
      <Link href="/">Logo</Link>
      <nav>
        <a href="/">Menu <span></span><span></span><span></span></a>
        <LinkList>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Work</Link></li>
          <li><Link href="/">Contact</Link></li>
        </LinkList>
      </nav>
    </HeaderContainer>
  );
};

export default WrapHeader;

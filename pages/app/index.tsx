import type { NextPage } from "next";
import { Head, Image } from "../../components/NextComponents";
import Styled from "./_style";
import { useRef } from 'react';

const App: NextPage = () => {
  const accountRef = useRef<any>();
  const passwordRef = useRef<any>();

  return (
    <>
      <Head>
        <title>登入</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Styled.Wrapper>
        <Styled.LoginDiv>
          <form>
            <Styled.InputDiv>
              <label htmlFor="account">帳號</label>
              <input ref={accountRef} type="text" name="account" id="account" />
            </Styled.InputDiv>
            <Styled.InputDiv>
              <label htmlFor="password">密碼</label>
              <input ref={passwordRef} type="password" name="password" id="password" />
            </Styled.InputDiv>
            <Styled.SubmitButton>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('login', {
                    account: accountRef.current.value,
                    password: passwordRef.current.value,
                  })
                }}
              >
                登入
              </button>
            </Styled.SubmitButton>
          </form>
        </Styled.LoginDiv>
      </Styled.Wrapper>
    </>
  );
};

export default App;
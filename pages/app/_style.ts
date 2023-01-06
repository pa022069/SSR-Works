import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginDiv = styled.div`
  position: relative;
  min-width: 200px;
  display: block;
  padding: 1.5rem 2rem;
  border-radius: 4px;
  background-color: #444;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const InputDiv = styled.div`
  margin: 1rem 0;
  label {
    color: #FFF;
    margin-right: 1rem;
  }
  input {
    padding: 0.25rem 0.5rem;
  }
`;

const SubmitButton = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  button {
    background: #111;
    color: #FFF;
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: #222;
    }
    &:active {
      background: #000;
    }
  }
`;

const Styled = {
  Wrapper,
  LoginDiv,
  InputDiv,
  SubmitButton
}

export default Styled;
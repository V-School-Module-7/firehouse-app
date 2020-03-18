import React, {useContext} from "react";
import styled from "styled-components";
import { Button, ButtonAlt } from "../components/styledComponents";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const WillLaterBeAnImage = styled.div`
  background-color: rgb(176, 176, 176);
  width: 245px;
  height: 245px;
  margin: 80px auto 0 auto;
`;

const WelcomeMessage = styled.h1`
  text-indent: 32px;
  width: 245px;
  margin: 30px auto 70px auto;
`;

const SignUpBtn = styled(ButtonAlt)``;
const ButtonContainer = styled.div`
  margin: auto;
  margin-bottom: 100px;
`;
const SignInBtn = styled(Button)`
  margin-top: 24px;
`;
const ButtonLink = styled(Link)`
  margin: 8px auto 8px auto;
  text-decoration: none;
  width: 100%;
`;

function Registration(props) {
 const { user, signOut, signInWithGoogle } = useContext(UserContext)

  return (
    <LoginContainer>
      <WillLaterBeAnImage />
      <WelcomeMessage>Welcome to HotZone App{user ? <p>{user.displayName}</p> : <p>Sign up/in </p>}
      </WelcomeMessage>
      {
       user
       ? <ButtonContainer>
          <ButtonLink onClick={signOut}>
            <SignUpBtn>Sign Out</SignUpBtn>
          </ButtonLink>
        </ButtonContainer>
        :<ButtonContainer>
          <ButtonLink onClick={signInWithGoogle}>
          <SignInBtn>Sign in with Google</SignInBtn>
        </ButtonLink>
        </ButtonContainer>
      }

    </LoginContainer>
  );
}

export default Registration

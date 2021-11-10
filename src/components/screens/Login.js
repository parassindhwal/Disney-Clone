import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';

function Login() {
    const signIn = (e) => {
        auth.signInWithPopup(provider).catch((error) => 
            alert(error.message)
        ); 
    };

    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp onClick={signIn}>GET ALL THERE</SignUp>
                <Description>
                ​Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-Two.png" />
            </CTA>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        content: '';
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0.7;
        z-index: -1;
    }
`;

const CTA = styled.div`
    max-width: 650px;
    width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`;

const CTALogoOne = styled.img`

`;

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`;

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

const CTALogoTwo = styled.img`
    width: 90%;
`;
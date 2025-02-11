import React from 'react';
import { NextPage } from 'next';
import { Header } from 'semantic-ui-react';
import useDarkMode from 'use-dark-mode';

import useBreakpoints from '@helpers/useBreakpoints';
import usePlayerContext from '@helpers/usePlayerContext';
import GlobalLoader from '@components/global-loader';
import Layout from '@components/layout/Layout';
import SigninForm from '@components/signin-form';
import { StyledSegment } from '@theme/styles';

const SignIn: NextPage = () => {
    const { value: isDark } = useDarkMode(false);
    const { lteSmall } = useBreakpoints();
    const { isLoading } = usePlayerContext();

    if (isLoading) {
        return <GlobalLoader isDark={isDark} />;
    }

    return (
        <Layout>
            <StyledSegment
                inverted={isDark}
                raised
                padded={lteSmall ? true : 'very'}
            >
                <Header as="h1">Enter your credentials</Header>
                <p>
                    You can type in any name and password to create account. Thank you!
                </p>
                <SigninForm />
            </StyledSegment>
        </Layout>
    );
};

export default SignIn;

import styled from '@emotion/styled';

import { background } from '@theme/layers';

export const Main = styled.main`
    text-align: center;
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${background};
    width: 100%;
    min-height: 100%;
    background: url('https://img.freepik.com/free-photo/separation-coin-bank-note-puzzle-green-background_23-2148207339.jpg?w=2000') no-repeat center center fixed;
    background-size: cover;
`;

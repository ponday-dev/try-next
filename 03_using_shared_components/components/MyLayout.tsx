/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Header } from './Header';
import { ReactElement } from 'react';

const layoutStyle = css`
    margin: 20px;
    padding: 20px;
    border: 1px solid #dddddd;
`;

export const Layout: React.FC = ({ children }) => (
    <div css={layoutStyle}>
        <Header />
        { children }
    </div>
);

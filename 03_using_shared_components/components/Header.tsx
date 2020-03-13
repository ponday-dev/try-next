/** @jsx jsx */
import Link from 'next/link';
import { jsx, css } from '@emotion/core';

const linkStyle = css`
    margin-right: 15px;
`;

export const Header: React.FC = () => (
    <div>
        <Link href="/">
            <a css={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a css={linkStyle}>About</a>
        </Link>
    </div>
);

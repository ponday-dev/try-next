import React from 'react';
import { Header } from './Header';

const style = {
    margin: 20,
    padding: 20,
    border: '1px solid #dddddd'
};

export const Layout: React.FC = React.memo(({ children }) => (
    <div style={style}>
        <Header />
        {children}
    </div>
));

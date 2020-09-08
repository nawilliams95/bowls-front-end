import React from 'react';
import NavBar from '../NavBar/NavBar'

export default function Layout(props) {
    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Better Bowl</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />
                <link rel="stylesheet" href="./components/Layout/Layout.css" />
            </head>
            <NavBar/>
            <body>
                {props.children}
            </body>
            <footer>

            </footer>
        </html>
    );
}


import React from 'react';
import NavBar from '../NavBar/NavBar'

export default function Layout(props) {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Better Bowl</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />
                <script src="https://kit.fontawesome.com/2b6b919a5f.js" crossOrigin="anonymous" />
                <link rel="stylesheet" href="./components/Layout/Layout.css" />
            </head>
            <NavBar />
            <body>
                {props.children}
            </body>
            <footer>
                    <div class="content has-text-centered">
                        <p style={{marginBottom: '30px', marginTop: '-25px'}}>
                            <a href="/home">A Better Bowl for a Better Day&trade;</a> 
                        </p>
                    </div>
                </footer>
        </html>
    );
}


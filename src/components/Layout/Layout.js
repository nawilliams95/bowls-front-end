import React from 'react';


export default function Layout(props) {
    return (
        <>
            <div>
                {props.children}
            </div>
            <footer>
                <div class="content has-text-centered">
                    <p style={{ marginBottom: '30px', marginTop: '-25px' }}>
                        <a href="/home">A Better Bowl for a Better Day&trade;</a>
                    </p>
                </div>
            </footer>


        </>
    );
}


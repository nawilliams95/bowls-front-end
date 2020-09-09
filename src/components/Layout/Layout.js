import React from 'react';


export default function Layout(props) {
    return (
        
<>
       
                <header>
                    {/* <NavBar /> */}
                </header>

                <div>
                    {props.children}
                </div>

                <footer>
                    <div className="content has-text-centered">
                        <p style={{ marginBottom: '30px' }}>
                            <a href="/home">A Better Bowl for a Better Day&trade;</a>
                        </p>
                    </div>
                </footer>
  

        </>
    );
}


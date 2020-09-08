const React = require('react');

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>Better Bowl</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"/>
                    <link rel="stylesheet" href="./components/Layout/Layout.css"/>
                </head>
                <header>
                    <nav class="navbar is-family-primary has-text-weight-semibold" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">
                            <a href="#">
                                <img id="nav-logo" src="https://i.imgur.com/0Z61aZV.png"
                                style={{width: '250px'}}
                                />
                            </a>
                            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div id="navbarBasicExample" class="navbar-menu">
                            <div class="navbar-start">
                                <a class="navbar-item" style={{}}>
                                    About
                                </a>
                                <a class="navbar-item">
                                    Contact
                                </a>
                                <a class="navbar-item">
                                    Order Now
                                </a>
                                <div class="navbar-item has-dropdown is-hoverable">
                                    <a class="navbar-link">
                                        Order Now
                                    </a>
                                    <div class="navbar-dropdown">
                                            <a class="navbar-item">
                                                Signature Better Bowls
                                            </a>
                                            <a class="navbar-item">
                                                Create A Better Bowl
                                            </a>                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                <a class="button is-info">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">
                                    Log in
                                </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <body>
                    {this.props.children}
                </body>
                <footer>
                    <div class="content has-text-centered">
                        <p style={{marginBottom: '30px'}}>
                            <a href="#">A Better Bowl for a Better Day&trade;</a> 
                        </p>
                    </div>
                </footer>
            </html>
        );
    }
}

module.exports = Layout;
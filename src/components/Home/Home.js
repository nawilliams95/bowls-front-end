const React = require('react');
const ReactDOM = require('react-dom');
const Layout = require('./components/Layout/Layout.jsx');

const React = require('react');

class Home extends React.Component {
    render() {
    // const product = this.props.product
      return (
        <div>
            <div className="slogan is-family-primary has-text-centered has-text-weight-bold" style={{fontSize: '20px', marginBottom: '30'}}>
                <h1>
                  How to Build a Better Bowl:
                </h1>
                <div class="container is-fluid" style={{width: '50%'}}>
                <div class="notification">
                    First, Pick a <strong>Base</strong>: 
                </div>
                    <img src="https://i.imgur.com/Bz34tHp.jpg" style={{width: '100px'}}/>
                </div>
                <div class="container is-fluid" style={{width: '50%'}}>
                <div class="notification">
                    Second, Pick a <strong>Protein</strong>: 
                </div>
                    <img src="https://i.imgur.com/OPGvzKD.jpg" style={{width: '100px'}}/>
                </div>
                <div class="container is-fluid" style={{width: '50%'}}>
                <div class="notification">
                    Third, Pick two <strong>Sides</strong>: 
                </div>
                <span>
                    <img src="https://i.imgur.com/abBeeSi.jpg" style={{width: '100px'}}/>
                </span>
                <span>
                    <img src="https://i.imgur.com/U4Ulrbp.jpg" style={{width: '100px'}}/>
                </span>
                </div>
                <div class="container is-fluid" style={{width: '50%'}}>
                <div class="notification">
                    Fourth, Pick a <strong>Topping</strong>: 
                </div>
                    <img src="https://i.imgur.com/RRp17ye.jpg" style={{width: '100px'}}/>
                </div>
                <div class="container is-fluid" style={{width: '50%'}}>
                <div class="notification">
                    Lastly, Drizzle One of Our <strong>Sauces</strong> on Top and Enjoy: 
                </div>
                    <img src="https://i.imgur.com/Zqu8tkq.jpg" style={{width: '150px'}}/>
                </div>
            </div>
        </div>  
        );
    }
}

export default Home;
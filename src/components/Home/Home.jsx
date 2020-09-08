const React = require('react');
const ReactDOM = require('react-dom');
const Layout = require('./components/Layout/Layout.jsx');

class Index extends React.Component {
    render() {
    // const product = this.props.product
      return (
          <Layout>
              <h1>Better Bowl Test</h1>
          </Layout>
        );
    }
}

module.exports = Index;
import React from 'react';
import './css/App.css';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.js'
import "./css/App.css";
import Route from "react-router-dom/Route";

const App = () => {
  
  return (
      <Layout>
        <div className="body">
          <Route
            path="/"
            render={(props) => {
              return <Home />;
            }}
          />
        </div>
      </Layout>
  );
}

export default App;

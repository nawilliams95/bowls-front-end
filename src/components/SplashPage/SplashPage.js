import React from "react";

export default function SplashPage(props) {
  return (
    <div>
      <div className="buttons">
        <a href="/home" className="button is-info" style={{ marginLeft: '1300px' }} onClick={props.handleEnter}>
          <strong>Enter</strong>
        </a>
      </div>
      <div>
        <a href="/home">
          <img id="splash-logo" alt="" src="https://i.imgur.com/0Z61aZV.png"
            style={{ width: '1000' }} />
        </a>
        <h1 style={{ width: '50%', margin: 'auto' }}>Here at Better Bowl we believe a good day starts and ends with a nutritious and delicious meal, so we make it our mission every day to provide healthy yet flavorful meal options to our community and communities alike. At Better Bowl we only use high quality ingredients. The ingredients that make up our bowls are locally sourced and organic, as well as good, wholesome and fresh. Whether you’re trying one of our signature dishes or you’re building a bowl yourself, you should feel good about the food you’re consuming. We makes it easy with bowls done our way - bowls done the right way. Better Bowl. A Better Bowl for a Better Day.</h1>
      </div>

    </div>

  )
}



import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
          <div className="shadow footer-basic" style={{"margin-top": "65px"}}>
        <h1 style={{"text-align": "center"}}><img src="assets/img/AFL.jpg" style={{"width": "88px"}}/><br /></h1>
        <footer>
            <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a>
            <a href="#"><i className="icon ion-social-snapchat"></i></a>
            <a href="#"><i className="icon ion-social-twitter"></i></a>
            <a href="#"><i className="icon ion-social-facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="text-white bg-primary copyright" style={{"height": "40px"}}>Company Name © 2022</p>
        </footer>
    </div>
      </div>
    )
  }
}

export default Footer
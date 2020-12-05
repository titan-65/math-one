import React from 'react';

export default function Footer() {
  return (
    <footer className="footer footer-big footer-white">
        <div className="container">
          <div className="content">

          </div>
          <hr/>
          <ul className="social-buttons">
            <li>
              <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#pablo" className="btn btn-just-icon btn-link btn-facebook">
                <i className="fa fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#pablo" className="btn btn-just-icon btn-link btn-google">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#pablo" className="btn btn-just-icon btn-link btn-youtube">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
          </ul>
          <div className="copyright pull-center">
            Copyright © <script>
            document.write(new Date().getFullYear())
          </script>2020 Project One All Rights Reserved.
          </div>
        </div>
    </footer>
  )
}

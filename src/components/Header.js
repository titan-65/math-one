import '../global.css'

import React from 'react'

export default function Header() {
    return ( 
      <nav className="navbar navbar-inverse navbar-expand-lg bg-dark" role="navigation-demo">
            <div class="container">
              <div class="navbar-translate">
                <a class="navbar-brand" href="#0">Navbar with notification</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="navbar-toggler-icon"></span>
                  <span class="navbar-toggler-icon"></span>
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="#pablo" class="nav-link">
                      Discover
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#pablo" class="nav-link">
                      Wishlist
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#pablo" class="btn btn-rose btn-raised btn-fab btn-round" data-toggle="dropdown">
                      <i className="material-icons">email</i>
                    </a>
                  </li>
                  <li className="dropdown nav-item">
                    <a href="#pablo" class="profile-photo dropdown-toggle nav-link" data-toggle="dropdown">
                      <div className="profile-photo-small">
                        <img src="assets/img/faces/avatar.jpg" alt="Circle Image" class="rounded-circle img-fluid"/>
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <h6 className="dropdown-header">Dropdown header</h6>
                      <a href="#pablo" class="dropdown-item">Me</a>
                      <a href="#pablo" class="dropdown-item">Settings and other stuff</a>
                      <a href="#pablo" class="dropdown-item">Sign out</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  )
}

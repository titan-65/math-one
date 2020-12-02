import '../global.css'

import React from 'react'
import {Link} from 'gatsby'
export default function Header({ title }) {


    // TODO: Fix the Navabr to in corpate new look
    return (
      <nav className="navbar navbar-inverse navbar-expand-lg bg-dark" role="navigation-demo">
            <div class="container">
              <div class="navbar-translate">
                    <Link to="/" class="navbar-brand" href="#0">Math1</Link>
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
                    <Link to="/session" href="#pablo" class="nav-link">
                      Sessions
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
  )
}

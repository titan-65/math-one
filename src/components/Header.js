
import React from 'react'
import {Link} from 'gatsby'
export default function Header({ title }) {


    // TODO: Fix the Navabr to in corpate new look
    return (
      <nav className="navbar navbar-expand-lg bg-white fixed-top" style={{height: '101px', boxShadow: `0 1px 3px rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.06), 0 0 2px rgba(0,0,0,.07)`}}>
            <div className="container">
              <div class="navbar-translate">
                    <Link to="/" class="navbar-brand" href="#0">Math1</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-none">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/session" href="#pablo" class="nav-link" style={{fontWeight: 700, fontSize: '1.2rem'}}>
                        Sessions
                      </Link>
                    </li>

                  </ul>
                </div>
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

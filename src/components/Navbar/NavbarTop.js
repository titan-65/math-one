import React from 'react';

export default function NavbarTop() {
  return (
    <div className=" bg-primary">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand" href="/presentation.html">Brand</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="#pablo" className="nav-link">link</a>
            </li>
            <li className="nav-item">
              <a href="#pablo" className="nav-link">link</a>
            </li>
          </ul>

          <form className="form-inline ml-auto">
            <div className="form-group no-border">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <button type="submit" className="btn btn-white btn-just-icon btn-round">
              <i className="material-icons">search</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

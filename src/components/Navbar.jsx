import React from 'react'
import "./Navbar.css"

const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand badge nav-link bg-light text-dark fs-4 cursor-pointer" onClick={()=>setCategory("general")}>News Mania</a>
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link"  onClick={()=>setCategory("sports")}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
                        </li>
                    </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar

import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { changeUser, logoutUser, selectUser } from '../redux/features/user/userSlice';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
const NavbarCustom = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const logout = () => {
        axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/auth/logout`, {
            withCredentials: true
        }).then(res =>  dispatch(changeUser(null)))//dispatch(logoutUser))
    }
    useEffect(()=>{
        console.log("user in Navbar", user);
    }, [user])
    return  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">QuestionMaker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        {user ? 
            <>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
            <Nav.Link as={Link} to="/create-question">Create Question</Nav.Link>
            </>
          :<>
           <Nav.Link as={Link} to="/login">Login</Nav.Link>
           <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </>
        }
        </Nav>
      </Navbar.Collapse>
      {user ? <Navbar.Collapse className="justify-content-end">
            <NavDropdown title={user?.email} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/logout" onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
        : null }
    </Container>
  </Navbar>

} 

export default NavbarCustom;

/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Quizzer</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                {user ? 
                <>
                <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                <li className="nav-item"><Link to="/logout" onClick={logout} className="nav-link">Logout</Link></li>
                               
                <li className="nav-item"><Link to="/users" className="nav-link">Users</Link></li>
                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
                {user.isAdmin ? <li className="nav-item"><Link to="/admin" className="nav-link">Admin</Link></li>: null}
                </>

                : 
                <>
                 <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                 <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                </>
                }
        {user?.email}
            </ul>
        </div>
    </div>
</nav> */
import React from 'react'
import './Nav.css'
// import { FaHome } from 'react-icons/fa'
// import { AiOutlineUserAdd } from 'react-icons/ai'
// import { FcAbout } from 'react-icons/fc'
// import { BiConversation } from 'react-icons/bi'
// import { AiFillContacts } from 'react-icons/ai'
import IMG1 from '../../assets/logo3.png'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const data = [
//   {
//     id: 1,
//     title: 'Home',
//     icon: <FaHome />,
//     url: '#'
//   },
//   {
//     id: 2,
//     title: 'About',
//     icon: <FcAbout />,
//     url: '#About'
//   },
//   {
//     id: 3,
//     title: 'Services',
//     icon: <BiConversation />,
//     url: '#services'
//   },
//   {
//     id: 4,
//     title: 'Contact',
//     icon: <AiFillContacts />,
//     url: '#contact'
//   },
//   {
//     id: 5,
//     title: 'SignUp',
//     icon: <AiOutlineUserAdd />,
//     url: '#signup'
//   }
// ]

// const Nav = () => {
//   return (
//     <section id='navbar'>
//       <nav className='container container_navbar'>
//         <img src="" alt="logo_img" className="navbar_logo" />
//         <ul className="container navbar_menu">
//           {
//             data.map(({ id, title, icon, url }) => {
//               return (
//                 <li key={id}>
//                   <a href={url} className="navbar_menu-items">{icon}{title}</a>
//                 </li>
//               )
//             })
//           }
//         </ul>
//       </nav>
//     </section>
//   )
// }


// =====NAVBAR USING BOOTSTRAP===

// function Navbr() {
//   return (
//     <Navbar expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">
//           <img src={IMG1} alt="logo_img" className='logo' />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
           
//           </Nav>
//           {
//             data.map(({ id, title, icon, url }) => {
//               return (
//           <Nav.Link key={id} href={url}>{icon}{title}</Nav.Link>
//           )
//                       })
//                     }
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

const Nav = () => {
    return (
      <header className='navbar1'>
        <img src={IMG1} alt="logo_img1" className='logo_img1'/>
        <div className="navbar_options">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </header>
    )
}

export default Nav;
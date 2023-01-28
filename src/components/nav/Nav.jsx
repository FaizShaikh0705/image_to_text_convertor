import React from 'react'
import { FaHome } from 'react-icons/fa'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc'
import { BiConversation } from 'react-icons/bi'
import { AiFillContacts } from 'react-icons/ai'
import IMG1 from '../../assets/logo1.png'

const data = [
  {
    id: 1,
    title: 'Home',
    icon: <FaHome />,
    url: '#'
  },
  {
    id: 2,
    title: 'About',
    icon: <FcAbout />,
    url: '#About'
  },
  {
    id: 3,
    title: 'Services',
    icon: <BiConversation />,
    url: '#services'
  },
  {
    id: 4,
    title: 'Contact',
    icon: <AiFillContacts />,
    url: '#contact'
  },
  {
    id: 5,
    title: 'SignUp',
    icon: <AiOutlineUserAdd />,
    url: '#signup'
  }
]

const Nav = () => {
  return (
    <section className='navbar'>
      <nav className='container container_navbar'>
        <div>
          <img src={IMG1} alt="logo_img" className="navbar_logo" />
        </div>
        <ul className="container navbar_menu">
          {
            data.map(({ id, title, icon, url }) => {
              return (
                <li key={id}>
                  <a href={url} className="navbar_menu-items">{icon}{title}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </section>
  )
}

export default Nav
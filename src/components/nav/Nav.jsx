import React from 'react'
import {FaHome} from 'react-icons/fa'
import {BsCardHeading} from 'react-icons/bs'
import {FcAbout} from 'react-icons/fc'
import {BiConversation} from 'react-icons/bi'
import {AiFillContacts} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
        <a href="#"><FaHome /></a>
        <a href="#header"><BsCardHeading /></a>
        <a href="#about"><FcAbout /></a>
        <a href="#fa&q"><BiConversation /></a>
        <a href="#contact"><AiFillContacts /></a>
    </nav>
  )
}

export default Nav
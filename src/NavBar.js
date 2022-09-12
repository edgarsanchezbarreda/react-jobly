import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

export const NavBar = () => {
    return (
        <div>
            <Navbar expand='md'>
                <NavLink exact to='/'>
                    Home
                </NavLink>

                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink to='/login'>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

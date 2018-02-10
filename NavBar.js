const React = require('react');
const NavLink = require('react-router-dom').NavLink;

function Nav () {
    return (
      <div className='topnav'>
        <a>
          <NavLink exact activeClassName='active' to='/'>Home</NavLink>
        </a>
        <a>
          <NavLink activeClassName='active' to='/soloq_experts'>Soloq experts</NavLink>
        </a>
        <a>
          <NavLink activeClassName='active' to='/summoners_battle'>Summoners battle</NavLink>
        </a>
      </div>
    )
  }

  module.exports = Nav;
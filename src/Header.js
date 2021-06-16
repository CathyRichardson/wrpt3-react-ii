import React from "react";
import Favorite from './Favorite';

class Header extends React.Component{
    render(){
        return (
          <header className="App-header">
              <Favorite faveType='movie' />
              <Favorite faveType='book' />
              <Favorite faveType='food' />
          </header>
        );
    }
}

export default Header;
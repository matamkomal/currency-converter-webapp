import React from 'react';

import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar__logo"><a href="/">Logo</a></div>
      <div className="spacer"></div>
      <div className="toolbar__navigation-items">
        <ul>
          <li><a href="/">products</a></li>
          <li><a href="/">users</a></li>
        </ul>
      </div>
    </nav>
  </header>
)


export default toolbar;


//MEMO: const toolbar = props => () not {}
//check syntax.

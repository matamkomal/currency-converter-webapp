import React from 'react';

import './SideDrawer.css'

const SideDrawer = props => {
  let drawerClasses = 'side-drawer'

  if(props.show){
    console.log(props.show);
    drawerClasses = 'side-drawer open'
  }
   console.log(drawerClasses);

  return (

    <nav className={drawerClasses}>
      <ul>
        <li><a href="/">products</a></li>
        <li><a href="/">users</a></li>
      </ul>
    </nav>
  )
}

export default SideDrawer;

import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Header extends Component {

  //handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    //const { activeItem } = this.state

    return (
        <Menu inverted>
            <Menu.Item name='Home' />
            <Menu.Item name='Dashboard' />
            <Menu.Item name='Indecision' />
        </Menu>
    )
  }
}

export default Header;
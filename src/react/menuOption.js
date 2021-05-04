
import React from 'react';

class MenuOption extends React.Component {
    render() {
          return (

                <a className="no-underline hover:underline"><button type="button" className="mx-1 px-5 py-1">{this.props.OptionName}</button></a>

                )
        }
};

export default MenuOption;
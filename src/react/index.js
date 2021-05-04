import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/app.css'
import Header from './header';

class Doc extends React.Component {
    render() {
          return (
                  <div>
                    <Header></Header>
                  </div>
                )
        }
};
 
ReactDOM.render(<Doc />, document.getElementById('root'));
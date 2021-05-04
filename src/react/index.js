import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/app.css'
import Header from './header';
import Home from './Home';

class Doc extends React.Component {
    render() {
          return (
                  <div>
                    <Header></Header>
                    <Home></Home>
                  </div>
                )
        }
};
 
ReactDOM.render(<Doc />, document.getElementById('root'));
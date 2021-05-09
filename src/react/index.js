import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/app.css'
import Header from './header';
import Home from './Home';
import SizeInfo from './SizeInfo';
import LotPicture from './LotPicture';
import Neighbourhood from './Neighbourhood';
import Opportunity from './Opportunity';
import UnitMap from './UnitMap';
import UnitCarousel from './UnitCarousel';
import FloorPlans from './FloorPlans';
import CommunityPicture from './CommunityPicture';
import Design from './Design';
import DesignImg from './DesignImg';

class Doc extends React.Component {
    render() {
          return (
                  <div>
                    <Header></Header>
                    <Home></Home>
                    <SizeInfo></SizeInfo>
                    <LotPicture/>
                    <Neighbourhood></Neighbourhood>
                    <Opportunity></Opportunity>
                    <UnitMap></UnitMap>
                    <UnitCarousel></UnitCarousel>
                    <FloorPlans></FloorPlans>
                    <CommunityPicture></CommunityPicture>
                    <Design></Design>
                    <DesignImg></DesignImg>
                  </div>
                )
        }
};
 
ReactDOM.render(<Doc />, document.getElementById('root'));
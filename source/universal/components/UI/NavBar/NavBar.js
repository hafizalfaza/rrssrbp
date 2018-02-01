import React, { Component } from 'react';
import Flexbox from '../../Flexbox';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// components themes
import { rowAlignLeft, rowCentered } from '../../themes/flexbox';

//navbar icons
import { HomeNavIcon, SearchNavIcon, AddNavIcon, LikeNavIcon, ProfileNavIcon } from './NavbarIcons';

class NavBar extends Component {

    render(){
        const { activeRoute } = this.props;
        return (
            <div>
                <div style={{backgroundColor: 'rgba(0,0,0,0.0975)', height: '1px'}}></div>
                <Flexbox theme={rowAlignLeft} style={{height: '44px'}}>
                    <Flexbox theme={rowCentered} align="center" style={{width: '20%'}}>
                        <Link to="/">
                        <HomeNavIcon active={activeRoute==='/'}/>
                        </Link>
                    </Flexbox>
                    <Flexbox theme={rowCentered} align="center" style={{width: '20%'}}>
                        <SearchNavIcon active={activeRoute==='/search'}/>
                    </Flexbox>
                    <Flexbox theme={rowCentered} align="center" style={{width: '20%'}}>
                        <Link to="/create">
                            <AddNavIcon />
                        </Link>
                    </Flexbox>
                    <Flexbox theme={rowCentered} align="center" style={{width: '20%'}}>
                        <LikeNavIcon active={activeRoute==='/notifications'}/>
                    </Flexbox>
                    <Flexbox theme={rowCentered} align="center" style={{width: '20%'}}>
                        <Link to="/profile">
                            <ProfileNavIcon active={activeRoute==='/profile'}/>
                        </Link>
                    </Flexbox>
                </Flexbox>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        activeRoute: state.navBar.activeRoute
    }
}


export default connect(mapStateToProps)(NavBar);
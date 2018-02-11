import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import { rowGapped, rowGappedAround } from 'universal/components/themes/flexbox';
import { ImageBackground } from 'universal/components/ImageBackground/ImageBackground';
import imageBackgroundTheme from 'universal/components/themes/ImageBackground';
import { loadImagesData } from 'universal/actions/imagesAction';
import { connect } from 'react-redux';
import { changeActionBar } from 'universal/actions/actionBarAction';
import { setActiveRoute } from 'universal/actions/navBarAction';

const styles = {
    dataAnchor: {
        fontSize: 14,
        textDecoration: 'none'
    },
    dataText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 14,
        lineHeight: 1.25
    },
    dataNumber: {
        color: '#262626',
        fontWeight: 800,
        display: 'block',
        fontSize: 16
    }
}



class ExplorePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: 'posts'
        };
    }

    componentWillMount(){
        this.props.loadImagesData();
        this.props.changeActionBar('/explore');
        this.props.setActiveRoute('/explore');
    }

    render(){
        return (
            <div style={{backgroundColor: '#fafafa'}}>
                {/* <div style={{
                    height: 40,
                    width: '100%',
                    backgroundColor: '#fafafa',
                    borderBottom: '1px solid #e6e6e6',
                    padding: '0 16px',
                    height: 45,
                    zIndex: 11,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div
                        style={{
                            height: 28,
                            width: '100%'
                        }}
                    >
                        <input type="text"
                            style={{
                                border: 'solid 1px #dbdbdb',
                                borderRadius: 3,
                                color: '#262626',
                                fontSize: 14,
                                outline: 'none',
                                padding: '3px 10px 3px 26px',
                                zIndex: 2,
                                width: '100%'
                            }}
                        >
                        </input>
                        <div
                        style={{
                            background: '#fff',
                            border: '1px solid #dbdbdb',
                            fontSize: 14,
                            borderRadius: 3,
                            color: '#999',
                            cursor: 'text',
                            fontWight: 300,
                            left: 0,
                            padding: 7,
                            position: 'absolute',
                            textAlign: 'center',
                            top: 0,
                            zIndex: 2,
                            boxSizing: 'border-box',
                            height: '40px',
                            width: '100%'
                        }}
                        >
                            <div
                            style={{
                                top: -2,
                                display: 'inline',
                                left: -5
                            }}
                            >
                                <span
                                    style={{
                                        maxWidth: 140,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        verticalAlign: 'bottom',
                                        whiteSpace: 'nowrap',
                                        display: 'inline-block'
                                    }}
                                >
                                Search
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Flexbox theme={rowGapped} style={{
                    width: '100%',
                    padding: '0',
                    flexWrap: 'wrap'
                }}>
                {this.props.images.map((x, i) => {
                    return (<div key={i} style={{
                        width: '33%'
                      }}>
                        <a href="#">
                            <ImageBackground
                                theme={imageBackgroundTheme.coverCenter}
                                backgroundImage={x.image}
                                style={{width: '100%', paddingBottom: '100%',
                                marginBottom: '1.5%'}}
                            >
                            </ImageBackground>
                        </a>
                      </div>)
                })}
                </Flexbox>
            </div>
        )
    }

}

export function loadData(store, req){
    store.dispatch(setActiveRoute(req.url))
    store.dispatch(loadImagesData())
}

const mapStateToProps = (state) => {
    return {
        images: state.images
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        loadImagesData: () => {dispatch(loadImagesData())},
        changeActionBar: (path) => {dispatch(changeActionBar(path))},
        setActiveRoute: (path) => {dispatch(setActiveRoute(path))}
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ExplorePage);

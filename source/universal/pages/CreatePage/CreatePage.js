import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import { rowGapped, rowGappedAround } from 'universal/components/themes/flexbox';
import { ImageBackground } from 'universal/components/ImageBackground/ImageBackground';
import imageBackgroundTheme from 'universal/components/themes/ImageBackground';
import { loadImagesData } from 'universal/actions/imagesAction';
import { connect } from 'react-redux';
import { changeActionBar } from 'universal/actions/actionBarAction';
import { setActiveRoute } from 'universal/actions/navBarAction';

const styles = {}

class CreatePage extends Component {

    constructor() {
        super();
        this.state = {
          width:  '100%',
          height: 0
        }
      }
    
      /**
       * Calculate & Update state of new dimensions
       */
      updateDimensions() {
        if(window.innerWidth < 500) {
          this.setState({ width: '100%', height: 372 });
        } else {
          let update_width  = window.innerWidth-100;
          let update_height = Math.round(update_width/1.0);
          this.setState({ width: update_width, height: update_height });
        }
      }
    
      /**
       * Add event listener
       */
      componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
        
        this.props.loadImagesData();
      }
    
      /**
       * Remove event listener
       */
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
      }
    
    render(){

        return (
            <div>
                <ImageBackground
                    theme={imageBackgroundTheme.coverCenter}
                    backgroundImage="https://scontent-sit4-1.cdninstagram.com/vp/3b8d2ee3e7102f5e99e47c17561874af/5B0A8B3C/t51.2885-15/s750x750/sh0.08/e35/24178182_2164852510408668_4545999651890790400_n.jpg"
                    style={{
                        width: this.state.width,
                        height: this.state.height,
                        margin: '0 auto'
                    }}
                >
                </ImageBackground>
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
        loadImagesData: () => {dispatch(loadImagesData())}
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(CreatePage);

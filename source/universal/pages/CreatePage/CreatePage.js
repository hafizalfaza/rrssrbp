import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import { rowGapped, rowGappedAround } from 'universal/components/themes/flexbox';
import { ImageBackground } from 'universal/components/ImageBackground/ImageBackground';
import imageBackgroundTheme from 'universal/components/themes/ImageBackground';
import { loadImagesData } from 'universal/actions/imagesAction';
import { connect } from 'react-redux';
import { changeActionBar } from 'universal/actions/actionBarAction';
import { setActiveRoute } from 'universal/actions/navBarAction';
import ScrollView from 'universal/components/ScrollView';
import StoryThumb from './StoryThumb';
// import { rowGapped } from '../../components/themes/flexbox';
// import { orderStories } from './tools/orderStories'; 

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

        // const { storiesThumbs } = this.props;

        // const storiesThumbsEl = orderStories(storiesThumbs).map((story) => {
        //     return (
        //         <StoryThumb key={story.id} storyData={story} />
        //     )
        // })

        return (
            <div>
                {/*
                */}
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
                <div
                style={
                    {
                        backgroundColor: '#fafafa',
                        borderTop: '1px solid #e6e6e6',
                        borderBottom: '1px solid #e6e6e6',
                        padding: '20px 16px 8px',
                        marginTop: 10
                    }
                }
                >
                    <h2
                        style={{
                            color: '#999',
                            fontSize: 14,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            paddingBottom: 10
                        }}
                    >
                    Suggestions for you
                    </h2>
                    {/*<ScrollView orientation="horizontal" style={{padding: '0 0 40px 10px'}}>

                        {storiesThumbsEl}

                        {/*
                        <ImageBackground
                            theme={imageBackgroundTheme.coverCenter}
                            backgroundImage="https://scontent-sit4-1.cdninstagram.com/vp/3b8d2ee3e7102f5e99e47c17561874af/5B0A8B3C/t51.2885-15/s750x750/sh0.08/e35/24178182_2164852510408668_4545999651890790400_n.jpg"
                            style={{
                                width: 150,
                                height: 150,
                                margin: 1
                            }}
                        >
                        </ImageBackground>
                        <ImageBackground
                            theme={imageBackgroundTheme.coverCenter}
                            backgroundImage="https://scontent-sit4-1.cdninstagram.com/vp/3b8d2ee3e7102f5e99e47c17561874af/5B0A8B3C/t51.2885-15/s750x750/sh0.08/e35/24178182_2164852510408668_4545999651890790400_n.jpg"
                            style={{
                                width: 150,
                                height: 150,
                                margin: 1
                            }}
                        >
                        </ImageBackground>
                        <ImageBackground
                            theme={imageBackgroundTheme.coverCenter}
                            backgroundImage="https://scontent-sit4-1.cdninstagram.com/vp/3b8d2ee3e7102f5e99e47c17561874af/5B0A8B3C/t51.2885-15/s750x750/sh0.08/e35/24178182_2164852510408668_4545999651890790400_n.jpg"
                            style={{
                                width: 150,
                                height: 150,
                                margin: 1
                            }}
                        >
                        </ImageBackground>
                        <ImageBackground
                            theme={imageBackgroundTheme.coverCenter}
                            backgroundImage="https://scontent-sit4-1.cdninstagram.com/vp/3b8d2ee3e7102f5e99e47c17561874af/5B0A8B3C/t51.2885-15/s750x750/sh0.08/e35/24178182_2164852510408668_4545999651890790400_n.jpg"
                            style={{
                                width: 150,
                                height: 150,
                                margin: 1
                            }}
                        >
                        </ImageBackground>
                        <ImageBackground
                            theme={imageBackgroundTheme.coverCenter}
                            backgroundImage="https://scontent-sit4-1.cdninstagram.com/vp/3b8d2ee3e7102f5e99e47c17561874af/5B0A8B3C/t51.2885-15/s750x750/sh0.08/e35/24178182_2164852510408668_4545999651890790400_n.jpg"
                            style={{
                                width: 150,
                                height: 150,
                                margin: 1
                            }}
                        >
                        </ImageBackground>
                        * /}

                    </ScrollView>*/}
                </div>
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

import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import { rowGapped, rowGappedAround } from 'universal/components/themes/flexbox';
import { ImageBackground } from 'universal/components/ImageBackground/ImageBackground';
import imageBackgroundTheme from 'universal/components/themes/ImageBackground';
import { loadImagesData } from 'universal/actions/imagesAction';
import { connect } from 'react-redux';
import { changeActionBar } from 'universal/actions/actionBarAction';
import { setActiveRoute } from 'universal/actions/navBarAction';
import ExplorePeopleItem from './ExplorePeopleItem';

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

class ExplorePeoplePage extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div style={{backgroundColor: '#fff'}}>
                <div style={{
                    backgroundColor: '#fafafa',
                    borderBottom: '1px solid #e6e6e6',
                    padding: '20px 16px 8px'
                }}>
                    <h2
                        style={{
                            color: '#999',
                            fontSize: 14,
                            fontWeight: 600
                        }}
                    >
                    Suggested
                    </h2>
                </div>


                <ExplorePeopleItem 
                userPhoto="data:image/jpeg;base64,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" 
                userName="Rian"
                userDescription="Bukan Rian Tukang Jagal dari Jombang"
                followingStatus="notFollowing"
                />
                <ExplorePeopleItem 
                userPhoto="https://avatars2.githubusercontent.com/u/856609?s=400&v=4"
                userName="Rian"
                userDescription="Bukan Rian Tukang Jagal dari Jombang"
                followingStatus="following"
                />
                <ExplorePeopleItem 
                userPhoto="https://rizafahmi.com/63cd40d31eab7a2019fe393d8fdf8f72.jpg"
                userName="Rian"
                userDescription="Bukan Rian Tukang Jagal dari Jombang"
                followingStatus="following"
                />
                <ExplorePeopleItem 
                userPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqVgnHeymVgiLuBEw-ZDN34xvnNnmtRH-Vd5q7xa34hfy_e6PY1f1-w8MPP35DPMq4GtDcg&usqp=CAE"
                userName="Rian"
                userDescription="Bukan Rian Tukang Jagal dari Jombang"
                followingStatus="notFollowing"
                />
                <ExplorePeopleItem 
                userPhoto="data:image/jpeg;base64,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"
                userName="Rian"
                userDescription="Bukan Rian Tukang Jagal dari Jombang"
                followingStatus="notFollowing"
                />
                

                <ExplorePeopleItem 
                userPhoto="data:image/jpeg;base64,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" 
                userName="Rian"
                userDescription="Bukan Rian Tukang Jagal dari Jombang"
                followingStatus="notFollowing"
                />
                <ExplorePeopleItem 
                userPhoto="https://avatars2.githubusercontent.com/u/856609?s=400&v=4"
                userName="Rian"
                userDescription="Bukan Rian Tukang Jagal dari Jombang"
                followingStatus="following"
                />
                <ExplorePeopleItem 
                userPhoto="https://rizafahmi.com/63cd40d31eab7a2019fe393d8fdf8f72.jpg"
                userName="Rian"
                userDescription="Bukan Rian Tukang Jagal dari Jombang"
                followingStatus="following"
                />
                <ExplorePeopleItem 
                userPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqVgnHeymVgiLuBEw-ZDN34xvnNnmtRH-Vd5q7xa34hfy_e6PY1f1-w8MPP35DPMq4GtDcg&usqp=CAE"
                userName="Rian"
                userDescription="Bukan Rian Tukang Jagal dari Jombang"
                followingStatus="notFollowing"
                />
                <ExplorePeopleItem 
                userPhoto="data:image/jpeg;base64,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"
                userName="Rian"
                userDescription="Bukan Rian Tukang Jagal dari Jombang"
                followingStatus="notFollowing"
                />



                {/*
                {/* start of discover people item ---------------------------- * /}
                <Flexbox theme={rowGapped} style={{
                    alignItems: 'center',
                    padding: '12px 16px'
                }}>
                    <div style={{width: 70}}>
                        <ImageBackground
                            theme={imageBackgroundTheme.coverCenter}
                            backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                            style={{
                                width: 56,
                                height: 56,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginRight: 28
                            }}
                        >
                        </ImageBackground>
                    </div>
                    <div style={{flex: 'auto'}}>
                        <div>
                            <h1 style={{
                                display: 'inline',
                                fontWeight: 600,
                                fontSize: 14,
                                lineHeight: 1,
                                marginRight: 5,
                                lineHeight: 1
                            }}>
                                Some Name
                            </h1>
                            </div>
                            <div>
                            <span style={{
                                display: 'inline',
                                fontWeight: 'normal',
                                fontSize: 14,
                                lineHeight: 1,
                                marginRight: 5,
                                color: '#999'
                            }}>
                                panjang banget sangat amat kebangetan
                            </span>
                        </div>
                    </div>
                    <div style={{justifyContent: 'flex-end', marginLeft: 10}}>
                        <button style={{
                            padding: '0 8px',
                            cursor:'pointer',
                            background: '#3897f0',
                            borderColor: '#3897f0',
                            color: '#fff',
                            WebkitQppearance: 'none',
                            borderRadius: 3,
                            borderStyle: 'solid',
                            borderWidth: 1,
                            fontSize: 14,
                            fontWeight: 600,
                            lineHeight: 2.0,
                            outline: 'none',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '100%'
                        }}>Follow</button>
                    </div>
                </Flexbox>
                {/* end of discover people item ---------------------------- * /}
                */}

                
            </div>
        )
    }

}

export function loadData(store, req){
    store.dispatch(changeActionBar(req.url))
    store.dispatch(setActiveRoute(req.url))
}

export default (ExplorePeoplePage);

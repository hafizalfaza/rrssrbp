import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import { rowAlignLeft, rowCentered, rowGapped } from 'universal/components/themes/Flexbox';
import img from './instagram.png'


class ActionBar extends Component {

    render(){
        return (
            <div style={{position: 'relative', width: '100%', height: '44px'}}>
                <Flexbox theme={rowGapped} style={{width: '100%', height: '100%', padding: '0 20px', position: 'absolute'}} align="center">
                    <Flexbox theme={rowAlignLeft}>
                        <div>
                            <svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"><path d="M0 167.85v216.2c0 33 26.8 59.8 59.8 59.8h370.4c33 0 59.8-26.8 59.8-59.8v-216.2c0-31.4-25.5-56.9-56.9-56.9h-79.6l-1.9-8.3c-7.7-33.3-37-56.5-71.2-56.5h-70.9c-34.1 0-63.4 23.2-71.2 56.5l-1.9 8.3H56.9c-31.4 0-56.9 25.6-56.9 56.9zm146.2-32.4c5.7 0 10.6-3.9 11.9-9.5l4.1-17.8c5.2-22.1 24.6-37.5 47.3-37.5h70.9c22.7 0 42.1 15.4 47.3 37.5l4.1 17.8c1.3 5.5 6.2 9.5 11.9 9.5H433c17.9 0 32.4 14.5 32.4 32.4v216.2c0 19.5-15.8 35.3-35.3 35.3H59.8c-19.5 0-35.3-15.8-35.3-35.3v-216.2c0-17.9 14.5-32.4 32.4-32.4h89.3z"/><circle cx="82.9" cy="187.75" r="16.4"/><path d="M245 380.95c56.7 0 102.9-46.2 102.9-102.9s-46.2-102.9-102.9-102.9-102.9 46.1-102.9 102.9 46.2 102.9 102.9 102.9zm0-181.3c43.2 0 78.4 35.2 78.4 78.4s-35.2 78.4-78.4 78.4-78.4-35.2-78.4-78.4 35.2-78.4 78.4-78.4z"/></svg>
                        </div>
                    </Flexbox>
                    <Flexbox theme={rowAlignLeft}>
                        <div>
                            <svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328.5 328.5"><path d="M96.333 150.918v-15H55.667V95.251h-15v40.667H0v15h40.667v40.665h15v-40.665zM259.383 185.941H145.858c-38.111 0-69.117 31.006-69.117 69.117v39.928H328.5v-39.928c0-38.11-31.006-69.117-69.117-69.117zm54.117 94.046H91.741v-24.928c0-29.84 24.276-54.117 54.117-54.117h113.524c29.84 0 54.117 24.277 54.117 54.117l.001 24.928zM202.621 178.84c40.066 0 72.662-32.597 72.662-72.663s-32.596-72.663-72.662-72.663-72.663 32.596-72.663 72.663 32.597 72.663 72.663 72.663zm0-130.325c31.795 0 57.662 25.867 57.662 57.663s-25.867 57.663-57.662 57.663c-31.796 0-57.663-25.868-57.663-57.663s25.867-57.663 57.663-57.663z"/></svg>
                        </div>
                    </Flexbox>
                </Flexbox>
                <Flexbox  theme={rowCentered} align="center" style={{width: '100%', height: '100%'}}>
                    <img src={img} style={{width: '100px'}} alt="" />
                </Flexbox>
            </div>
        )
    }
}

export default ActionBar;
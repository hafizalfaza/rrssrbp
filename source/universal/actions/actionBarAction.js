import { CHANGE_ACTION_BAR } from '../actions/constants';

export const changeActionBar = (route) => {
    let actionBarData = {
        leftIcons: ['asd'],
        rightIcons: [],
        title: ''
    }

    if(route === '/'){
        actionBarData.leftIcons = ['camera'];
        actionBarData.rightIcons = ['add-user'];
        actionBarData.title = 'instagram';
    }else if(route === '/profile'){
        actionBarData.leftIcons = ['settings'];
        actionBarData.rightIcons = ['add-user'];
        actionBarData.title = 'Profile';
    }else if(route === '/activity'){
        actionBarData.title = 'Activity';
    }else if(route === '/explore'){
        actionBarData.title = 'Explore';
    }else if(route === '/explore/people'){
        actionBarData.title = 'Discover People';
    }
    
    return {
        type: CHANGE_ACTION_BAR,
        payload: actionBarData
    }
}

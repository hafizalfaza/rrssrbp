import { FETCH_NEWSFEED_ITEMS} from './constants';

export const fetchNewsfeedItems = () => {

  const data = [
    {
      id: '61251y2eug1d919723',
      owner: {
        id: '3',
        username: 'kevinsystrom',
        profile_pic_url: 'http://www.federicociamei.com/kok/storage/cache/images/000/227/kevinsystrom03,medium.1477037548.jpg',
        viewed_stories: true,
      },
      content_url: 'https://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/driving-in-new-zealand.jpg?focalpointx=50&focalpointy=50&height=440&outputformat=jpg&quality=75&source=2757411&transformationsystem=focalpointcrop&width=1280&securitytoken=10500ECA684FDFB552AD68F889927D1C',
      created_at: '19 MINUTES AGO',
      location: 'New Zealand',
      comments_count: 523,
      likes_count: 4456
    },
    {
      id: '12u43hv1234jhrw',
      owner: {
        id: '4',
        username: 'elonmusk',
        profile_pic_url: 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg',
        viewed_stories: false
      },
      content_url: 'https://www.ocregister.com/wp-content/uploads/migration/n9y/n9ymq1-b88162284z.120140807163037000g8745moa.10.jpg?w=535',
      created_at: '50 MINUTES AGO',
      location: 'SpaceX HQ',
      comments_count: 324,
      likes_count: 2173
    },
    {
      id: '761534rgf1d1',
      owner: {
        id: '5',
        username: 'zuck',
        profile_pic_url: 'http://odishasuntimes.com/wp-content/uploads/2018/01/mark-zukerburg.jpg',
        viewed_stories: true
      },
      content_url: 'https://officesnapshots.com/wp-content/uploads/2015/08/facebook-tel-aviv-office-design-12-700x468.jpg',
      created_at: '3 HOURS AGO',
      location: 'Facebook Office',
      comments_count: 86,
      likes_count: 1345
    }
  ]

  return {
      type: FETCH_NEWSFEED_ITEMS,
      payload: data
  }
}
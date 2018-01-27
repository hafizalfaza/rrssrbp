import { FETCH_NEWSFEED_ITEMS} from './constants';

export const fetchNewsfeedItems = () => {

  const data = [
    {
      id: '61251y2eug1d919723',
      owner: {
        id: '3',
        username: 'kevinsystrom',
        profile_pic_url: 'http://www.federicociamei.com/kok/storage/cache/images/000/227/kevinsystrom03,medium.1477037548.jpg'
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
        id: '3',
        username: 'kevinsystrom',
        profile_pic_url: 'http://www.federicociamei.com/kok/storage/cache/images/000/227/kevinsystrom03,medium.1477037548.jpg'
      },
      content_url: 'https://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/driving-in-new-zealand.jpg?focalpointx=50&focalpointy=50&height=440&outputformat=jpg&quality=75&source=2757411&transformationsystem=focalpointcrop&width=1280&securitytoken=10500ECA684FDFB552AD68F889927D1C',
      created_at: '50 MINUTES AGO',
      location: 'New Zealand',
      comments_count: 523,
      likes_count: 4456 
    },
    {
      id: '234uewfbdwffeu2',
      owner: {
        id: '3',
        username: 'kevinsystrom',
        profile_pic_url: 'http://www.federicociamei.com/kok/storage/cache/images/000/227/kevinsystrom03,medium.1477037548.jpg'
      },
      content_url: 'https://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/driving-in-new-zealand.jpg?focalpointx=50&focalpointy=50&height=440&outputformat=jpg&quality=75&source=2757411&transformationsystem=focalpointcrop&width=1280&securitytoken=10500ECA684FDFB552AD68F889927D1C',
      created_at: '3 HOURS AGO',
      location: 'New Zealand',
      comments_count: 523,
      likes_count: 4456 
    }
  ]

  return {
      type: FETCH_NEWSFEED_ITEMS,
      payload: data
  }
}
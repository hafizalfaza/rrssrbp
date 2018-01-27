import { FETCH_STORIES_THUMBS} from './constants';

export const fetchStoriesThumbs = () => {

  const data = [
    {
      id: '1',
      username: 'hafizalfaza',
      profile_pic_url: 'https://i.pinimg.com/736x/da/bb/6d/dabb6d128be236ea790a823210660100.jpg',
      viewed_stories: false,
      stories_count: null,
      isUser: true 
    },
    {
      id: '2',
      username: 'saladinid',
      profile_pic_url: 'https://smirkd.files.wordpress.com/2013/11/nicky_barkla_02.jpg',
      viewed_stories: false,
      stories_count: 2
    },
    {
      id: '5',
      username: 'zuck',
      profile_pic_url: 'http://odishasuntimes.com/wp-content/uploads/2018/01/mark-zukerburg.jpg',
      viewed_stories: true,
      stories_count: 4
    },
    {
      id: '4',
      username: 'elonmusk',
      profile_pic_url: 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg',
      viewed_stories: false,
      stories_count: 1
    },
    {
      id: '3',
      username: 'kevinsystrom',
      profile_pic_url: 'http://www.federicociamei.com/kok/storage/cache/images/000/227/kevinsystrom03,medium.1477037548.jpg',
      viewed_stories: true,
      stories_count: 2
    },
    {
      id: '6',
      username: 'brianchesky',
      profile_pic_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAL4AAAAJDc2YjgxOTY1LTY0YjctNDU1ZS1hZDE1LWU0YzY1NWI1NjBmYg.jpg',
      viewed_stories: true,
      stories_count: 1
    },
    {
      id: '7',
      username: 'billgates',
      profile_pic_url: 'https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/416x416.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813',
      viewed_stories: false,
      stories_count: 5
    },
    {
      id: '8',
      username: 'jeffbezos',
      profile_pic_url: 'https://specials-images.forbesimg.com/imageserve/59d503be31358e542c034e90/416x416.jpg?background=000000&cropX1=9&cropX2=2203&cropY1=73&cropY2=2267',
      viewed_stories: false,
      stories_count: 2
    }
  ]

  return {
      type: FETCH_STORIES_THUMBS,
      payload: data
  }
}
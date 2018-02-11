import { FETCH_NEWSFEED_ITEMS, REVEAL_COMPLETE_COMMENT, LOAD_MORE_COMMENTS} from './constants';
import { trimText } from 'universal/tools/trimText';

export const fetchNewsfeedItems = () => {


  // DUMMY DATA
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
      likes_count: 4456,
      comments: [
        {
          id: 'ugefvwd9ugfqr928et',
          created_at: '2 Minutes ago',
          text: 'Hey this is just a comment',
          owner: {
            id: '1',
            username: 'hafizalfaza'
          }
        },
        {
          id: '9283gfbd9wusdf',
          created_at: '6 Minutes Ago',
          text: 'Vivamus',
          owner: {
            id: '2',
            username: 'saladinid'
          }
        },
        {
          id: '3r3rebwjrewgw',
          created_at: '2 Minutes ago',
          text: 'Hey this is just a comment',
          owner: {
            id: '1',
            username: 'brianchesky'
          }
        },
        {
          id: 'rew7euthjgwwwfh',
          created_at: '6 Minutes Ago',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum, massa at posuere sagittis, mi nisi auctor justo, mollis blandit orci tellus eu neque. Sed accumsan nulla enim, a pellentesque ex accumsan at. Cras at enim purus. Sed et gravida elit. Sed sit amet arcu bibendum, maximus sapien vitae, varius est. Praesent lectus eros, dignissim vel justo rhoncus, eleifend ultrices dolor. Donec ac nunc ac sapien malesuada dignissim. Morbi pellentesque, dui eleifend laoreet dignissim, mauris arcu sodales orci, vel vehicula dui justo nec sem. Aliquam ac lobortis lectus. Nulla nisi felis, varius et cursus eu, volutpat vel orci.',
          owner: {
            id: '2',
            username: 'elonmusk'
          }
        },
        {
          id: 'thkjyrhmfej4ute',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'billgates'
          }
        }
      ],
      has_more_comments: true
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
      likes_count: 2173,
      comments: [
        {
          id: 'ugefvwd9ugfqr928et',
          created_at: '2 Minutes ago',
          text: 'Hey this is just a comment',
          owner: {
            id: '1',
            username: 'hafizalfaza'
          }
        },
        {
          id: '9283gfbd9wusdf',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'saladinid'
          }
        },
        {
          id: '3r3rebwjrewgw',
          created_at: '2 Minutes ago',
          text: 'Hey this is just a comment',
          owner: {
            id: '1',
            username: 'brianchesky'
          }
        },
        {
          id: 'rew7euthjgwwwfh',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'elonmusk'
          }
        },
        {
          id: 'thkjyrhmfej4ute',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'billgates'
          }
        },
        {
          id: '87624rthgrwrg',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'hafizalfaza'
          }
        },
        {
          id: '76iuyrhjefgnwna',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'saladinid'
          }
        },
        {
          id: 'uytrjhfnsmfns',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'zuck'
          }
        },
        {
          id: '9usbf9ofwejbvid',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'hafizalfaza'
          }
        },
        {
          id: '93rugbdosdisfh',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'saladinid'
          }
        },
        {
          id: 'du9wgv9ijxb',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'zuck'
          }
        },
        {
          id: '92uewbfidjbfdabi',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'brianchesky'
          }
        },
        {
          id: 'isdgvwd978w',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'billgates'
          }
        },
        {
          id: '98hfeiwfdabfsi',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'kevinsystrom'
          }
        },
        {
          id: '9udhfbisbfadfoa',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'elonmusk'
          }
        }
      ]
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
      likes_count: 1345,
      comments: [
        {
          id: 'ugefvwd9ugfqr928et',
          created_at: '2 Minutes ago',
          text: 'Hey this is just a comment',
          owner: {
            id: '1',
            username: 'hafizalfaza'
          }
        },
        {
          id: '9283gfbd9wusdf',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'saladinid'
          }
        },
        {
          id: '3r3rebwjrewgw',
          created_at: '2 Minutes ago',
          text: 'Hey this is just a comment',
          owner: {
            id: '1',
            username: 'brianchesky'
          }
        },
        {
          id: 'rew7euthjgwwwfh',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'elonmusk'
          }
        },
        {
          id: 'thkjyrhmfej4ute',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'billgates'
          }
        },
        {
          id: '87624rthgrwrg',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'hafizalfaza'
          }
        },
        {
          id: '76iuyrhjefgnwna',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'saladinid'
          }
        },
        {
          id: 'uytrjhfnsmfns',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'zuck'
          }
        },
        {
          id: '9usbf9ofwejbvid',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'hafizalfaza'
          }
        },
        {
          id: '93rugbdosdisfh',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'saladinid'
          }
        },
        {
          id: 'du9wgv9ijxb',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'zuck'
          }
        },
        {
          id: '92uewbfidjbfdabi',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'brianchesky'
          }
        },
        {
          id: 'isdgvwd978w',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'billgates'
          }
        },
        {
          id: '98hfeiwfdabfsi',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'kevinsystrom'
          }
        },
        {
          id: '9udhfbisbfadfoa',
          created_at: '6 Minutes Ago',
          text: 'Do you know what this is for?',
          owner: {
            id: '2',
            username: 'elonmusk'
          }
        }
      ]
    }
  ]

  // ---------- //


  data.forEach((item) => {
    item.comments.forEach((comment) => {
      const trimmedText = trimText(comment.text, 120);

      if(trimmedText) comment.trimmedText = trimmedText
      
    })
  })

  return {
      type: FETCH_NEWSFEED_ITEMS,
      payload: data
  }
}


export const revealCompleteComment = (data) => {
  return {
    type: REVEAL_COMPLETE_COMMENT,
    payload: data
  }
}


export const loadMoreComments = (data) => {

  data.lazyLoadedComments = [
    {
      id: 'qwijfowjbfoqsnfp',
      created_at: '2 Minutes ago',
      text: 'Aliquam consequat, lectus non auctor dignissim, velit risus lobortis leo, id maximus lorem dui nec lectus. Sed egestas convallis facilisis. Curabitur pulvinar velit eros, quis imperdiet elit finibus nec. Curabitur fringilla ornare arcu auctor porta.',
      owner: {
        id: '1',
        username: 'hafizalfaza'
      }
    },
    {
      id: '1irhoe2ufb0dw',
      created_at: '6 Minutes Ago',
      text: 'Donec ac turpis lectus. Aenean a tristique massa. Etiam suscipit turpis sit amet lorem faucibus, sit amet consequat magna suscipit.',
      owner: {
        id: '2',
        username: 'zuck'
      }
    },
    {
      id: '20eig2ubwdobf',
      created_at: '2 Minutes ago',
      text: 'Suspendisse nulla justo, venenatis vel nunc sed',
      owner: {
        id: '1',
        username: 'brianchesky'
      }
    },
    {
      id: 'dig0idb2-ufghdwfb',
      created_at: '6 Minutes Ago',
      text: 'venenatis malesuada felis',
      owner: {
        id: '2',
        username: 'elonmusk'
      }
    },
    {
      id: '0i2hndwjobodq',
      created_at: '2 Minutes ago',
      text: 'Duis porttitor maximus purus mollis fermentum. Nunc bibendum massa nec quam viverra, nec tincidunt metus rutrum.',
      owner: {
        id: '1',
        username: 'hafizalfaza'
      }
    },
    {
      id: '2ei0h0ewndwjknfkwd',
      created_at: '6 Minutes Ago',
      text: 'In ultricies ut felis sed ornare. Praesent a nulla nisi. Cras eu semper ex, eu eleifend dolor. Integer id volutpat erat, et ornare enim.',
      owner: {
        id: '2',
        username: 'zuck'
      }
    },
    {
      id: 'dpisnfo2ndfo2n0',
      created_at: '2 Minutes ago',
      text: 'Suspendisse luctus orci turpis',
      owner: {
        id: '1',
        username: 'brianchesky'
      }
    },
    {
      id: '02ehf9ewjbfdijsbfiw',
      created_at: '6 Minutes Ago',
      text: 'oqw dsdsadd sqdak asdkasnd owqdwq dkasn dqid asdjnas ',
      owner: {
        id: '2',
        username: 'elonmusk'
      }
    },
    {
      id: 'u2bfjwfbwdifjbo',
      created_at: '2 Minutes ago',
      text: 'ac interdum lectus pulvinar sed. Mauris commodo tincidunt enim, quis semper libero auctor ut.',
      owner: {
        id: '1',
        username: 'brianchesky'
      }
    },
    {
      id: '0sihf0nfo2nf',
      created_at: '6 Minutes Ago',
      text: 'Sed finibus, sapien in volutpat convallis, est nunc tincidunt nisi, a tempor mauris odio eget ipsum. Nulla nec semper justo, ut porttitor mauris.',
      owner: {
        id: '2',
        username: 'elonmusk'
      }
    },
    {
      id: 'sjkbdwih0i2h0',
      created_at: '2 Minutes ago',
      text: 'Integer fermentum',
      owner: {
        id: '1',
        username: 'hafizalfaza'
      }
    },
    {
      id: '12iwrhewojfbdwikfj',
      created_at: '6 Minutes Ago',
      text: 'nisl id eros rutrum semper. Curabitur interdum a lorem lobortis vulputate. Nulla id enim tincidunt, vestibulum neque vitae, tempor metus.',
      owner: {
        id: '2',
        username: 'zuck'
      }
    },
    {
      id: 'wo1ijbfjwfkjdf',
      created_at: '2 Minutes ago',
      text: 'Curabitur id dolor nisi.',
      owner: {
        id: '1',
        username: 'brianchesky'
      }
    },
    {
      id: '0i3hdnfojwboj',
      created_at: '6 Minutes Ago',
      text: 'Sed semper leo sed faucibus facilisis. Ut ultricies lobortis fermentum. Curabitur eget iaculis odio, vel ornare metus. Etiam accumsan enim urna, et mattis orci accumsan feugiat.',
      owner: {
        id: '2',
        username: 'elonmusk'
      }
    },
    {
      id: '2wkondwofn0d2n2',
      created_at: '2 Minutes ago',
      text: 'Cras imperdiet dui a varius bibendum',
      owner: {
        id: '1',
        username: 'hafizalfaza'
      }
    },
    {
      id: 'kdgno2gn2eg2',
      created_at: '6 Minutes Ago',
      text: 'Integer nec turpis imperdiet, semper nisi quis, gravida ipsum. Fusce pellentesque id ex vel tincidunt. Donec ut risus id metus sollicitudin dapibus in eget mi',
      owner: {
        id: '2',
        username: 'zuck'
      }
    },
    {
      id: 'dsjdwfnwfd0fi20f',
      created_at: '2 Minutes ago',
      text: 'Sed dapibus accumsan eleifend',
      owner: {
        id: '1',
        username: 'brianchesky'
      }
    },
    {
      id: 'dsnkbvdbfowh0',
      created_at: '6 Minutes Ago',
      text: 'Mauris feugiat facilisis dolor, ut ullamcorper turpis imperdiet ac.',
      owner: {
        id: '2',
        username: 'elonmusk'
      }
    },
    {
      id: 'asdaskdbdo2bp',
      created_at: '2 Minutes ago',
      text: 'Pellentesque rutrum sodales sapien eu pharetra. Nulla facilisi. Vestibulum accumsan metus tellus, non tempor arcu lacinia eu. Phasellus lacinia orci nec',
      owner: {
        id: '1',
        username: 'brianchesky'
      }
    },
    {
      id: 'epf2nfpe2nfpnwdojf',
      created_at: '6 Minutes Ago',
      text: 'Morbi a ligula',
      owner: {
        id: '2',
        username: 'elonmusk'
      }
    }
  ]

  data.has_more_comments = false;

  return {
    type: LOAD_MORE_COMMENTS,
    payload: data
  }
}
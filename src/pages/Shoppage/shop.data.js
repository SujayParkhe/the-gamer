const SHOP_DATA =  [
    {
        id: 1,
        title: 'Pc Games',
        routeName: 'pc-games',
        items: [
          {
            id: 1,
            name: 'GTA V',
            imageUrl: 'https://www.rockstargames.com/V/img/global/order/GTAV-PC.jpg',
            price: 25
          },
          {
            id: 2,
            name: 'Read Dead Redemption 2',
            imageUrl: 'https://mms.businesswire.com/media/20191105005403/en/754421/5/rdr2.jpg?download=1',
            price: 18
          },
          {
            id: 3,
            name: 'Hitman 3',
            imageUrl: 'https://static.raru.co.za/cover/2020/11/20/8393239-l.jpg?v=1605878723',
            price: 35
          },
          {
            id: 4,
            name: 'BattleField V',
            imageUrl: 'https://media.contentapi.ea.com/content/dam/bf/common/bfv-definitive-edition-pc-fpo.jpg',
            price: 25
          },
          {
            id: 5,
            name: 'Call of Duty: Modern Warfare',
            imageUrl: 'https://media.gamestop.com/i/gamestop/11097309/Call-of-Duty-Modern-Warfare?$pdp$',
            price: 18
          },
          {
            id: 6,
            name: 'Watch Dogs: Legion',
            imageUrl: 'https://cdn2.unrealengine.com/watchdogs-legion-store-portrait-1200x1600-1200x1600-338400621.jpg',
            price: 14
          },
          {
            id: 7,
            name: 'Counter Strike: Global Offensive',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81L8-mjNlrL._SL1500_.jpg',
            price: 18
          },
          {
            id: 8,
            name: 'Assassin Creed:  Valhalla',
            imageUrl: 'https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/en_US/dw44a8a154/images/large/5e84a5065cdf9a21c0b4e737.jpg',
            price: 14
          },
          {
            id: 9,
            name: 'Forza Horizon 4',
            imageUrl: 'https://store-images.s-microsoft.com/image/apps.36093.14339303838396367.725ab8dd-f8b7-4a29-a351-45ebd5d66edd.ba2a2523-7f32-4f92-a83d-26097b7b6ca1',
            price: 16
          }
        ]
      },
      {
        id: 2,
        title: 'PS Games',
        routeName: 'ps-games',
        items: [
          {
            id: 10,
            name: 'Days Gone',
            imageUrl: 'https://i.pinimg.com/originals/b8/04/e9/b804e92d7040fe20456917156b400f9c.jpg',
            price: 220
          },
          {
            id: 11,
            name: 'Last of Us 2',
            imageUrl: 'https://m.media-amazon.com/images/I/71T0ogpJS1L.jpg',
            price: 280
          },
          {
            id: 12,
            name: 'WWE 2k21',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24096bd6-5618-4ef1-90dc-62705654a973/de3ojub-e2b9c87c-3f32-4332-ac91-95f626af4df9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjQwOTZiZDYtNTYxOC00ZWYxLTkwZGMtNjI3MDU2NTRhOTczXC9kZTNvanViLWUyYjljODdjLTNmMzItNDMzMi1hYzkxLTk1ZjYyNmFmNGRmOS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.DomdHt6K13fGgdB92VjxhNOnHXzf36-MRGgGFRyx-1U',
            price: 110
          },
          {
            id: 13,
            name: 'FIFA 2020',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81%2BomykvrIL._SX425_.jpg',
            price: 160
          },
          {
            id: 14,
            name: 'NBA 2k20',
            imageUrl: 'https://m.media-amazon.com/images/I/91QoJvaONFL._SX425_.jpg',
            price: 160
          },
          {
            id: 15,
            name: 'Uncharted 4',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71hcX5qwKNL._SL1000_.jpg',
            price: 160
          },
          {
            id: 16,
            name: 'Uncharted The Lost Legacy',
            imageUrl: 'https://static.wikia.nocookie.net/uncharted/images/7/7c/The_Lost_Legacy_front_cover_%28US%29.png/revision/latest?cb=20200614225556',
            price: 190
          },
          {
            id: 17,
            name: 'God of War',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmVjMzkyYWMtNDNhNi00ZWI3LTgxNGUtODRkMWYxNjZmNDI5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
            price: 200
          }
        ]
      },
      {
        id: 3,
        title: 'Xbox Games',
        routeName: 'xbox-games',
        items: [
          {
            id: 18,
            name: 'Fortnite',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81USj-o7CvL._SX569_.jpg',
            price: 125
          },
          {
            id: 19,
            name: 'Halo 5',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71NuYs5nEvL._SX385_.jpg',
            price: 90
          },
          {
            id: 20,
            name: 'Mine Craft',
            imageUrl: 'https://rukminim1.flixcart.com/image/416/416/kar44280/code-in-the-box-game/q/z/8/xbox-one-minecraft-standard-edition-original-imafs9bbgesjfx8s.jpeg?q=70',
            price: 90
          },
          {
            id: 21,
            name: 'Gears 5',
            imageUrl: 'https://ds393qgzrxwzn.cloudfront.net/resize/m500x500/cat1/img/images/0/gfMvD9h2sd.jpg',
            price: 165
          },
          {
            id: 22,
            name: 'Wolfenstein',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81mw0WS5qIL._SX522_.jpg',
            price: 185
          }
        ]
      },
      {
        id: 4,
        title: 'Gaming Accessories',
        routeName: 'accessories',
        items: [
          {
            id: 23,
            name: 'AorusK1 gaming mechanical keyboard',
            imageUrl: 'https://www.gigabyte.com/FileUpload/global/news/1796/o202004241821490606.jpg',
            price: 25
          },
          {
            id: 24,
            name: 'Glorious Model-O Gaming Mouse',
            imageUrl: 'https://www.cnet.com/a/img/k5CUGXTdQ99lqSkv43_gGfS3ZSE=/1200x630/2021/03/12/b3f1bae0-a41e-474e-af92-0c6be9a4db94/glorious-model-o-wired-gaming-mouse.jpg',
            price: 20
          },
          {
            id: 25,
            name: 'Corsair Gaming Headsets',
            imageUrl: 'https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2018/04/Best-Gaming-Headsets-gear-patrol-full-lead.jpg',
            price: 80
          },
          {
            id: 26,
            name: 'Razer Firefly v2 Mousepad',
            imageUrl: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/1_Razer_Firefly_V2.jpg',
            price: 80
          },
          {
            id: 27,
            name: 'Logitech g29 driving wheel',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/615ryXpNQLL._SL1500_.jpg',
            price: 45
          },
          {
            id: 28,
            name: 'Logitech c922 webcam',
            imageUrl: 'https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/webcams/c922/c922-social-og-image.png?v=1',
            price: 135
          },
          {
            id: 29,
            name: 'Blue Microphone',
            imageUrl: 'https://www.pcgamesn.com/wp-content/uploads/2021/02/Best-gaming-micriphones.jpg',
            price: 20
          }
        ]
      },
      {
        id: 5,
        title: 'Pc parts',
        routeName: 'pc-parts',
        items: [
          {
            id: 30,
            name: 'Intel i9-10900k',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61aMmen0cFL._AC_SL1099_.jpg',
            price: 325
          },
          {
            id: 31,
            name: 'Amd Ryzen ThreadRipper',
            imageUrl: 'https://pchub.co.in/wp-content/uploads/2020/10/19-113-619-V07.jpg',
            price: 20
          },
          {
            id: 32,
            name: 'Tridentz Royal Ram',
            imageUrl: 'https://static.techspot.com/images2/news/ts3_thumbs/2018/11/2018-11-20-ts3_thumbs-902.png',
            price: 25
          },
          {
            id: 33,
            name: 'Samsung 860 evo SSD',
            imageUrl: 'https://cdn.mos.cms.futurecdn.net/dnFaLpjnZVtiHUmQ8ZLhE.jpg',
            price: 25
          },
          {
            id: 34,
            name: 'Aorus AC300W Case',
            imageUrl: 'https://www.gigabyte.com/FileUpload/Global/KeyFeature/765/img/product/AMP/0013.jpg',
            price: 40
          },
          {
            id: 35,
            name: 'Nvidia 3090 Ge-force RTX',
            imageUrl: 'https://cdn.mos.cms.futurecdn.net/UDEsF2XVy2nBbEzhvpta2Z.jpg',
            price: 25
          }
        ]
      }
];

export default SHOP_DATA;
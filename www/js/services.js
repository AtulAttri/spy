angular.module('spy.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 707,
    name: 'Shashidhar',
    calling_for: 'Relaxo',
    face: 'img/shashi.jpg'
  }, {
    id: 708,
    name: 'Pornima',
      calling_for: 'Relaxo',
    face: 'http://icons.iconarchive.com/icons/iloveicons.ru/browser-girl/256/browser-girl-firefox-icon.png'
  },
      {
          id: 711,
          name: 'Ziaba',
          calling_for: 'Relaxo',
          face: 'http://www.iconarchive.com/download/i38856/raindropmemory/artificial-girl/Nocchi.ico'
      },
      {
    id: 901,
    name: 'Aditya',
      calling_for: 'Blaupunkt',
    face: 'img/aditya.png'
  }, {
    id: 713,
    name: 'Chethan',
      calling_for: 'Relaxo',
    face: 'img/chethan.png'
  }, {
    id: 803,
    name: 'Kiran',
     calling_for: 'SEEP',
    face: 'img/kiran.png'
  },
      {
          id: 717,
          name: 'Inderjit',
          calling_for: 'Relaxo',
          face: 'img/inderjeet.png'
      },
      {
          id: 514,
          name: 'Saraswati',
          calling_for: 'Grass & Puma',
          face: 'http://www.fancyicons.com/free-icons/101/monster-inc/png/256/boo_256.png'
      },
      {
     id: 718,
     name: 'Kalpa',
     calling_for: 'Relaxo',
     face: 'http://evolution.haifa.ac.il/images/stories/woman.png'
      } ,
      {
          id: 802,
          name: 'Divya',
          calling_for: 'SEEP',
          face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/3d-glossy-pink-orbs-icons-people-things/108033-3d-glossy-pink-orb-icon-people-things-people-child3.png'
      }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

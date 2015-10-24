angular.module('whatsapp.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
    {
      _id: 0,
      name: 'Jesús Conde',
      picture: 'https://pbs.twimg.com/profile_images/1001601612/005_bigger.jpg',
      lastMessage: {
        text: 'Caminando entre Códigos',
        timestamp: moment().subtract(1, 'horas')
      }
    },
    {
      _id: 1,
      name: 'Hub Spot',
      picture: 'https://pbs.twimg.com/profile_images/626105757004492800/CdxLMoHH_400x400.png',
      lastMessage: {
        text: 'Hola, soy yo',
        timestamp: moment().subtract(2, 'horas')
      }
    },
    {
      _id: 2,
      name: 'Lisa Collins',
      picture: 'https://pbs.twimg.com/profile_images/587606033222082561/c53Lkbrz.jpg',
      lastMessage: {
        text: 'En medio del puente',
        timestamp: moment().subtract(1, 'días')
      }
    },
    {
      _id: 3,
      name: 'Ivo Spigel',
      picture: 'https://pbs.twimg.com/profile_images/572380074209316864/mlzFGcN8.jpeg',
      lastMessage: {
        text: 'Lanzando mi Startup',
        timestamp: moment().subtract(4, 'días')
      }
    },
    {
      _id: 4,
      name: 'Loly Daskall',
      picture: 'https://pbs.twimg.com/profile_images/127105431/Lolly2_400x400.jpg',
      lastMessage: {
        text: 'Enciende las luces.',
        timestamp: moment().subtract(2, 'semanas')
      }
    }
  ];


  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i]._id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

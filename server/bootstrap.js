if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Chats.find().count() === 0) {
      Messages.remove({});

      var messages = [
        {
          text: 'Caminando entre Códigos',
          timestamp: moment().subtract(1, 'hours').toDate()
        },
        {
          text: 'Hola, soy yo',
          timestamp: moment().subtract(2, 'hours').toDate()
        },
        {
          text: 'En medio del puente',
          timestamp: moment().subtract(1, 'days').toDate()
        },
        {
          text: 'Lanzando mi startup',
          timestamp: moment().subtract(4, 'days').toDate()
        },
        {
          text: 'Enciende las luces',
          timestamp: moment().subtract(2, 'weeks').toDate()
        }
      ];

      messages.forEach(m => Messages.insert(m));

      var chats = [
        {
          name: 'Jesús Conde',
      picture: 'https://pbs.twimg.com/profile_images/1001601612/005_bigger.jpg'
        },
        {
          name: 'Hub Spot',
      picture: 'https://pbs.twimg.com/profile_images/626105757004492800/CdxLMoHH_400x400.png'
        },
        {
           name: 'Lisa Collins',
      picture: 'https://pbs.twimg.com/profile_images/587606033222082561/c53Lkbrz.jpg'
        },
        {
          name: 'Ivo Spigel',
      picture: 'https://pbs.twimg.com/profile_images/572380074209316864/mlzFGcN8.jpeg'
        },
        {
         name: 'Loly Daskall',
      picture: 'https://pbs.twimg.com/profile_images/127105431/Lolly2_400x400.jpg'
        }
      ];

      chats.forEach(chat => {
        let message = Messages.findOne({ chatId: { $exists: false } });
      chat.lastMessage = message;
      let chatId = Chats.insert(chat);
      Messages.update(message._id, { $set: { chatId: chatId } })
    });
  }
});
}
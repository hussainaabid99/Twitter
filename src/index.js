const express = require('express');
const connect = require('./config/database');

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

const app = express();

app.listen(3000, async () => {
          console.log('Server started');
          await connect();
          console.log('Mongo db connected');
          // const tweet = await Tweet.create({
          //           content: 'Third tweet',

          // });

          // const tweets = await Tweet.find({ userEmail: 'a@b.com' });

          const tweetRepo = new TweetRepository();
          const tweet = await tweetRepo.getWithComments('64f05d6dcb448d97715f7d08');
          console.log(tweet);
}); 
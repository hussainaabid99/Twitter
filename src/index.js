import express from 'express';
import { connect } from './config/database.js';
import apiRoutes from './routes/index.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

import { UserRepository, TweetRepository } from './repository/index.js'
import LikeService from './service/like-service.js';

app.listen(3000, async () => {
          console.log('Server started');
          await connect();
          console.log('Mongo db connected');

          const userRepo = new UserRepository();
          const tweetRepo = new TweetRepository();
          const tweets = await tweetRepo.getAll(0, 10);


          const users = await userRepo.getAll();

          const likeService = new LikeService();
          await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id);
});   
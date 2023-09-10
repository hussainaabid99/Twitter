import TweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";

jest.mock('../../src/models/tweet.js');

describe('Create tweet test', () => {

          test('should create a new tweet and return it', async () => {
                    const data = {
                              content: 'Testing tweet'
                    }
                    const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
                              return { ...data, createdAt: '2022-02-12', updatedAt: '2022-02-12' }
                    })
                    const tweetRepository = new TweetRepository();
                    const tweet = await tweetRepository.create(data);

                    expect(spy).toHaveBeenCalled();
                    expect(tweet.content).toBe(data.content);
                    expect(tweet.createdAt).toBeDefined();
          });

          test('should not create a tweet and throw exception', async () => {
                    const data = {
                              content: 'Testing tweet'
                    }
                    const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
                              throw new Error('Something went wrong');
                    });
                    const tweetRepository = new TweetRepository();
                    const tweet = await tweetRepository.create(data).catch(err => {
                              expect(err).toBeInstanceOf(Error);
                              expect(err.message).toBe('Something went wrong');
                    });
          })

});

describe('Get all tweets tests', () => {

          test('testing limit for get all', async () => {

                    const data = {
                              content: 'Testing tweet'
                    }
                    const tweetsArray = [{ ...data, createdAt: '2022-02-12', updatedAt: '2022-02-12' }, { ...data, createdAt: '2022-02-12', updatedAt: '2022-02-12' }, { ...data, createdAt: '2022-02-12', updatedAt: '2022-02-12' }, { ...data, createdAt: '2022-02-12', updatedAt: '2022-02-12' }];

                    const findResponse = { tweetsArray };
                    findResponse.limit = jest.fn((limit) => findResponse.tweetsArray.slice(0, limit));
                    findResponse.skip = jest.fn((offset) => findResponse);
                    const spy = jest.spyOn(Tweet, 'find').mockImplementation(() => {
                              return findResponse;
                    });
                    const tweetRepository = new TweetRepository();
                    const tweets = await tweetRepository.getAll(0, 2);
                    expect(spy).toHaveBeenCalled();
                    expect(tweets).toHaveLength(2);
          });

});

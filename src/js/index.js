import hackerNewsApi from './models/hackerNewsApi';

hackerNewsApi.getNewStoryIds().then(ids => console.log(ids));

import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'

Meteor.methods({
  getContent(name) {
    if (typeof name === 'string') {
      name = name.trim();
      if (name !== '') {
        try {
          const result = HTTP.call('GET', `http://127.0.0.1:4000/content/${name}`);
          const data = result.data;
          return data.message;
        } catch (err) {
          console.error('[Error/methods:getContent]', err);
        }
      }
    }
    return 'Error happens';
  }
});
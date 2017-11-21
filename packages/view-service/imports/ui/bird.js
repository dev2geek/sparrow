import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Birds } from '../api/birds.js';

import './bird.html';

Template.bird.events({
  'click .silent'() {
    Birds.update(this._id, {
      $set: { checked: !this.checked },
    });
  },
  'click .quit'() {
    Birds.remove(this._id);
  },
  'click .tweet'() {
    const name = this.text;
    Meteor.call('getContent', name, (err, res) => {
      let message;
      if (err) {
        message = `Oops, error happened, detail: ${err}.`;
      } else {
        message = `${name} says: ${res}`;
      }

      alert(message);
    });
  },
});

Template.bird.helpers({
  birds() {
    const instance = Template.instance();
    if (instance.state.get('hideSilent')) {
      return Birds.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    return Birds.find({}, { sort: { createdAt: -1 } });
  },
  isForbidden() {
    const instance = Template.instance();
    return instance.data.checked ? 'disabled' : '';
  },
});
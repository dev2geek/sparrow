import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Birds } from '../api/birds.js';

import './bird.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});

Template.body.helpers({
  birds() {
    const instance = Template.instance();
    if (instance.state.get('hideSilent')) {
      return Birds.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    return Birds.find({}, { sort: { createdAt: -1 } });
  },
  tweetableCount() {
    return Birds.find({ checked: { $ne: true } }).count();
  },
});

Template.body.events({
  'submit .new-bird'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a bird into the collection
    Birds.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
  'change .hide-silent input'(event, instance) {
    instance.state.set('hideSilent', event.target.checked);
  },
});
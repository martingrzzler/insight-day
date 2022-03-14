import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SubscriberListComponent extends Component {
  @tracked
  subscribers = [];

  constructor() {
    super(...arguments);

    // TODO: subscribers should be fetched from the API
    this.subscribers = [
      {
        firstName: 'John',
        lastName: 'Doe',
        gender: 'm',
        email: 'john.doe@mail.com',
        subscribed: true
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        gender: 'f',
        email: 'jane.doe@mail.com',
        subscribed: true
      },
      {
        firstName: 'Mary',
        lastName: 'Rose',
        gender: 'f',
        email: 'mary.rose@mail.com',
        subscribed: false
      },
      {
        firstName: 'Paul',
        lastName: 'Smith',
        gender: 'm',
        email: 'paul.smith@mail.com',
        subscribed: true
      }
    ];
  }

  @action
  handleAddButton() {
    // TODO: handle click on button
    console.log('clicked add button');
  }

  @action
  handleShowActions() {
    // TODO: handle click on button
    console.log('clicked show actions');
  }
}

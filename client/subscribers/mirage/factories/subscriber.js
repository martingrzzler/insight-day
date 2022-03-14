import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  email: () => faker.internet.email(),
  firstName: () => faker.name.firstName(),
  lastName: () => faker.name.lastName(),
  gender: () => faker.random.arrayElement(['m', 'f']),
  subscribed: () => faker.random.boolean()
});

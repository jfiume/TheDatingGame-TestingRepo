import _ from 'lodash';
import faker from 'faker';
import { DB, Server } from 'mongodb';

const MINIMUM_USERS = 10;
const USERS_TO_ADD = 50;

let usersCollection;
const db = new Db('theDatingGame', new Server('localhost', 27017));
db.open()
  .then(() => {
    usersCollection = db.collection('users');
    return usersCollection.count({});
  })
  .then(count => {
    if (count < MINIMUM_USERS) {
      const users = _.times(USERS_TO_ADD, () => createUser());

      usersCollection.insertMany(users);
    }
  })
  .catch(e => console.log(e));

  function createUser() {
  return {
    oauth_id: faker.random.uuid,
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    gender: 'male',
    age: randomBetween(18, 65),
    age_range_low: randomBetween(18, 65),
    age_range_high: randomBetween(18, 65),
    location: faker.address.city(),
    occupation: faker.name.jobType(),
    education: faker.lorem.words(),
    about: faker.lorem.paragraph,
    interested_in: 'female'
  };
}

require('dotenv').config({ path: '.env.test' });

module.exports = {
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'node',
};

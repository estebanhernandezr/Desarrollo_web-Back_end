const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = {
    env: {
        REACT_APP_URL: process.env.REACT_APP_URL,
    }
};
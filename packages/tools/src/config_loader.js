const dotenv = require('dotenv');
const path = require('path');

const loader = (folderPath) => {

    const result = dotenv.config({
        path: path.resolve(folderPath, `.env.${process.env.NODE_ENV}`),
        encoding: 'utf-8'
    });

    if (result.error) {
      throw result.error;
    }

    return result.parsed;
}

module.exports = loader;

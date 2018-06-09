import * as async from 'async'
import * as models from '../models'


async.eachSeries(Object.keys(models), (modelName, callback) => {
  if ([ 'default' ].indexOf(modelName) < 0) {
    console.log(models);
    console.log(modelName);
    console.log(models[ modelName ]);
    models[ modelName ].sync({ force: true })
      .then(() => callback())
      .catch((err) => callback(err));
  } else {
    callback();
  }
}, (err) => {
  if (err) {
    console.error('Unable to create database');
    console.error(`If you have constraints error, maybe, you should recreate the database !
        Try to look at the reCreateDatabase method or re-create-database.ts script;`);
    console.error(err);
  } else {
    console.info('Database created');
  }
});
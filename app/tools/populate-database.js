import * as async from 'async';
import * as data from '../../data';
import * as models from '../models';


async.eachSeries(Object.keys(models), (modelName, callback) => {
  const table = modelName.toString();
  if (Array.isArray(data[ table ]) && data[ table ].length > 0) {
    models[ modelName ].bulkCreate(data[ table ])
      .then(() => {
        console.log(`${table} : OK`);
        callback();
      })
      .catch((err) => {
        console.log(err);
        console.log(`${table} : KO`);
      });
  }
}, () => {
});
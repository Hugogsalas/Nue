import {connect} from 'mongoose';

export const run = async () => {
  await connect('mongodb://localhost:27017/cleanEnergy');
};

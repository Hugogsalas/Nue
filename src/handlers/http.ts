import express from 'express';
import cors from 'cors';
import 'graphql-import-node';
import {graphqlHTTP} from 'express-graphql';
import {buildSchema, print} from 'graphql';
import {resolver, types} from '../graphql/root'
import {run} from '../modules/db';
import {errorManager} from '../controllers/errors/errors';

const app = express();

const schema = buildSchema(print(types));

app.use(cors());

app.set('key', process.env.secretKey);


app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
    customFormatErrorFn: errorManager,
  }),
  );
app.listen(8080, async () => {
  console.log(`Server started at http://localhost:8080`);
  await run();
});

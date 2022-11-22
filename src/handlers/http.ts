import express from 'express';
import cors from 'cors';
import 'graphql-import-node';
import {graphqlHTTP} from 'express-graphql';
import {buildSchema} from 'graphql';
import {resolver} from '../graphql/user/resolver';
import schemaTypes from '../graphql/user/schema.graphql';
import {run} from '../modules/db';
import {errorManager} from '../controllers/errors/errors';

if (schemaTypes.loc) {
  const app = express();

  const schema = buildSchema(schemaTypes.loc.source.body);

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
}

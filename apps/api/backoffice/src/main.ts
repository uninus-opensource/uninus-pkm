/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext } from '@psu/trpc-server';
import { appRouter } from '@psu/trpc-router';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api-backoffice!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

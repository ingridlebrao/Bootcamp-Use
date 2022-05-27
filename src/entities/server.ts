import express from 'express';
import AppDataSource from './config/data-source';
import env from './config/enviroments-variables';
import routes from './routes';

const PORT = env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(routes);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

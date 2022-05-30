/* eslint-disable new-cap */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
import { NextFunction, Request, Response, Router } from 'express';
import { AppDataSource } from './config/data-source';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';

const routes = Router();

const categoryController = new CategoryController(
  new CategoryService(AppDataSource),
);

routes.get('/', (request: Request, response: Response) => {
  return response.json({ status: 'success', version: '1.0.0' }).status(200);
});

routes.get(
  '/categories',
  (request: Request, response: Response, next: NextFunction) => {
    categoryController.getAll(request, response).catch((error: Error) => {
      next(error);
    });
  },
);

routes.post(
  '/categories',
  [
    body('name', "Valor 'name' não pode ser vazio!").isString(),
    body('name', "O campo 'name' é obrigatório!")
      .not()
      .isEmpty({ ignore_whitespace: true }),
  ],

  (request: Request, response: Response, next: NextFunction) => {
    categoryController.create(request, response).catch((error: Error) => {
      next(error);
    });
  },
);

routes.get(
  '/categories/:id',
  (request: Request, response: Response, next: NextFunction) => {
    categoryController.show(request, response).catch((error: Error) => {
      next(error);
    });
  },
);

routes.put(
  '/categories/:id',
  (request: Request, response: Response, next: NextFunction) => {
    categoryController.update(request, response).catch((error: Error) => {
      next(error);
    });
  },
);

routes.delete(
  '/categories/:id',
  (request: Request, response: Response, next: NextFunction) => {
    categoryController.delete(request, response).catch((error: Error) => {
      next(error);
    });
  },
);

export { routes };

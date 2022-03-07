import express from 'express';
const router = express.Router();
import { FavoritesController, FilmController } from '../controllers';
import { use } from '../error/tryAndCatch';

router.get('/films', use(FilmController.get));
router.get('/films/:id', use(FilmController.getId));
router.get('/favorites', use(FavoritesController.get));
router.get('/favorites/:id', use(FavoritesController.getId));
router.get('/favorites/:id/file', use(FavoritesController.getIdFile));
router.post('/favorites', use(FavoritesController.post));


export default router
import express from 'express';
const router = express.Router();
import { FavoritesController, FilmController } from '../controllers';

router.get('/films', FilmController.get);
router.get('/films/:id', FilmController.getId);
router.get('/favorites', FavoritesController.get);
router.get('/favorites/:id', FavoritesController.getId);
router.get('/favorites/:id/file', FavoritesController.getIdFile);
router.post('/favorites', FavoritesController.post);


export default router
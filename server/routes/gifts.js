import express from 'express';
import GiftsController from '../controllers/gifts.js';

const router = express.Router();

router.get('/', GiftsController.getGifts);
router.get('/:id', GiftsController.getGiftById);
router.post('/', GiftsController.createGift);
router.put('/:id', GiftsController.updateGift);
router.delete('/:id', GiftsController.deleteGift);

export default router;

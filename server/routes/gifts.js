import express from 'express';
import GiftsController from '../controllers/gifts.js'

const router = express.Router();

router.get('/', GiftsController.getGifts);

router.get('/:giftId', GiftsController.getGiftById);

router.post('/', GiftsController.createGift)

router.patch('/:id', GiftsController.updateGift);

router.delete('/:id', GiftsController.deleteGift);

export default router;

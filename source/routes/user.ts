import express from 'express';
import controller from '../controllers/user';
import extractJWT from '../middleware/extractJWT';

const router = express.Router();

router.get('/validate',extractJWT, controller.validatetoken);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/get/all', controller.getAllusers);
router.post('/deleteuser', controller.deleteUser);
export default{} = router;
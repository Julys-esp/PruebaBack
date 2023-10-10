import express from 'express';
const router=express.Router();
import {searchGoogleAcademic} from '../controller/searchScholarGoogle.js'


router.get('/scholar', searchGoogleAcademic);
export default router;
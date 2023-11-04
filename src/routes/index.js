import express from 'express';
const router=express.Router();
import {searchGoogleAcademic} from '../controller/searchScholarGoogle.js'
import  {searchVideos}  from '../controller/searchVideos.js';




router.get('/scholar', searchGoogleAcademic);
router.get('/youtube', searchVideos);



export default router;
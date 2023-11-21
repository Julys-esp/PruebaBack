import express from 'express';
const router=express.Router();
import {searchGoogleAcademic} from '../controller/searchScholarGoogle.js'
import  {searchVideos}  from '../controller/searchVideos.js';
import createFol from '../controller/folderPost.js';
import addLinkToFolder from '../controller/linkPut.js';




router.get('/scholar', searchGoogleAcademic);
router.get('/youtube', searchVideos);
router.post('/folder', createFol);
router.put('/link', addLinkToFolder);



export default router;
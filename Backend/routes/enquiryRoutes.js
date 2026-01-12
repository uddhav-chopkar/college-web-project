import { enquiries, getEnquiryData } from '../controller/enquiryController.js'
import express from 'express'

const router = express.Router()

router.post('/enquiry', enquiries)
router.get('/allenquiries', getEnquiryData)
export default router
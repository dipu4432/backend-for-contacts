import express from 'express';
import { getContacts } from '../controllers/contactController.js';
import { createContact } from '../controllers/contactController.js';
import { getContact } from '../controllers/contactController.js';
import { updateContact } from '../controllers/contactController.js';
import { deleteContact } from '../controllers/contactController.js';

const router = express.Router();

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export default router;
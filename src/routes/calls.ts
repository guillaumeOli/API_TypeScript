import {Router} from 'express';
import { getCallById, getCalls } from '../handlers/calls';
import { getUsers,getUserMetadata, getUserSummary, getUserTranscript } from '../handlers/users';

const router = Router();

router.get('/', getCalls);

router.get('/:id', getCallById);

export default router;
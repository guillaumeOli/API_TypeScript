import {Router} from 'express';
import { getUsers,getUserMetadata, getUserSummary, getUserTranscript } from '../handlers/users';

const router = Router();

router.get('/', getUsers);

router.get('/:id/metadata', getUserMetadata);
router.get('/:id/transcripts', getUserSummary);
router.get('/:id/summaries', getUserTranscript);

export default router;
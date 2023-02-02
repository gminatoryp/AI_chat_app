import express from 'expres';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

//creating an instance
const router = express.Router();
import * as dotenv from 'dotenv';

dotenv.config();

export const port=process.env.PORT;
export const apiKey = process.env.API_KEY;
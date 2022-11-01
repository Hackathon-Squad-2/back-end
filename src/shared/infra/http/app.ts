import express from 'express';
import swaggerUI from 'swagger-ui-express';

import apiSchema from '../../../../docs/api.schema.json';

export const app = express();

app.use(express.json());
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(apiSchema));

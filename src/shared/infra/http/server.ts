import { app } from './app';

app.listen(process.env.PORT || 3000, () =>
  console.log('Server running on Port 3000!')
);

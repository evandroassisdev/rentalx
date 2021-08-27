import express from 'express';

const app = express();

app.use(express.json())

app.get('/', (request, response) => {
  response.json('Hello');
});

app.post('/courses', (request, response) => {
  const { name } = request.body;

  return response.json({ name });
});

app.listen(3333, () => console.log('Server is running port 3333!!!'));

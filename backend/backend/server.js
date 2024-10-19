import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//   res.send('server is ready')
// })

// get a list of jokes

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      context: 'this is so funny'
    },
    {
      id: 2,
      title: 'Another joke',
      context: 'this is so funny too'
    }
  ];
  res.send(jokes)
})



const port =  process.env.PORT || 1234

app.listen(port, () => {
  console.log(`Serve at https://localhost:${port}`);
  
})
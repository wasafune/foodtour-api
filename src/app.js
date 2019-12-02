const express = require('express')
const cors = require('cors')

const {
  PORT, ALLOWED_URL,
}

const app = express()


const corsOptions = {
  origin: ALLOWED_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

const controllers = require('./controllers')

app.use('/search', controllers.search)


app.get('*', (req, res) => res.status(400).send('Bad!'))

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))

const { Router } = require('express')
const axios = require('axios')

const {
  YELP_CLIENT_ID,
  YELP_API_KEY,
  YELP_API_URL,
} = process.env


const router = new Router()
const YELP_ENDPOINT = `${YELP_API_URL}/search`
const config = {
  headers: { Authorization: `bearer ${YELP_API_KEY}` }
}

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(YELP_ENDPOINT, {
      params: {
        term: req.query.term,
        location: req.query.location,
        range: req.query.range,
        limit: req.query.limit,
        sort_by: req.query.sortBy,
      },
      ...config,
    })

    const businesses = data.businesses.map((obj) => {
      return {
        ...obj,
        image_url: obj.image_url.replace('/o.jpg', '/ls.jpg'),
      }
    })
    res.send(businesses)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router

import 'dotenv/config'

export default ({ config }) => ({
  ...config,
  api: {
    MARVEL_PUBLIC_KEY: process.env.MARVEL_PUBLIC_KEY,
    MARVEL_PRIVATE_KEY: process.env.MARVEL_PRIVATE_KEY,
    MARVEL_API_URL: process.env.MARVEL_API_URL,
  },
})

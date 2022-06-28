//import dotenv from "dotenv"

//dotenv.config({ path: ".env" })

const config = {}

config.STATS_DASHBOARD_URL = process.env.STATS_DASHBOARD_URL
console.log('STATS_DASHBOARD_URL', config.STATS_DASHBOARD_URL)

module.exports = config

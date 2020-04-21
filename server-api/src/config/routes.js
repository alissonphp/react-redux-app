const express = require('express')

module.exports = (server) => {

    /**
     * Base entrypoint
     */
    const router = express.Router()
    server.use('/api', router)

    /**
     * Register billing cycles routes from node restful
     */
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}
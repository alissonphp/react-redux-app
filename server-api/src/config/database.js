const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/server-api', { useNewUrlParser: true, useUnifiedTopology: true })


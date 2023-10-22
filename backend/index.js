const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const crypto = require('crypto')
const dotenv = require('dotenv')

// initialize the app
const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
import express from 'express'
import routes from './routes.js'
import mongose from 'mongoose'
//const express = require("express")
//const routes = require('./routes')

class App {
    constructor() {
        this.server = express()
        mongose.connect('mongodb+srv://evaristoandre106:devhouse@devhouse.a9xrhwc.mongodb.net/?retryWrites=true&w=majority&appName=devhouse')
        this.middlewares()
        this.routes()
    }
    middlewares() {
        this.server.use(express.json())

    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server
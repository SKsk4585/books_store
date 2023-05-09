import express from "express";
import routeNotFound from "./3-middelware/route-not-founn";
import catchAll from "./3-middelware/catch-all";
import appConfig from "./2-utils/appconfig";
import booksStoreController from "./6-controllers/books-store-controller"




const server = express()
server.use(express.json())
server.use("/api",booksStoreController)
server.use("*",routeNotFound)
server.use(catchAll)
server.listen(appConfig.port,(()=>console.log(`listen on port ${appConfig.port}`)))






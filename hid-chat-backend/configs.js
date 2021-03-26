import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Server } from "socket.io";
import http from 'http';
import BodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import router from './routes.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(router);

server.listen(process.env.PORT, () => console.log(`Server is up !`));

export default io;
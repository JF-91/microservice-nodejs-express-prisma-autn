import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

class Config {
    constructor() {
        dotenv.config();
        this.prisma = new PrismaClient();
        this.port = process.env.APP_PORT || 5000;

        this.init();
    }

    async init() {
        await this.connectDb();
        await this.disconnectDb();
    }

    getPort() {
        return this.port;
    }

    getDb() {
        return process.env.MYSQL_DATABASE;
    }

    async connectDb() {
       try {
         if (!this.prisma.$isConnected) {
             await this.prisma.$connect();
             console.log('Database connected');
         }
        
       } catch (error) {
            throw new Error(error.message);
       }
    }

    getJwtKey() {
        return process.env.JWT_KEY;
    }

    async disconnectDb() {
        try {
           if (this.prisma.$isConnected) {
               await this.prisma.$disconnect();
               console.log('Database disconnected');
           }
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

export default new Config();
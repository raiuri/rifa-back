import { Injectable } from '@nestjs/common';
import * as https from 'https';
import axios from 'axios';
import * as fs from 'fs';
import { redisClient } from 'src/utils/redis-cliente';

let certificate = fs.readFileSync("src/../cert/producao-315322-rifa.p12");
let credentials = {
    client_id: "Client_Id_9e3450b6e9ac4d988af977f6dd0579f19bcb0d12",
    client_secret: "Client_Secret_d200dad501e3c48feac0001751445bd4fb18425c",
};

let data = JSON.stringify({ grant_type: "client_credentials" });
let data_credentials = credentials.client_id + ":" + credentials.client_secret;

// Codificando as credenciais em base64
let auth = Buffer.from(data_credentials).toString("base64");

const agent = new https.Agent({
    pfx: certificate,
    passphrase: "",
});

@Injectable()
export class PaymentService {
    constructor() { }

    async generateToken() {
        //Consumo em desenvolvimento da rota post oauth/token
        // verificar se tem um token no cache, se nao tiver o token, gerar um novo token
        let config = {
            method: "POST",
            url: "https://api-pix.gerencianet.com.br/oauth/token",
            headers: {
                Authorization: "Basic " + auth,
                "Content-Type": "application/json",
            },
            httpsAgent: agent,
            data: data,
        };

        try {
            const response = await axios(config);
            return response.data.access_token;
        } catch (error) {
            console.log(error);
        }
    }

    async getTokenFromRedisOrApi() {
        const tokenInRedis = await redisClient.get('pix_api_token');
        if (!tokenInRedis) {
            const token = await this.generateToken();
            await redisClient.set('pix_api_token', token, 'EX', 3500);
        }

        return await redisClient.get('pix_api_token');
    }

    async payment(ticket: number) {
        const tokenApiPix = await this.getTokenFromRedisOrApi();
        const paymentData = {
            paymentUrl: 'https://pix.gerencianet.com.br/cob/pagar/',
            clientName: 'name',
            criacao: 'criacao'
        }
    }
}

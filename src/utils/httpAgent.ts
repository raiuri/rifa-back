import * as https from 'https';
import * as fs from 'fs';

const cert = fs.readFileSync('../../../certs/certificado-producao.pem', 'utf-8');

export const httpsAgent = new https.Agent({ ca: [cert] });

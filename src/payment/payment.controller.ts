import { Controller, Post, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('api/payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }

    @Post()
    async pay() {
        console.log('testeee')
        await this.paymentService.payment(11);
        return "Payment";
    }

    @Get()
    async verifyPayment() {
        return "verify payment";
    }
}

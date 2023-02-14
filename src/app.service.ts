import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() { }
  async getHello() {
    // await this.cacheManager.set('cached_item', { key: 342 }, 15);
    // const cachedItem = await this.cacheManager.get('cached_item');
    // await this.cacheManager.del('cached_item');
    // await this.cacheManager.reset();
    console.log('aaaa', 'cachedItem');
    return 'Hello World!';
  }
}

import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'CHAT BACK IS RUN!';
    }
}

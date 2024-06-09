import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from 'src/constants';

let URI = MONGO_URI;

@Module({
  imports: [MongooseModule.forRoot(URI)],
  exports: [MongooseModule],
})
export class DatabaseModule {}

// class AuthMiddleware implements NestMiddleware {
//   async use(req: Request, res: Response, next: () => void) {
//     await connectDB()
//   }
// }

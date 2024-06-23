import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { KittnesController } from './kittnes/kittnes.controller';
import { KittensController } from './kittens/kittens.controller';
import { KittensService } from './kittens/kittens.service';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [DogsModule],
  controllers: [AppController, KittensController],
  providers: [AppService, KittensService],
})
export class AppModule {}

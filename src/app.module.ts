import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesModule } from './quizzes/quizzes.module';
import { UserInteractionsModule } from './user-interactions/user-interactions.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://elearning:elearning123@cluster0.3ylmz.mongodb.net/'),
    QuizzesModule,
    UserInteractionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

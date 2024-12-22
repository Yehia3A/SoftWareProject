import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesModule } from './quizzes/quizzes.module';
import { UserInteractionsModule } from './user-interactions/user-interactions.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { UsersModule } from './users/user.module';
import { CoursesModule } from './courses/courses.module';
import { ModulesModule } from './modules/modules.module';
import { ProgressesModule } from './progress/progress.module';
import { ConfigModule } from '@nestjs/config';
import { ResponsesModule } from './response/response.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { ChatModule } from './communication/chat/chat.module';
import { ForumModule } from './communication/forum/forum.module';
import { NotificationModule } from './communication/notification/notification.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables from .env
    MongooseModule.forRoot('mongodb://localhost:27017'),
    QuizzesModule,
    UserInteractionsModule,
    RecommendationsModule,
    UsersModule,
    CoursesModule,
    ModulesModule,
    ProgressesModule,
    ResponsesModule,
    ChatModule,
    ForumModule,
    NotificationModule,
    AuthModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}

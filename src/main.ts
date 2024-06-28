import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {ClassSerializerInterceptor, INestApplication} from '@nestjs/common';
import { setup } from './setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //registerGlobals(app);
  setup(app)
  await app.listen(3000);
}
export function registerGlobals(app:INestApplication){
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector),{strategy:'excludeAll',  excludeExtraneousValues: true,}));
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3030;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`🚀 Server Started on port ${PORT}`);
  });
}
bootstrap();

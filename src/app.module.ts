import { config } from 'dotenv';
config();

import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppUpdate } from './app.update';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      useFactory: async () => {
        const botToken = process.env.BOT_TOKEN;
        if (!botToken) {
          throw new Error('Bot token is not found');
        }

        return {
          token: botToken,
        };
      },
    }),
  ],
  providers: [AppService, AppUpdate],
})
export class AppModule {}

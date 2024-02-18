import { Command, Update } from 'nestjs-telegraf';

@Update()
export class AppUpdate {
  @Command('start')
  start(): string {
    return '123';
  }
}

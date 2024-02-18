import { Action, Command, Update } from 'nestjs-telegraf';
import { IContext } from 'shared/types';
import { Context } from 'telegraf';
import { Keyboard } from 'telegram-keyboard';

@Update()
export class AppUpdate {
  @Command('start')
  start(ctx: Context) {
    ctx.sendMessage('123', {
      ...Keyboard.inline(['Нажми', 'Туту']),
    });
  }

  @Action('Нажми')
  startButton(ctx: IContext) {
    ctx.scene.enter('');
  }
}

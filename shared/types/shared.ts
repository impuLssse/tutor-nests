import { Context } from 'telegraf';
import {
  CallbackQuery,
  Message,
  Update,
} from 'telegraf/typings/core/types/typegram';
import { Scenes as TelegrafScenes } from 'telegraf';
import { SceneContextScene } from 'telegraf/typings/scenes';

type BaseContext = Context;

export interface IContext extends BaseContext {
  update: Update.CallbackQueryUpdate & { message: Message.PhotoMessage };
  scene: ISceneContextScene;
  session: SessionData;
  message: Update.New &
    Update.NonChannel &
    Message & { text?: string } & Message.CommonMessage;

  callbackQuery: CallbackQuery & { data: string };
}

export interface ISceneContextScene
  extends SceneContextScene<IContext, SceneSession> {
  enter: (sceneId: '') => Promise<unknown>;
}

interface SceneSession extends TelegrafScenes.SceneSessionData {}

export interface SessionData extends TelegrafScenes.SceneSession<SceneSession> {
  message_id: number;
  user: {
    id: string;
    name: string;
    user_id: string;
    chat_id: string;
  };
}

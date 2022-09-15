import { HttpException } from '@nestjs/common';

export class FileRemoveException extends HttpException {
  messages;
  constructor(response) {
    super(`Не удалось удалить файл`, 431);
    this.messages = response;
  }
}

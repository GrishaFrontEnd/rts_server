import { HttpException, HttpStatus } from '@nestjs/common';

export class FileWriteException extends HttpException {
  messages;
  constructor(response) {
    super(`Не удалось записать файл`, 430);
    this.messages = response;
  }
}

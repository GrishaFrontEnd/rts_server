import { HttpException } from '@nestjs/common';

export class FileUpdateException extends HttpException {
  messages;
  constructor(response) {
    super(response, 432);
    this.messages = response;
  }
}

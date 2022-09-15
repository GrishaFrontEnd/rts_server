import { Injectable } from '@nestjs/common';
import { FileWriteException } from 'src/exceptions/file-write.exception';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';
import { FileRemoveException } from 'src/exceptions/file-remove.exception';
import { FileUpdateException } from 'src/exceptions/file-update.exception';

@Injectable()
export class FileService {
  async createFile(file: Express.Multer.File): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (error) {
      throw new FileWriteException(error);
    }
  }
  async deleteFile(fileName: string) {
    try {
      const filePath = path.resolve(__dirname, '..', 'static');
      fs.rmSync(path.join(filePath, fileName));
      return true;
    } catch (error) {
      throw new FileRemoveException(error);
    }
  }
  async updateFile(
    file: Express.Multer.File,
    oldName: string,
  ): Promise<string> {
    try {
      const isDelete = await this.deleteFile(oldName);
      const fileName = await this.createFile(file);
      return fileName;
    } catch (error) {
      throw new FileUpdateException(error);
    }
  }
}

export class AppError {
  readonly message: string;
  readonly statusCode: number;

  constructor(message: string, statusCode = 500) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

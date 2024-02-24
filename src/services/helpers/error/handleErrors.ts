import { errorMessage } from 'const/notification/errorNotification';

export const handleErrors = (error: string): string =>
  errorMessage.ERR_BAD_REQUEST;

import { getNotificationsById } from '@order/services/notification.service';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const notifications = async (req: Request, res: Response): Promise<void> => {
  const notifications = await getNotificationsById(req.params.userTo);
  res.status(StatusCodes.OK).json({ message: 'Notifications', notifications });
};

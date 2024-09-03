import { markNotificationAsRead } from '@order/services/notification.service';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const markSingleNotificationAsRead = async (req: Request, res: Response): Promise<void> => {
  const { notificationId } = req.body;
  const notification = await markNotificationAsRead(notificationId);

  res.status(StatusCodes.OK).json({ message: 'Notification updated successfully.', notification });
};

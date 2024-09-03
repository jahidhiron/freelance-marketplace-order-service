import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { getOrderByOrderId, getOrdersByBuyerId, getOrdersBySellerId } from '@order/services/order.service';

export const orderId = async (req: Request, res: Response): Promise<void> => {
  const order = await getOrderByOrderId(req.params.orderId);
  res.status(StatusCodes.OK).json({ message: 'Order by order id', order });
};

export const sellerOrders = async (req: Request, res: Response): Promise<void> => {
  const orders = await getOrdersBySellerId(req.params.sellerId);
  res.status(StatusCodes.OK).json({ message: 'Seller orders', orders });
};

export const buyerOrders = async (req: Request, res: Response): Promise<void> => {
  const orders = await getOrdersByBuyerId(req.params.buyerId);
  res.status(StatusCodes.OK).json({ message: 'Buyer orders', orders });
};

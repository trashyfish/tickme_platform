'use server';

import { CreateUserParams, UpdateUserParams } from '@/types';
import { handleError } from '../utils';
import { connectToDatabase } from '../database';
import User from '../models/user.model';
import { revalidatePath } from 'next/cache';
import Event from '../models/event.model';
import Order from '../models/order.model';

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export const getUserById = async (clerkId: string) => {
  try {
    await connectToDatabase();

    const getUser = await User.findById(clerkId);

    if (!getUser) throw new Error('User not found');
    return JSON.parse(JSON.stringify(getUser));
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
  try {
    await connectToDatabase();

    const updateUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updateUser) throw new Error('User update failed');
    return JSON.parse(JSON.stringify(updateUser));
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    await connectToDatabase();

    //find the user to delete
    const userToDelete = await User.findOne({ clerkId });

    //if user to delete is not found
    if (!userToDelete) throw new Error('User not found');

    // Unlink relationships
    await Promise.all([
      //Update the 'events' collection to remove references to the user
      Event.updateMany(
        { _id: { $in: userToDelete.events } },
        { $pull: { organizer: userToDelete._id } }
      ),

      //Update the 'orders' collection to remove field references to the user
      Order.updateMany(
        { _id: { $in: userToDelete.orders } },
        { $unset: { buyer: 1 } }
      ),
    ]);

    //delete user
    const deletUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath('/');

    return deletUser ? JSON.parse(JSON.stringify(userToDelete)) : null;
  } catch (error) {
    handleError(error);
  }
};

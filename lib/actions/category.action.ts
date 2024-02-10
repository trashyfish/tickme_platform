'use server';

import { CreateCategoryParams } from '@/types';
import { connectToDatabase } from '../database';
import { handleError } from '../utils';
import Category from '../database/models/category.models';

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    await connectToDatabase();

    const newCategory = await Category.create({ name: categoryName });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(Error);
  }
};

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const fetchCategories = await Category.find();

    return JSON.parse(JSON.stringify(fetchCategories));
  } catch (error) {
    handleError(Error);
  }
};

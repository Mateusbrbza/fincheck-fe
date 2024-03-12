import { create } from './create';
import { getAll } from './getAll';
import { deleteTransaction } from './remove';
import { update } from './update';

export const transactionsService = {
  getAll,
  create,
  update,
  deleteTransaction,
};

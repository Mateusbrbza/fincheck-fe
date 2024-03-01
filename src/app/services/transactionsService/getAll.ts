import { Transaction } from '@/app/entities/Transaction';
import { httpClient } from '../httpClient';

type TransactionResponse = Array<Transaction>;

export async function getAll() {
  const { data } = await httpClient.get<TransactionResponse>('/transactions');

  return data;
}

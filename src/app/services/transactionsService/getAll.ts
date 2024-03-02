import { Transaction } from '@/app/entities/Transaction';
import { httpClient } from '../httpClient';
import { TransactionsFilters } from '@/app/entities/TransactionsFilters';

type TransactionsResponse = Array<Transaction>;

export async function getAll(filters: TransactionsFilters) {
  const { data } = await httpClient.get<TransactionsResponse>('/transactions', {
    params: filters,
  });

  return data;
}

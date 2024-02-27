import { httpClient } from '../httpClient';

export async function deleteAccount(bankAccountId: string) {
  const { data } = await httpClient.delete(`/bank-accounts/${bankAccountId}`);

  return data;
}

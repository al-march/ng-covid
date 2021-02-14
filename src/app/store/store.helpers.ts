import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export const getStoreValue = async <T>(Store: Observable<T>): Promise<T> => {
  return Store.pipe(take(1)).toPromise();
};

import { ISelectOption } from 'interfaces';
import { formatWordFirstUpper } from '../string/formatWordFirstUpper';

export const formatLabelSelect = (arr: ISelectOption[]) =>
  arr.map(item => ({
    ...item,
    label: formatWordFirstUpper(item.label),
  }));

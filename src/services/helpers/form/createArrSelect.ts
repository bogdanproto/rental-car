export const createArrSelect = (qnt: number) =>
  Array.from({ length: qnt }, (_, idx) => ({
    id: idx + 1,
    label: ((idx + 1) * 10).toString(),
  }));

interface IResultTableView {
  index: number;
  value: number;
}

export class ResultTableView implements IResultTableView {
  index: number;
  value: number;
  constructor({ index = 0, value = 0 }: Partial<IResultTableView>) {
    this.index = index;
    this.value = value;
  }
}

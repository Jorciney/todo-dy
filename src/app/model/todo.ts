export interface Todo {
  id: number;
  title: string;
  date: string;
  complete: boolean;
  children?: unknown[]; // TODO delete if not needed
}

export interface Task {
  id: string;
  title: string;
  //This makes your type reusable everywhere.
  priority: number;
  completed: boolean;
}

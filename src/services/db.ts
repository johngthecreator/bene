import Dexie, { Table } from 'dexie';

export interface Task {
  id?: number;
  taskName: string;
  difficulty: number;
  hourSection: number;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  tasks!: Table<Task>;

  constructor(){
    super('beneDB');
    this.version(1).stores({
      tasks: '++id, taskName, difficulty, hourSection' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
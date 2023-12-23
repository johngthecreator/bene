import Dexie, { Table } from 'dexie';

export interface Task {
  id?: number;
  taskName: string;
  difficulty: number;
  bucket: number;
}

export class MySubClassedDexie extends Dexie {
  tasks!: Table<Task>;

  constructor(){
    super('beneDB');
    this.version(1).stores({
      tasks: '++id, taskName, difficulty, bucket' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
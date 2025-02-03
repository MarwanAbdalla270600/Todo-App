import { db } from "../config/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { NewTask, Task } from "../models/todo-interface";

const tasksCollection = collection(db, "tasks");

export async function getAllTasks() {
    const querySnapshot = await getDocs(tasksCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function addTask(task: NewTask) {
    return await addDoc(tasksCollection, task)
}


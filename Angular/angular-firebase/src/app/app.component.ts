import { Component } from '@angular/core';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase';
  public data: any = []
  constructor(public firestore: Firestore) {
    this.getData()
  }
  addData(value: any) {
    const dbInstance = collection(this.firestore, 'users');
    addDoc(dbInstance, value)
      .then(() => {
        alert('Data Sent')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  getData() {
    const dbInstance = collection(this.firestore, 'users');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }

  updateData(id: string) {
    const dataToUpdate = doc(this.firestore, 'users', id);
    updateDoc(dataToUpdate, {
      name: 'Nishant',
      email: 'Nishant123@gmail.com'
    })
      .then(() => {
        alert('Data updated');
        this.getData()
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  deleteData(id: string) {
    const dataToDelete = doc(this.firestore, 'users', id);
    deleteDoc(dataToDelete)
    .then(() => {
      alert('Data Deleted');
      this.getData()
    })
    .catch((err) => {
      alert(err.message)
    })
  }
}

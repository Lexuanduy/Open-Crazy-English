import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Lesson {
  name: string;
  description: string;
  audioURL: string;
  videoURL: string;
  imageURL1: string;
  imageURL2: string;
}
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  private lessonDoc: AngularFirestoreDocument<Lesson>;
  lesson: Observable<Lesson>;
  constructor(private afs: AngularFirestore) {
    this.lessonDoc = afs.doc<Lesson>('lessons/Lesson1');
    this.lesson = this.lessonDoc.valueChanges();
  }
  ngOnInit() {
  }

}

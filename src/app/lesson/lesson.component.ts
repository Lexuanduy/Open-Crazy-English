import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';

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
  id: any;
  constructor(private route: ActivatedRoute, private router: Router, private afs: AngularFirestore) {
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.id = val.state.root.firstChild.params.id;
        this.lessonDoc = afs.doc<Lesson>('lessons/' + this.id);
        this.lesson = this.lessonDoc.valueChanges();
      }
    });
  }
  ngOnInit() {
  }

}

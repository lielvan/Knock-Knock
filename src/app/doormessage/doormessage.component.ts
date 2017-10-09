import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-doormessage',
  templateUrl: './doormessage.component.html',
  styleUrls: ['./doormessage.component.css']
})
export class DoormessageComponent {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object<any>('/doormessage');
    this.item = this.itemRef.valueChanges();
  }

  update(message: string) {
    this.itemRef.update({ current: message });
  }

}

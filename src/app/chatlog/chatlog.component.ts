import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chatlog',
  templateUrl: 'chatlog.component.html',
  styleUrls: ['./chatlog.component.css']
})
export class ChatlogComponent {
  messagesRef: AngularFireList<any>;
  messages: Observable<any[]>;
  timestamp: number = Date.now();
  constructor(db: AngularFireDatabase) {
    this.messagesRef = db.list('/chatlog');
    this.messages = this.messagesRef.valueChanges();
  }
  send(message: string) {
    this.messagesRef.push({ text: message, timestamp: this.timestamp });
  }
}

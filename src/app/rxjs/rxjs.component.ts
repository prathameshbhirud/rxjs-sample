import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.observableSample();
    //this.pipeOperators();
    this.sampleSubject();
  }

  observableSample(){
    const foo = new Observable(subscriber => {
      console.log("Hello");
      subscriber.next(10);
      subscriber.next(20);
      subscriber.next(30);
      setTimeout(() => {
        subscriber.next(40);
      }, 3000);
    });

    console.log("Before...");
    
    console.log("after...");




    foo.subscribe(x => {
      console.log(x);
    });
  }

  pipeOperators(){
    map((x:any) => x * x)(of(1,2,3)).subscribe((y) => console.log(`Value is ${y}`));
  }


  // difference between Subject and Observable is when we subscribe to observable, we get all values emitted by Observer 
  // but in case of Subject, we get only those values at the time of subscribe, which are written with next() method; below, we miss value '1' but get 2,3,4,5 and 6
  sampleSubject(){
    const subject = new Subject<number>();
    subject.next(1);
    subject.subscribe(x => console.log(`x is  : ${x}`));
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.next(5);
    subject.next(6);
  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  model:any;
  // sub:Model[];
  ngOnInit(): void {
    // this.model = this.route
    //   .data
    //   .subscribe(v => console.log(v));
  }
}

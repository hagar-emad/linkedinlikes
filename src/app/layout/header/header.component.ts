import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/_models/registerUser.model';
import { UserServiceService } from 'src/app/_services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userID: string | null = '';
  newID: string = '';
  person!: User|any;
  constructor(public af:AngularFireAuth, private user: UserServiceService,) { }

  ngOnInit(): void {
    this.userID = localStorage.getItem('token');
    if (this.userID) {
      this.newID = this.userID;
    }
    // this.auth.onAuthStateChanged((user)=>{this.userID!=user?.uid});
    this.user.getuserDoc(this.newID).subscribe(res => {
      console.log(res.payload.data());
      this.person=res.payload.data();
    });



  }
onlogout(){
this.af.signOut();
localStorage.removeItem("token")
}
}

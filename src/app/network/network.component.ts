import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { req } from '../_models/request.model';
import { NotifiService } from '../_services/notifi.service';
import { UserServiceService } from '../_services/user-service.service';
import { Model } from './Model';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  ayhaga:any;
  newid !:string
  newReq!:req
array:any=[]
set=new  Set();
isconnetion:boolean=false;

  model:Model[]=[];
  constructor(public ay:NotifiService,private fire :AngularFirestore,private ayy:UserServiceService) {
    // this.array.push(this.ay.person1);

    // this.ayhaga= this.fire.collection("notifications").doc(this.newid).snapshotChanges();S

   }
  ngOnInit(): void {
    console.log(this.ay.person1);
    this.array.push(this.ay.person1);

    // var db = this.fire.collection('notifications').snapshotChanges();
  //  db.subscribe(res=>{res.forEach(res1=>{this.array.push(res1.payload.doc)})})
   if(this.array.length>1){this.isconnetion=true}
  }
  addmodels(models: Model[]) {
    console.log("😂😂😂😂😂😂",models);

    this.model=models;
  }
  isConnectionFunc(){
    this.isconnetion=true;
  }
  PopulateNotifications() {
    // document.getElementsByClassName("num")[0].innerHTML = `<div class="text-center">
    //                                                      <span class="spinner-border text-primary mt-5" style="width:7rem;height:7rem"></span>
    //                                                  </div>`;
    var db = this.fire.collection('notifications').snapshotChanges();
    var lst = '';
    db.subscribe(res=>{res.forEach(res1=>{
      let x:any=  res1.payload.doc.data();
      let x1:any=  res1.payload.doc;
console.log(x1.id);

      if(x.sendTo==this.ay.userID&&x.status==="Pending"){
        // this.person1.push(x);
        lst += `<li class="list-group-item list-group-item-action">
        <div class="row">

            <div class="col-12" style="cursor:pointer;">
                <div class="name">${x1.data().name}
                    <button (click)="Reject('${x1.id}')" class="btn btn-sm btn-danger" style="float:right;margin-left:1%;"><i class="fas fa-user-times"></i> Reject</button>

                    <button (click)="Accept(${x1.id})" class="btn btn-sm btn-success" style="float:right;"><i class="fas fa-user-check"></i> Accept</button>
                </div>
            </div>
        </div>
    </li>`;
      }

      document.getElementsByClassName("reqestYzmele")[0].innerHTML = lst;
      })})
}

   Accept(id:string,i:number) {


     this.newid=id;
console.log(id);
let req= this.fire.collection("notifications").doc(id).snapshotChanges();
let friendList;

// let per:any;
// this.ayy.getReqDoc(id).subscribe(  res=>{
//   console.log(res.payload.data())
//   this.newReq= res.payload.data();
//   if(this.newReq){

//     this.newReq.status="Accept";
//   }
// });
    req.subscribe(  (res)=>{
    console.log(res.payload.data())
    this.newReq= res.payload.data() as req;
  });
  console.log(this.newReq);
  if(this.newReq){

    friendList={friendID:this.newReq.sendFrom,userID:this.newReq.sendTo};
    // this.newReq.status="Accept";
    // this.fire.collection("notifications").doc(id).update(this.newReq)

    this.fire.collection("FriendList").add(friendList);
 this.fire.collection("notifications").doc(id).delete();
 if(i>-1){
  this.array.splice(i,1)
  // this.array=this.ay.person1
}

  }

}
Reject(id:string,i:number){
 this.fire.collection("notifications").doc(id).delete();
//  window.location.reload()
//  if(i>-1){
//   this.ay.person1.splice(i,1)
// }

}

// ngDoCheck():void{
//   // if(this.newReq){

//   //   this.newReq.status="Accept";
//   //   this.fire.collection("notifications").doc(this.newid).update(this.newReq)
//   // }
//   console.log(this.newReq);

// }
}

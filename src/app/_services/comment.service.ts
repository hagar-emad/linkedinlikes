import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Comment } from '../_models/comment.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../_models/registerUser.model';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

    postRef: AngularFirestoreCollection<Comment> | undefined;
    comments?: Comment[];

    constructor(public db: AngularFirestore) {

    }

    createComment(comment: any) {
      return this.db.collection('comment').add(comment);
    }

    getAllComments() {
      return this.db.collection('comment').snapshotChanges();

    }


    // updatePost(postID: string, postBody: string) {
    //   this.db.collection('Posts' ).doc(postID).update({
    //     body: postBody
    //   });
    // }

    // deletePost(postID: string ) {
    //   this.db.collection('Posts' ).doc(postID).delete();
    // }


}

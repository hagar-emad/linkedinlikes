import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/registerUser.model';
import { UserServiceService } from 'src/app/_services/user-service.service';
import { PostServiceService } from 'src/app/_services/post-service.service';
import { Post } from 'src/app/_models/post.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProviderAstType } from '@angular/compiler';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	userID: string | null = '';
	editPostForm!: FormGroup;
	newID: string = '';
	person!: User | any;
	posts!: Post | any;

	constructor(private user: UserServiceService, private postService: PostServiceService, private adAuth: AngularFireAuth, private fb: FormBuilder, private modalService: NgbModal) {}

	ngOnInit(): void {
		this.userID = localStorage.getItem('token');
		if (this.userID) {
			this.newID = this.userID;
		}
		this.user.getuserDoc(this.newID).subscribe(res => {
			this.person = res.payload.data();
		});


		this.postService.getAllPosts()?.subscribe(data => {
			this.posts = data.map(e => {
				const data: any = e.payload.doc.data()
				return {
					id: e.payload.doc.id,
					body: data.body,
					name:data.name,
				};
			})
		})

		this.editPostForm = this.fb.group({
			id: [''],
			body: ['']
		});

	}

	onPost(form: Post) {
		this.postService.createPost({ID:this.person.ID,Name:this.person.firstName,...form});
	}

	openModal(targetModal: any, post: Post) {
		this.modalService.open(targetModal, {
			centered: true,
			backdrop: 'static'
		});

		this.editPostForm.patchValue({
			body: post.body,
			id: post.id,
		});
	}

	onSubmit() {
		this.modalService.dismissAll();
		let formData: any = this.editPostForm.getRawValue();
		this.postService.updatePost(formData.id, formData.body);
	}

	deletePost(postID: string) {

		this.postService.deletePost(postID);

	}
}

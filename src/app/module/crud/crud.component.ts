import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class CrudComponent {

  crudForm!:FormGroup;
  posts: any[] = [];
  post:any[]=[]
  index:any;

  constructor(private formBuilder:FormBuilder, private crud:CrudService){
  }

  ngOnInit(){
   this.form();
   this.getDetails()
  }

  form(){
    this.crudForm = this.formBuilder.group ({
      title: ['', Validators.required],
      body: ['', Validators.required],
    })
  }
  getDetails() {
    this.crud.getPosts()
      .subscribe({
        next: (data: any[]) => {   
          console.log('Received posts:', data);  
          this.posts = data;  
        },
        error: (err) => {  
          console.error('Error fetching posts:', err);
        }
      });
  }

  formSubmit(): void {
    const post = this.crudForm.value;
    this.crud.createPost(post)
      .subscribe({
        next: (data: any[]) => {
          console.log('Post created:');
          this.getDetails(); // Refresh the post list after creating a new post
          this.crudForm.reset(); // Reset the form after successful submission
        },
        error: (error) => {
          console.error('Error creating post:', error);
        }
      });
  }

  onUpdate(index:number,id:number){
    this.index = id;
    this.crudForm.patchValue(this.posts[index])
  }
  updateData(){
    const post = this.crudForm.value;
    this.crud.updatePost(this.index,post).subscribe();
    this.crudForm.reset();
    this.getDetails();
  }
  onDelete(id: number): void {
    this.crud.deletePost(id).subscribe({
        next: (data: any[]) => {
          console.log('Post deleted:', data);
          this.getDetails(); 
        },
        error: (error) => {
          console.error('Error deleting post:', error);
        }
      });
  }
}

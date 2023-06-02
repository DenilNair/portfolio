import { Component } from '@angular/core';
export interface Blog {
  id: number;
  title: string;
  description: string;
  link: string;
  image:string;

}
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  title = "Angular Grid Card View";
  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  blogs: Blog[] = [
    {id: 1, title: 'Deploy Image to Kubernetes and know about Kubectl commands',image:'./assets/kubernetes-docker.png' ,description: '', link: 'white'},
    {id: 2, title: 'Docker Compose for Spring boot Microservices',image:'./assets/docker_logo.png' , description: '', link: 'white'},
    {id: 3, title: 'Few Steps towards Docker ..',image:'./assets/docker_logo.png' , description: '', link: 'white'},
    {id: 4, title: 'First REST API using Spring boot',image:'./assets/docker_logo.png' , description: '', link: 'white'},
    {id: 5, title: '',image:'./assets/spring_rest.png' , description: '', link: 'white'},

  ];
}

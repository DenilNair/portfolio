import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { BlogsComponent } from './navbar/blogs/blogs.component';
import { ProjectsComponent } from './navbar/projects/projects.component';
const routes: Routes = [ { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }, { path: 'about', component: AboutComponent },
   { path: 'contact', component: ContactComponent }
   , { path: 'blog', component: BlogsComponent }
   , { path: 'project', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

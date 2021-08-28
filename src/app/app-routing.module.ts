import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { StudentComponent } from './components/student/student.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'students',
    component: StudentComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
  },
  {
    path: '**',
    redirectTo: '/character'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

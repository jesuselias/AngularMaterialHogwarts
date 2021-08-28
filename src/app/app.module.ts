import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Animaciones de Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { HomeComponent } from './components/home/home.component';
import { SlytherinComponent } from './components/slytherin/slytherin.component';
import { GryffindorComponent } from './components/gryffindor/gryffindor.component';
import { RavenclawComponent } from './components/ravenclaw/ravenclaw.component';
import { HufflepuffComponent } from './components/hufflepuff/hufflepuff.component';
import { StudentComponent } from './components/student/student.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { CharacterComponent } from './components/character/character.component';

// Material
import { MaterialModule } from './material.module';
import { AddStudentComponent } from './components/add-student/add-student.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlytherinComponent,
    GryffindorComponent,
    RavenclawComponent,
    HufflepuffComponent,
    StudentComponent,
    TeachersComponent,
    CharacterComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

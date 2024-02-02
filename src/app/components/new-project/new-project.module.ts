import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContainerFrameComponent } from '../container-frame/container-frame.component';
import { PropertiesBarComponent } from '../properties-bar/properties-bar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NewProjectComponent } from './new-project.component';

const routes: Routes = [
  { path: '', component: NewProjectComponent },
];

@NgModule({
  declarations: [ 
    SidebarComponent,
    PropertiesBarComponent,
    ContainerFrameComponent,
    NewProjectComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    DragDropModule,
    FormsModule,
    FontAwesomeModule,
    DropdownModule,
    SidebarModule,
    ButtonModule,
    ColorPickerModule,
    RippleModule,
    CardModule,
    InputTextModule,
  ],
  exports: [ RouterModule ]
})
export class NewProjectModule { }

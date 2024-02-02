
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

@NgModule( {
	declarations: [
		MainComponent,
		NavbarComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		ToolbarModule,
		AvatarModule,
		AvatarGroupModule,
		ButtonModule,
		CardModule,
	],
	exports: [ MainComponent ],
	bootstrap: [ NavbarComponent ],
} )
export class CoreModule { }

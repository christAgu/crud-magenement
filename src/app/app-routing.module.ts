import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatComponent } from './creat/creat.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {path:'creat' ,component:CreatComponent},
  {path:'creat/:id' ,component:CreatComponent},
  {path:'read' ,component:ReadComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

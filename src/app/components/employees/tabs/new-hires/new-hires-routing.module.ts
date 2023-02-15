import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHiresComponent } from './new-hires.component';

const routes: Routes = [{ path: '', component: NewHiresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewHiresRoutingModule { }

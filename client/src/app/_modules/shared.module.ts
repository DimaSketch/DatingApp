import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,                // Shared module imports extra modules that dont necessarily correspond with angular
    BsDropdownModule.forRoot(),  
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  exports: [                     // export is used to export the above modules to any calls within app.module.ts
    BsDropdownModule,
    ToastrModule
  ]
})
export class SharedModule { }

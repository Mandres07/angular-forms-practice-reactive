import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './app.validators';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   projectForm: FormGroup = new FormGroup({});

   ngOnInit(): void {
      this.projectForm.addControl('name', new FormControl(null, Validators.required, CustomValidators.invalidProjectNameAsync));
      this.projectForm.addControl('email', new FormControl(null, [Validators.required, Validators.email]));
      this.projectForm.addControl('status', new FormControl('stable'));

      this.projectForm.statusChanges.subscribe(status => {
         console.log(status);
      })
   }

   onSubmit() {
      console.log(this.projectForm);
      // this.projectForm.reset();
   }
}

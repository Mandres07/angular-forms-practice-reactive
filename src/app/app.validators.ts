import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
const forbiddenProjectNames = ['Test'];

export class CustomValidators {
   static invalidProjectName(control: FormControl): { [s: string]: boolean } {
      if (forbiddenProjectNames.indexOf(control.value) !== -1) {
         return { 'nameIsForbidden': true };
      }
      return null;
   }

   static invalidProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
      const promise = new Promise<any>((resolve, reject) => {
         setTimeout(() => {
            if (forbiddenProjectNames.indexOf(control.value) !== -1) {
               resolve({ 'nameIsForbidden': true });
            }
            else {
               resolve(null);
            }
         }, 1500);
      });
      return promise;
   }

}
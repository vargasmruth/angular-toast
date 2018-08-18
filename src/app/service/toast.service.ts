import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToastService {

  options = {
    'positionClass': 'toast-top-center',
    'dismiss': 'click'
  };

  constructor( private toastr: ToastsManager) {}

  showSuccess(message: string, title?: string) {
      return this.toastr.success(message, title, this.options);
    }
}

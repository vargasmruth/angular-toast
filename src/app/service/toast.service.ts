import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToastService {

  options = {
    positionClass: 'toast-top-center',
    dismiss: 'click',
    titleClass: 'HELLO'
  };

  constructor( private toastr: ToastsManager) {}

  showSuccess(message: string, title?: string) {
      return this.toastr.success(message, title, this.options);
    }

    showError(message: string, title?: string) {
      return this.toastr.error(message, title, this.options);
    }

    showWarning(message: string, title?: string) {
      return this.toastr.warning(message, title, this.options);
    }

    showInfo(message: string, title?: string) {
      return this.toastr.info(message, title, this.options);
    }
    showCustom(message: string, title?: string) {
      return this.toastr.custom('<span style="color: blue">' + message + '</span>', title, {enableHTML: true});
    }
}

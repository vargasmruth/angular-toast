import { Component, OnInit } from '@angular/core';

import { ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-toast-with-service',
  templateUrl: './toast-with-service.component.html',
  styleUrls: ['./toast-with-service.component.css']
})
export class ToastWithServiceComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() { }

  showSuccess() {
    this.toastService.showSuccess('showSuccess', 'Success');
  }

  showError() {
    this.toastService.showError('showError', 'Error');
  }
  showWarning() {
    this.toastService.showWarning('showWarning', 'Warning');
  }
  showInfo() {
    this.toastService.showInfo('showInfo', 'Info');
  }
  showCustom() {
    this.toastService.showCustom('showCustom', 'Custom');
  }

}

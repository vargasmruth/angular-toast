import { Component, OnInit } from '@angular/core';

import { ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-toast-with-service',
  templateUrl: './toast-with-service.component.html',
  styleUrls: ['./toast-with-service.component.css']
})
export class ToastWithServiceComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastService.showSuccess('todo', 'ok');
  }

}

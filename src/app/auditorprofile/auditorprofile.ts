import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { catchError, map, Observable, tap } from 'rxjs';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-auditorprofile',
  imports: [CardModule, ButtonModule, AvatarModule, AsyncPipe, CommonModule, DialogModule, FormsModule, MultiSelectModule, FileUploadModule],
  templateUrl: './auditorprofile.html',
  styleUrl: './auditorprofile.css',
})
export class Auditorprofile {
  private activatedRoute = inject(ActivatedRoute);
  private imageService = inject(ImageService);
  auditorInfo$!: Observable<any>;

  visible: boolean = false;
  cities!: any[];
  selectedServices!: any[];
  AuditorServices: any[] = [];

  //



  private employeeId = this.activatedRoute.snapshot.paramMap.get('id');

  async ngOnInit() {

    this.auditorInfo$ = this.imageService.getAuthorById(this.employeeId!)
      .pipe(
        (map((response: any) => { return response?.data })),
        (tap(auditorData =>
          this.AuditorServices = auditorData.services.map((service: any) => {
            service['code'] = service['id'];
            service['name'] = service['serviceName'];
            delete service['id'];
            delete service['serviceName'];
            return service;
          })
        ))
        ,
        catchError((error: Error) => {
          console.log("error in admin register", error.message);
          throw error;
        })
      );

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    console.log(this.auditorInfo$);
  }

  onSendRequest(email: string) {
    console.log(email);
    window.location.href = `mailto:${email}`;
  }

  showDialog() {
    this.visible = true;
  }

  onUpload(event: any) { }

  submitRequest() {
    console.log('Selected Services:', this.selectedServices);

    // Example toast
    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Request Submitted',
    //   detail: 'Your request has been submitted successfully'
    // });

    this.visible = false;
  }

}

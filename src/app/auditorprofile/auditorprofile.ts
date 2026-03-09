import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { catchError, map, Observable } from 'rxjs';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-auditorprofile',
  imports: [CardModule, ButtonModule, AvatarModule, AsyncPipe, CommonModule],
  templateUrl: './auditorprofile.html',
  styleUrl: './auditorprofile.css',
})
export class Auditorprofile {
  private activatedRoute = inject(ActivatedRoute);
  private imageService = inject(ImageService);
  auditorInfo$!: Observable<any>;

  private employeeId = this.activatedRoute.snapshot.paramMap.get('id');

  async ngOnInit() {

    this.auditorInfo$ = this.imageService.getAuthorById(this.employeeId!)
      .pipe(
        (map((response: any) => { return response?.data })),
        catchError((error: Error) => {
          console.log("error in admin register", error.message);
          throw error;
        })
      );

    console.log(this.auditorInfo$);
  }

  onSendRequest(email: string) {
    console.log(email);
    window.location.href = `mailto:${email}`;
  }
}

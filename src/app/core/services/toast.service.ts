import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { HttpError } from '../shared/interfaces/http-response/http-error.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private toastrService: ToastrService,
    private readonly translate: TranslateService
  ) {}

  showInfo(description: string) {
    let translationSubscriber$ = this.translate
      .get('common.info')
      .subscribe((_: string) => {
        this.toastrService.info(
          description,
          this.translate.instant('common.info')
        );
      });
    translationSubscriber$.unsubscribe();
  }

  showSuccess(description: string) {
    let translationSubscriber$ = this.translate
      .get('common.success')
      .subscribe((_: string) => {
        this.toastrService.success(
          description,
          this.translate.instant('common.success')
        );
      });
    translationSubscriber$.unsubscribe();
  }

  showWarning(description: string) {
    let translationSubscriber$ = this.translate
      .get('common.warning')
      .subscribe((_: string) => {
        this.toastrService.warning(
          description,
          this.translate.instant('common.warning')
        );
      });
    translationSubscriber$.unsubscribe();
  }

  showError(description: string) {
    let translationSubscriber$ = this.translate
      .get('common.error')
      .subscribe((_: string) => {
        this.toastrService.error(
          description,
          this.translate.instant('common.error')
        );
      });
    translationSubscriber$.unsubscribe();
  }

  _onApiError = (error: HttpError) => {
    let translationSubscriber$ = this.translate
      .get('common.error')
      .subscribe((_: string) => {
        this.showError(
          (error?.error?.errors?.length ?? 0 > 0
            ? error?.error?.errors?.join(',') || ''
            : error?.error?.error) || error?.statusText
        );
      });
    translationSubscriber$.unsubscribe();
  };

  _onApiSuccess = (data: any) => {
    let translationSubscriber$ = this.translate
      .get('common.error')
      .subscribe((_: string) => {
        this.showSuccess(data);
      });
    translationSubscriber$.unsubscribe();
  };
}

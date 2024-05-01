import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxDropZoneService {
  // TODO: Define a `whitelist` object that can accept more validation arguments.
  // Size, type, Callback, etc.
  readonly whitelist = ['image/jpeg', 'image/png', 'image/gif'];

  readonly files$ = new Subject<File[]>();

  readonly files = this.files$.pipe(
    map((files) =>
      files.filter((file) => this.whitelist.includes(file.type.toLowerCase()))
    )
  );
}

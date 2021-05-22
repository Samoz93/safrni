import { Injectable } from '@angular/core';
import { AddToNewsLetterGQL } from './saferniGraphql.service';

@Injectable({ providedIn: 'root' })
export class NewsLetterService {
  constructor(private newsQgl: AddToNewsLetterGQL) {}

  addEmailToNewsLetter(email: string) {
    this.newsQgl.mutate({ email: email });
  }
}

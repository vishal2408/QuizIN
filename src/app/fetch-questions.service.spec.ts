import { TestBed, inject } from '@angular/core/testing';

import { FetchQuestionsService } from './fetch-questions.service';

describe('FetchQuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchQuestionsService]
    });
  });

  it('should ...', inject([FetchQuestionsService], (service: FetchQuestionsService) => {
    expect(service).toBeTruthy();
  }));
});

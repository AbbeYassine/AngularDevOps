import {
  inject,
  TestBed
} from '@angular/core/testing';
import {Component} from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Title} from './title.service';

describe('Title', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      Title
    ]
  }));

  it('testing sum', inject([Title], (title:Title) => {
    const a = 8;
    const b = 8;
    expect(title.additionner(a, b)).toEqual(16);
  }));

  it('testing multiplication', inject([Title], (title:Title) => {
    const a = 8;
    const b = 8;
    expect(title.multiplier(a, b)).toEqual(64);
  }));

  it('testing division', inject([Title], (title:Title) => {
    const a = 8;
    const b = 8;
    expect(title.diviser(a, b)).toEqual(1);
  }));

  it('fail test', ()=> {
    expect(2).toEqual(1);
  })

});

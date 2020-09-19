import { Component, OnInit, Input } from '@angular/core';
import {trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  animations:[
    trigger('menuVisibleAnimation', [
            state('false',
                    style(
                           {
                              opacity: 0,
                              visibility: 'hidden',
                              'z-index': 0,
                              transform : 'translateY(-100%)',

                          }
                        )
                  ),
            state('true',
                   style(
                         {
                            opacity: 1,
                            visibility: 'visible',
                            'z-index': 9999,
                            transform : 'translateY(0%)',

                        }
                      )
                ),
            transition('true<=>false', [animate('700ms ease-in-out')])


    ]
    )
  ]
})
export class SearchBoxComponent implements OnInit {

  isLoading = false;
  _menuvisible = false;

 @Input()
 set menuVisible(value: boolean)
 {
     this._menuvisible = value;
 }
 get menuVisible(): boolean
 {
      return this._menuvisible;
 }
  constructor() { }

  ngOnInit(): void
  {
  }

  searchTextOnKeyupEvent()
  {

    this.isLoading   = true;
    this.menuVisible = !this.menuVisible;
  }

}

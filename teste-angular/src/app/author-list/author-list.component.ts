import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  author = [
    {
      name: 'Ricardo Tadeu',
      surname: 'Sperlongo'
    },
    {
      name: 'Charles Haddon',
      surname: 'Spurgeon'
    },
    {
      name: 'Jonh ',
      surname: 'Papa'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

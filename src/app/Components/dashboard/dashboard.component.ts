import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  value: string = '';
  isFocused: boolean = false;

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private route: Router) { }

  onFocus() {
    this.isFocused = true;
    this.searchInput.nativeElement.focus();
  }

  onBlur() {
    this.isFocused = false;
  }

  clearValue() {
    this.value = '';
  }

  archiveNotes() {
    this.route.navigateByUrl('/home/archives');
  }

  homePage() {
    this.route.navigateByUrl('/home/notes')
  }

  search(event: any) {
    console.log(event.target.value);
    // this.dataService.outgoingData(event.target.value);
  }

  //----------
  goToCart() {
    this.route.navigateByUrl('/bookstore/carts');
  }


}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  counterValue: number = 0;
  constructor(private router: Router, private shared: SharedService) {}
  ngOnInit() {
    this.shared.subject$.subscribe((el: any) => {
      this.counterValue = el
    })
    console.log("counter value in header component", this.counterValue)

  }
  logout() {
    this.router.navigate(['login']);
  }

}

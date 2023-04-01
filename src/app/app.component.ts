import { Component, ViewChild ,AfterViewInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay,filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JobFront';
  adminNav:boolean=false;
  userNav:boolean=false;
  cureentRoute:string=""

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("first init");
  }

  @ViewChild('drawer') drawer: MatSidenav | undefined;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver , private router:Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
            if(event.url.includes("user")){
              console.log(event.url);
              this.adminNav=false;
              this.userNav=true;
              console.log(this.adminNav);
              console.log(this.userNav);
            }else{
              this.adminNav=true;
              this.userNav=false;
              console.log(this.adminNav);
              console.log(this.userNav);
            }
        }
      });

      }

}

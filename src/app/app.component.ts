import { Component, Renderer2 } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loading = true;
  previousUrl: string;

  constructor(private router: Router, private renderer: Renderer2) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;

      if (this.previousUrl) {
        this.renderer.removeClass(document.body, this.previousUrl);
      }
      const currentUrlSlug = routerEvent.url.slice(1) === '' ? 'home' : routerEvent.url.slice(1);
      if (currentUrlSlug) {
        this.renderer.addClass(document.body, currentUrlSlug);
      }
      this.previousUrl = currentUrlSlug;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

}

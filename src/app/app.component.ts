import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- header -->
  <nav class="navbar">

    <!-- logo -->
    <div class="navbar">
      <a class="navbar-item" style="margin: auto;">
        <img src='/assets/EngLabs.jpeg' style="margin-top: 5px; max-width: 100%; max-height: 250px; object-fit: contain; resize: horizontal;">
      </a>
    </div>
  </nav>

  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>

  <!-- footer -->
  <footer class="footer">
  <div class="footer">
  <div class="content has-text-centered">
    <p> <img src='/assets/Univesp_logo.jpg' style="  display: block; margin-left: auto; margin-right: auto;"></p>
    <p style="text-aling: center; margin-left: auto; margin-right: auto;">
      <a href="http://univesp-campinas-pi5-ui.herokuapp.com/">EngLabs</a> <a> 2021 - Universidade Virtual do Estado de São Paulo - Campinas - SP</a>
    </p>
  </div>
  </div>
  </footer>
`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi5-ui';
}

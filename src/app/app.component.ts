import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- header -->
  <nav class="navbar">

    <!-- logo -->
    <div class="navbar">
      <a class="navbar-item">
        <img src='/assets/EngLabs.jpeg' style="  max-width: 100%; height: auto;">
      </a>
    </div>
  </nav>

  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>

  <!-- footer -->
  <footer class="footer">
  <div class="footer">
  <div class="content has-text-centered">
    <p> <img src='/assets/Univesp_logo.jpg'></p>
    <p>
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

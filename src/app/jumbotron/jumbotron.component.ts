import { Component } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

  private jumbotronHeading: string;
  private jumbotronText: string;
  private jumbotronButtonText: string;
  private jumbotronButtonUrl: string;

  constructor() {

    this.jumbotronHeading = "Hello, world!"
    this.jumbotronText = "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
    this.jumbotronButtonText = "Read More"
    this.jumbotronButtonUrl = "http://test.com"

  }

}

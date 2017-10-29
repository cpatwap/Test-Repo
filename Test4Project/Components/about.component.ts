import { Component } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: '../UI/about.html',
})
export class AboutComponent {
    header_title: string;

    constructor() {
        this.header_title = "This is an about page!"
    }

}

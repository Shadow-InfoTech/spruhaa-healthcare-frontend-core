import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent{
    socialDataSet = [
        {'icon' : 'assets/images/others/homepage/footer/social_icon_1.png', 'link' : ''},
        {'icon' : 'assets/images/others/homepage/footer/social_icon_2.png', 'link' : ''},
        {'icon' : 'assets/images/others/homepage/footer/social_icon_3.png', 'link' : ''},
        {'icon' : 'assets/images/others/homepage/footer/social_icon_4.png', 'link' : ''},
    ]
}

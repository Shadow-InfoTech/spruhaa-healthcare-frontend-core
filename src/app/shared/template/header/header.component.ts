import { Component, HostListener } from '@angular/core';
import { ThemeConstantService } from '../../services/theme-constant.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    searchVisible : boolean = false;
    quickViewVisible : boolean = false;
    isFolded : boolean = false;
    isExpand : boolean = false;

    scrolled: boolean = false;

    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.scrolled = window.scrollY > 70;
    }

    constructor( private themeService: ThemeConstantService) {}

    ngOnInit(): void {
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    }

    toggleFold() {
        this.isFolded = !this.isFolded;
        this.themeService.toggleFold(this.isFolded);
    }

    toggleExpand() {
        this.isFolded = false;
        this.isExpand = !this.isExpand;
        this.themeService.toggleExpand(this.isExpand);
        this.themeService.toggleFold(this.isFolded);
    }

    searchToggle(): void {
        this.searchVisible = !this.searchVisible;
    }

    quickViewToggle(): void {
        this.quickViewVisible = !this.quickViewVisible;
    }

    routingDataset = [
        {
            'section' : 'Home',
            'routing' : '/'
        },
        {
            'section' : 'About Us',
            'routing' : '/about-us'
        },
        {
            'section' : 'Career',
            'routing' : '/career'
        },
        {
            'section' : 'Contact Us',
            'routing' : '/contact-us'
        }
    ]
}

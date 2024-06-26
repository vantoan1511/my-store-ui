import {Component} from '@angular/core';
import {faStar, faStarHalfAlt, faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [
        FaIconComponent
    ],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

    selectedIndex = 0;

    selectedColor = -1;

    selectedSize = -1;

    images = [
        'assets/images/product-01.jpg',
        'assets/images/product-01__01.jpg',
        'assets/images/product-01__02.jpg',
        'assets/images/product-01__03.jpg',
    ]

    heroImage = this.images[this.selectedIndex];

    changeHeroImage(thumbnailUrl: string, index: number) {
        this.heroImage = thumbnailUrl;
        this.selectedIndex = index;
    }

    changeSelectedColor(thumbnailUrl: string, index: number) {
        this.changeHeroImage(thumbnailUrl, index);
        this.selectedColor = index;
    }

    changeSelectedSize(index: number) {
        this.selectedSize = index;
    }

    protected readonly faStarHalfAlt = faStarHalfAlt;
    protected readonly faStar = faStar;
    protected readonly faCartPlus = faCartPlus;
}

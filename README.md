# NgComponentCarousel

## Usage

Install `npm i ng-component-carousel`

Import `NgComponentCarouselModule` to your Modules

Now you can use it in the Html.
`<NgComponentCarousel [items]="items"></NgComponentCarousel>`


|Input               |Type           |Description                 |
|--------------------|---------------|----------------------------|
|[items]             |ICarouselItem[]|Items to Display            |
|[interval]          |number         |Carousel interval           |
|[hideButtonsOnHover]|boolean        |Hides buttons on over       |
|[newIndex]          |number         |Select the Item at the Index|
|[pause]             |boolean        |Pauses the interval loop    |


### ICarouselItem

`CarouselComponent` can be used to load any Angular Component
`CarouselHtml` can be used to load raw HTML
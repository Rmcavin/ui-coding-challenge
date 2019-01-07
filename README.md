
# UiCodingChallenge

## About
This app was built in a weekend by Rachel Cavin as part of a prescribed coding challenge. It uses Angular 6, RxJS, D3, and Angular Material as core dependencies. The purpose of this app is to visualize data input by app users in bar charts, bubble charts, and scatter plots. I hope you like it!

## Quick Note
I added a documentation generator called compodoc to this project to give a high-level overview of what I've built. It shows all modules, components, etc and any JSDOC Annotations I wrote to accompany them. You can view it by running `npm run docs`.

## Requirements
Overall I feel I did well on the requirements, given the limitations of the time provided. I think I built a small app that was both creative and technically challenging. Below is a breakdown of each requirement.
* Create an input form using Material and insert the following fields: name, friends, age, weight.
  * I took a bit of creative liberty and added both a first and last name field, totalling 5. Fields have validators that differ depending on the type of input (text/number). Additionally, I added a material data table beneath the form so users can see the available data, as well as the option to clear all entered data. 
  * If I had more time I would have made this section more responsive. I am still learning Material Angular and Sass (which I challenged myself with) so the styling took some getting used to. 
* Save data (in memory) using an Angular service.
  * I used an RxJS subject to store state from the forms. The person.service.ts file is where this logic lives. Each new entry is appended to the previous list, and the subject is updated. This subject is subscribed to in a few places throughout the app so components can get multicasted updates as needed.
  * I wanted to add CRUD operations on each individual entry in the data table, but I didn't end up having time. This would involve splicing the array with data changes and updating the subject again.
* Display results in your choice of visualization using D3.
  * I got a bit inspired on this point and ended up making 3 different visualizations that can be rendered in 13 different ways depending on data provided. The charts I chose were frequency charts, bubble charts, and scatter plots. I made a neat second form in the charts tab that allows users to switch between visualizations easily.
  * If I had more time I would have probably moved the d3 code into a service and cleaned it up a bit. The chart component got pretty cluttered with the 3 different chart types, but I like that one component handles all the charts with a single svg element. I was rusty with d3 so relearning it ate up a lot of the time spent. The axis need labels and the scatter plot needs work too in terms of dependent/independent variables being more intentional.
* BONUS: Write module as an Angular Element.
  * I ran out of time and didn't end up adding this, however I read a few tutorials and it seems straight forward. I had planned on adding validator messages to conditionally appear with different error types, and display them using the element.
* Documentation
  * All throughout the app I wrote JSDOC annotations on functions, and addititional comments where I felt necessary. I like JSDoc annotations because VS Code's intellisense picks them up, so you can easily see function descriptions. I also included compodoc, which is a documentation generator I really like.
* Tests
  * I didn't write nearly as many tests as I would have liked, but I ensured testbeds were configured. I chose to concentrate on the chartsService in particular, because it contains the most critical and testable code. If I had more time, testing definitely would have better coverage.


## CLI Output

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

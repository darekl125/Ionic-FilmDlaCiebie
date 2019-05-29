import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  valueOfSlider=0;

  constructor() { }

    //START years LOV initialization
    yearsMinForm = new FormControl();
    yearsMinTable: string[] = this.getYears();
  
    yearsMaxForm = new FormControl();
    yearsMaxTable: string[] = this.getYears();
    //END years LOV

      //START genres LOV initialization
  movieGenre = new FormControl();
  movieGenreList: string[] = [""]; 
  //END genres LOV

  

  //START countries LOV initialization
  filmCountry = new FormControl();
  filmCountryList: string[] = [""];
  //End - countries LOV

    getYears() :string[] {
      var years :string[] = [];
      for (var i = 1950; i < 2030; i++) {
        years.push(i.toString());
      }
      return years;
    }


  ngOnInit() {
  }

}


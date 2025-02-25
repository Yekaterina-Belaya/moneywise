import {Component, OnInit} from '@angular/core';
import {VacationService} from "../vacation.service";

@Component({
  selector: 'mw-vacation-table',
  standalone: true,
  imports: [],
  templateUrl: './vacation-table.component.html',
  styleUrl: './vacation-table.component.scss'
})
export class VacationTableComponent implements OnInit{
  result = 0;
constructor(private _api: VacationService) {
}

ngOnInit() {
  this._api.getSum(1, 2).subscribe((data) => {
    console.log(data)
    this.result = data.result;
  })
}

}

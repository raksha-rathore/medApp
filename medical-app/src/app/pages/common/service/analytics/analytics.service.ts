import { Injectable } from '@angular/core';

@Injectable()
export class AnalyticsService {
    getLineChartData() {
        let _data:Array<any>= ([
            {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
            {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
            {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
          ]);
        for (let i = 0; i < _data.length; i++) {
            _data[i] = {data: new Array(_data[i].data.length), label: _data[i].label};
            for (let j = 0; j < _data[i].data.length; j++) {
                _data[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        return _data;
    }
    getLineChartLabels() {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    }
    getColorProps() {
        return [
            { // grey
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            { // dark grey
              backgroundColor: 'rgba(77,83,96,0.2)',
              borderColor: 'rgba(77,83,96,1)',
              pointBackgroundColor: 'rgba(77,83,96,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            { // grey
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
    }

    getBarChartData() {
      let barData =  [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
      ];
      let data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
      let clone = JSON.parse(JSON.stringify(barData));
      clone[0].data = data;
      return clone;
    }
    getBarChartLabels() {
      return ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    }
    getDoghnutChartLabels() {
      return  ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    }
    getDoghnutChartData() {
      return [350, 450, 100];
    }

}

import {padZero, getMonthName} from '../utils';

type detail = {key: string, value: string};
export class Exam{
  private details: detail[] = [];
  constructor(private code: string,
              private title: string,
              private datetime: Date,
              details?: detail[]) {
    this.details = details || [];
  }

  public getCode(): string{
    return this.code;
  }
  
  public getTitle(): string{
    return this.title;
  }

  public getDatetime(): Date{
    return this.datetime;
  }

  public getDate(): string{
    let d = this.datetime;
    return padZero(d.getDate(), 2) + ' '
           + getMonthName(d.getMonth()) + ' '
           + padZero(d.getFullYear(), 2);
  }

  public getTime(): string{
    let d = this.datetime;
    return padZero(d.getHours(), 2) + ':' + padZero(d.getMinutes(), 2);
  }

  public getDetails(): detail[]{
    return this.details;
  }

  public getDetail(key: string): string{
    let d = this.details.filter(({key: k}) => (k == key))[0]
    return d? d.value: null;
  }

  public addDetail(key: string, value: string): boolean{
    // check if key already exist
    if(this.getDetail(key)){
      console.error("Attempt to add detail with key already exists");
      return false;
    }
    this.details.push({
      key: key,
      value: value
    });
    return true;
  }
}

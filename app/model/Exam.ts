type detail = {key: string, value: string};
export class Exam{
  private details: detail[] = [];
  constructor(private code: string,
              private title: string,
              private datetime: Date) { }

  getCode(): string{
    return this.code;
  }
  
  getTitle(): string{
    return this.title;
  }

  getDatetime(): Date{
    return this.datetime;
  }

  getDetails(): detail[]{
    return this.details;
  }

  addDetail(key: string, value: string): boolean{
    // check if key already exist
    if(this.details.filter(({key: k}) => (key == k)).length > 0){
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

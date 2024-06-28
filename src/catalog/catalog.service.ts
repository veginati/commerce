import { Injectable } from '@nestjs/common';

@Injectable()
export class CatalogService {
  getHello(): string {
    return 'Hello World!';
  }
  getData():Catalog{
    const tempMap:Map<string,string> = new Map();
    const catlaog:Catalog = {id:"test_catalog", name:'catalog_name', senstive:'defined'};
    return catlaog;
  }
}

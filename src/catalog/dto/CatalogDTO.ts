import { Expose } from "class-transformer";


export class CatalogResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

}
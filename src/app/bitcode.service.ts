import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BannerImage } from './model/banner-image';
import { CardData } from './model/card-data';

@Injectable({
  providedIn: 'root'
})
export class BitcodeService {

  private _url="./assets/data/courseData.json";
  private _advantageUrl="./assets/data/cardData.json";
  private _bannerImagesUrl="./assets/data/banner-images.json";
  constructor(private _http:HttpClient) { }

  getData():Observable<any>{
    return this._http.get<any>(this._url);
  }

  getCardData():Observable<CardData[]>{
    return this._http.get<CardData[]>(this._advantageUrl);
  }
  

  getBannerImages():Observable<BannerImage[]>{
    return this._http.get<BannerImage[]>(this._bannerImagesUrl);
  }


}

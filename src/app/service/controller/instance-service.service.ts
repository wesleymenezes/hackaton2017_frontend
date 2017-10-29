import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Instance } from '../../model/controller/instance';

import { environment } from '../../../environments/environment';

@Injectable()
export class InstanceService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl = environment.baseURL + '/api/core/v1/customers';

  //url = 'http://localhost:8080/EricssonElasticBilling-0.0.1-SNAPSHOT/api/controller/v1/nodes';

  constructor(private http:Http) { }

  getInstancesWithObservable(typeOfInstance : String): Observable<Instance[]> {
    //verificar se o tipo é diferente de null para fazer append
    //e.g. ?type=bscs_billing
    
    console.log(`log:[instance service called '${typeOfInstance}']`);

    let fullUrl = this.baseUrl + '?type=' + typeOfInstance;
    //fullUrl = "assets/apidata/instancedata.json";

    console.log(`log:[instance service called '${fullUrl}']`);

    return this.http.get(fullUrl)
                  .map( (response:Response) => response.json())
                  .catch(this.handleErrorObservable);

/*
    return this.http.get(fullUrl)
                  .map(result => result.json()).map((m: any) => new Instance(m.tenantId, m.name))
                  .catch(this.handleErrorObservable);
*/

//.map(result => new Instance(result.json().tenantId, result.json().name))

/*
https://stackoverflow.com/questions/39609823/cant-get-observable-mapping-from-json-to-object-to-work

  const movieInformationUrl = (imdbId) => `http://www.omdbapi.com/?i=${imdbId}`;
  
  return this.http.get(movieInformationUrl(movie.imdbID)).map(result => result.json())
              .map((m: any) => new MovieInformation(m.imdbID, m.Title, m.Year, m.Genre, m.Runtime, m.Poster, m.Director,
              m.Writer, m.Actors, m.Plot, m.Metascore, m.imdbRating, m.imdbVotes, m.Type, movie.favorite))
          .catch(this.handleError);

  or

  return this.http.get(movieInformationUrl(movie.imdbID))
              .map(result => new MovieInformation(result.json().imdbID, result.json().Title...

  or

  quando o json é exatamente a hierarquia de classes criadas, nesse caso é direto (object notation!)
  e.g. bsucService.getBsucs().subscribe(response=>{this.bsucs = response.json();});
*/
  }

  getInstancesWithPromise(typeOfInstance : String): Promise<Instance[]> {
    //verificar se o tipo é diferente de null para fazer append
    //e.g. ?type=bscs_billing

    console.log(`log:[instance service called '${typeOfInstance}']`);

    let fullUrl = this.baseUrl + '?type=' + typeOfInstance;

    console.log(`log:[instance service called '${fullUrl}']`);


console.log("::::::") ;
this.http.get(fullUrl).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
console.log("::::::") ;

    return this.http.get(fullUrl).toPromise()
    .then(response => response.json().data as Instance[])
    .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || {};
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}

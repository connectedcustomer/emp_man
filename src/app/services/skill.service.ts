import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
 
  

  constructor(private http: HttpClient) { }


  private baseURL = 'http://localhost:8080/api/skills';

  createSkill(skill: Object): Observable<Object>{
    return this.http.post(this.baseURL + '/create', skill);
  }

  getAllSkills(): Observable<any>{
    return this.http.get(this.baseURL);
  }

  
}



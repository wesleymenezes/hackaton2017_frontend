import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Instance } from '../../../model/controller/instance';
import { InstanceService } from '../../../service/controller/index';

@Component({
  providers: [InstanceService],
  selector: 'app-home-instance-controller-panel',
  templateUrl: './home-instance-controller-panel.component.html',
  styleUrls: ['./home-instance-controller-panel.component.css']
})
export class HomeInstanceControllerPanelComponent implements OnInit{
  instances = [];
  errorMessage: String;
  type: any;

  constructor(private instanceService: InstanceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.type = params['type'];
       this.fetchInstances();
    });
  }

  fetchInstances(): void {
    this.instanceService.getInstancesWithObservable(this.type)
                      .subscribe( instances => this.instances = instances,
                      error => this.errorMessage = <any>error);
   }

}

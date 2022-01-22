import { Component, OnInit } from '@angular/core';
import { Show } from 'src/models/Show';
import { ShowsService } from 'src/services/shows.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.css']
})
export class ShowDeleteComponent implements OnInit {

  id?: string | null = '';
  show!: Show;

  constructor(private showsService: ShowsService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id !== null) {
      this.show = await this.showsService.getShowById(this.id);
    }
  }

  async deleteShow(){
    this.id = this.route.snapshot.paramMap.get('id');
    await this.showsService.deleteShow(this.id!)

    this.router.navigateByUrl("/shows");
  }
}

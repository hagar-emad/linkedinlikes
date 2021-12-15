import { Component, OnInit } from '@angular/core';
import { footer } from 'src/app/_models/footer.model';
import { LayoutFooterService } from 'src/app/_services/layout-footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
footerDetail!:footer[];
  constructor(private Footer:LayoutFooterService) { }

  ngOnInit(): void {
    this.footerDetail=this.Footer.getAllFooter();
  }

}

import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from '../../core/domain/loggedin.user';
import { AuthenService } from '../../core/services/authen.service';
import { UtilityService } from '../../core/services/utility.service';
import { SystemConstants } from '../../core/common/system.constants';
import { UrlConstants } from '../../core/common/url.constants';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public user: LoggedInUser;
  constructor(private _authenService: AuthenService, private _ultilityService: UtilityService) { }

  ngOnInit() {
    this.user = this._authenService.getLoggedInUser();
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this._ultilityService.navigate(UrlConstants.LOGIN);
  }
}
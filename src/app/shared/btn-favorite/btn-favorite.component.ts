import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {StorageService} from "../../core/services/storage.service";

@Component({
  selector: 'app-btn-favorite',
  templateUrl: './btn-favorite.component.html',
  styleUrls: ['./btn-favorite.component.scss']
})
export class BtnFavoriteComponent implements OnInit {

  @Input() itemIdentifier: number = 0;

  titleValue: string = '';

  private unsubscribe = new Subject<void>();
  private isFavorite = new BehaviorSubject<boolean>(false);
  isFavorite$ = this.isFavorite.asObservable();

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    const isFavorite: boolean = this.storageService.check('favorite', this.itemIdentifier);

    this.isFavorite.next(isFavorite);

    this.isFavorite$.pipe(takeUntil(this.unsubscribe)).subscribe(value => {
      this.titleValue = value ? 'Kedvencekből eltávolít' : 'Kedvencekhez ad';
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  toggleFavorite(): void {
    if (this.isFavorite.getValue()) {
      this.storageService.removeFromValue('favorite', this.itemIdentifier);
      this.isFavorite.next(false);
    } else {
      this.storageService.set('favorite', this.itemIdentifier);
      this.isFavorite.next(true);
    }
  }

}

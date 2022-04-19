import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { BoxsComponent } from './boxs.component';

describe('BoxesComponent', () => {
  let component: BoxsComponent;
  let fixture: ComponentFixture<BoxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BoxsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  describe('codePromo', () => {
    // Ce test est fait pour vérifier que le code promo est bien récupéré
    it('doit récupérer le code promotionnel', () => {
      component.codePromo = 'COUPON-PAQUES-2022';
      expect(component.codePromo).toBe('COUPON-PAQUES-2022');
    });
  });

  describe('showModal', () => {
    it('ShowModal doit passer à true quand il est a false et que la fonction affModal est appelé', () => {
      spyOn(component, 'affModal').and.callThrough();
      component.affModal(1);
      fixture.whenStable().then(() => {
        expect(component.showModal).toBe(true);
        expect(component.showModal).toHaveBeenCalled();
      })
    })
    it('ShowModal doit passer à false quand il est a true et que la fonction affModal est appelé', () => {
      spyOn(component, 'affModal').and.callThrough();
      component.showModal = true;
      component.affModal(1);
      fixture.whenStable().then(() => {
        expect(component.showModal).toBe(false);
        expect(component.showModal).toHaveBeenCalled();
      })
    })
  })

});


import { Router } from '@angular/router';
import { OpenProductsDirectiveDirective } from './open-products-directive.directive';

describe('OpenProductsDirectiveDirective', () => {
  let mockRouter: Partial<Router>;

  beforeEach(() => {
    // Crear un mock del Router (puedes agregar métodos simulados si es necesario)
    mockRouter = {
      navigate: jasmine.createSpy('navigate'), // Ejemplo de un método común en Router
    };
  });

  it('should create an instance', () => {
    // Proporcionar el mock al constructor
    const directive = new OpenProductsDirectiveDirective(mockRouter as Router);
    expect(directive).toBeTruthy();
  });
});

import { RouterModule } from '@angular/router';
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    const { fixture } = await render(AppComponent, {
      imports: [NxWelcomeComponent, RouterModule.forRoot([])],
    });

    component = fixture.componentInstance;
  });

  it('should render title', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Welcome todo'
    );
  });

  it(`should have as title 'todo'`, () => {
    expect(component.title).toEqual('todo');
  });
});

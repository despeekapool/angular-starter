import { AppComponent } from './app.component';
import { MockBuilder, MockRender, MockedComponentFixture, ngMocks } from 'ng-mocks';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture<AppComponent>;

  beforeEach(async () => {
    await MockBuilder(AppComponent, AppModule);
    fixture = MockRender(AppComponent);
  });

  test('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  test(`should have as title 'angular-starter'`, () => {
    expect(fixture.componentInstance.title).toEqual('angular-starter');
  });

  test('should render title', () => {
    expect(ngMocks.formatText(ngMocks.find('.content span'))).toEqual('angular-starter app is running!');
  });
});

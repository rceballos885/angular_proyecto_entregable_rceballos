import { Bigtitle } from '../../shared/directives/bigtitle';

describe('Bigtitle', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as any;
    const mockRenderer2 = { setStyle: () => {}, removeStyle: () => {} } as any;
    const directive = new Bigtitle(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});

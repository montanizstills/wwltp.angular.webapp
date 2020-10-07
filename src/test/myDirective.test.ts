import { TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MyDirective } from 'src/app/directives/myDirective.directive';


beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [
            MyDirective,
            HeaderComponent
        ]
    })
})

test("myDirective", () => {

    TestBed.overrideComponent(HeaderComponent, {
        set: {
            template: '<p appMyDirective>'
        }
    })

    TestBed.compileComponents().then(()=>{
        const fixture = TestBed.createComponent(HeaderComponent)
        const directiveInstance = fixture.debugElement.query(By.directive(MyDirective)).injector.get(MyDirective)
        expect(directiveInstance.isCategory).toBe(true)
    })

  /*  //given
    var expected = new HTMLElement();
    var expectedAttributeName = 'color'
    var expectedAttributeValue = 'red'
    expected.setAttribute(expectedAttributeName, expectedAttributeValue)
    console.log(expected.getAttribute(expectedAttributeName))

    //when
    // <p appMyDirective> --  appMyDirective returns header.component.sccs's is-category
    var actual = new HTMLElement();
    // new MyDirective().isCategory
    actual.setAttribute()

    //then
    // expect p class to be red; <p>.getCSSClass() -> appMyDirective.__className.color -> 'red'
    // expect(<p>).toBe(red)
    expect(actual).toHaveProperty(expectedAttributeName, expectedAttributeValue);

    */
});

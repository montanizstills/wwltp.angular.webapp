const myDirective = require('../app/directives/myDirective.directive')

test("myDirective", () => {

    //given
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

});

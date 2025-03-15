class Base extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<p>sasas</p>";
    }
}

let elements = document.getElementsByTagName("myelem");

Array.from(elements).forEach(element => {
    Object.setPrototypeOf(element, Base.prototype);
    element.connectedCallback(); 
});

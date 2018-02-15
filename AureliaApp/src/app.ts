import {Hello} from "library/Hello";

export class App {
  message = 'Hello World!';

  action() {
    let a = new Hello();
    a.helloWorld();
  }
}

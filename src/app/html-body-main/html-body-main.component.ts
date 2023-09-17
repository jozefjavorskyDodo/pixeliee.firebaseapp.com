import { Component } from "@angular/core";

@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html",
  styleUrls: ["./html-body-main.component.css"]
})


export class HtmlBodyMainComponent {

  click_func(): void {

    let cells: any = document.querySelectorAll(<string>"td");

    [...cells].forEach(c => {
      c.style.backgroundColor =
        <string>"rgb("
        +
        String(Number((<number>Math.floor(<number>Math.random() * <number>256))))
        +
        <string>", "
        +
        String(Number((<number>Math.floor(<number>Math.random() * <number>256))))
        +
        <string>", "
        +
        String(Number((<number>Math.floor(<number>Math.random() * <number>256))))
        +
        <string>')';
    });

  };

}

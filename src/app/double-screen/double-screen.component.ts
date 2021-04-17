import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-double-screen',
  templateUrl: './double-screen.component.html',
  styleUrls: ['./double-screen.component.scss']
})
export class DoubleScreenComponent implements OnInit {
  @ViewChild("shownOnSecondScreen") shownOnSecondScreen: TemplateRef<any>;
  text: string;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  displayTextAnotherScreen() {
    const doc = open("", "print", 'height=650,width=900,top=100,left=150');
    const embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.shownOnSecondScreen);
    for (const rootNode of embeddedViewRef.rootNodes) {
      doc.document.body.appendChild(rootNode);
    }
  }

  public ngAfterViewInit(): void {
   this.displayTextAnotherScreen()
  }
}

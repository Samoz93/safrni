export class AccordionListItem {
  options: AccordionListItemOption[];

  constructor(options: AccordionListItemOption[]) {
    this.options = options;
  }
}

export class AccordionListItemOption {
  label: string;
  id: string;

  constructor(id: string, label: string) {
    this.id = id;
    this.label = label;
  }
}

export interface Items {
  tag: string;
  classItem: string;
  id: string;
  animated?: string;
  tooltip?: string;
  subItems?: Items[];
}

export interface Help {
  selector: string;
  title: string;
  syntax: string;
  description: string;
  examples: string;
}

export interface Levels {
  levelId: number;
  levelName: string;
  task: string;
  answer: string;
  help: Help;
  items: Items[];
}

export interface Storage {
  [key: number]: Status;
}

export interface Status {
  passed: boolean;
  withHelp: boolean;
}

export enum Constants {
  asideTitle = 'Choose a level',
  fieldNumbers = '1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>18<br/>19<br/>20',
  descriptionEditor = '{<br/>/* Styles would go here. */<br/>}',
  helpEditor = '<br/>/* <br/>Type "help" to show answer. <br/>*/',
  skipEditor = '<br/>/* <br/>Type a number to skip to a level.<br/>Ex &rarr; "5" for level 5 <br/>*/',
  markupHeader = '<div class="table">',
  markupFooter = '</div>',
  examplesTitle = 'Examples:',
  useHelp = 'Use the Help button or type "help" in the input box to see the correct answer.:',
}

export enum Editor {
  id = 'editor',
  titleHeader = 'CSS Editor',
  fileName = 'style.css',
}

export enum Viewer {
  id = 'viewer',
  titleHeader = 'HTML Viewer',
  fileName = 'table.html',
}

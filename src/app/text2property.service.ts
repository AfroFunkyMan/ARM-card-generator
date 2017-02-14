import { Injectable } from '@angular/core';

import { PropertyLine } from './property-line';
import { PROPERTY_LINES } from './property-lines';

@Injectable()
export class Text2propertyService {
  getText(): PropertyLine[] {
    return PROPERTY_LINES;
  } //TargetProp

  constructor() {
  }
}


  //todo text from textarea tag from @textarea.component via onKey() event
      //todo getData()
      //getData() --> findBrackets() --> genericNewArrayOfList() --(send to @setting.component)-->
      //                                                                      |
      //                                                                      V
      //    text2prop. + setting.targetprop --> setting.targetprop = text2prop.TargetProp


  //todo transfer methods from @textarea.component to this class (finding brackets, generic new list array and so on)
  //todo send new list to @setting.component

/* TODO perenesti vsju logiku v service */
// views/top.js
import {JetView} from "webix-jet";
import {data} from "models/records";

export default class TopView extends JetView {
    config(){
        return {
          rows:[
            /*{view:"datatable", autoConfig:true, localId:"header",
             data:[
              { id:"title", header:"Film title", fillspace:true },
              { id:"year", header:"Released", width:80 },
              { id:"votes",	header:"Votes", width:100 },
              { id:"rating", header:"Rating", width:100 },
              { id:"dummy", header:"Dummy column", width:100, hidden:true }
               ]},*/{
          
            cols:[
              {view:"datatable",
              autoConfig:true,
              localId:"body",
              data:data}

            ]}
          ]
            
        };
    }
    init(view){
		view.parse(data);
	}
   init(){
        const context = this.ui({
            view:"contextmenu", localId:"context",
            data:[
                {value:"Product", icon:"wxi-eye"},
                {value:"Quantity", icon:"wxi-eye"},
                {value:"UoM",icon:"wxi-eye"},
                {value:"Price",icon:"wxi-eye"},
                {$template:"Separator" },
                {value:"Info",icon:"wxi-eye"}]
        });
        context.attachTo(this.$$("body").getNode());
    }
}
// views/top.js
import {JetView} from "webix-jet";
import {data} from "models/records";

export default class TopView extends JetView {
    config(){
        return {
            view:"datatable",
            autoConfig:true,
            localId:"body",
            data:data
            
        };
    }
    init(view){
		view.parse(data);
	}
   init(){
        const context = this.ui({
            view:"contextmenu", localId:"context",
            data:[
                {value:"Add", icon:"wxi-eye"},
                {value:"Rename", icon:"wxi-pencil"},
                {value:"Delete",icon:"wxi-trash"},
                { $template:"Separator" },
                {value:"Info",icon:"wxi-trash"}]
        });
        context.attachTo(this.$$("body").getNode());
    }
}
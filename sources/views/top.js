import {JetView, plugins} from "webix-jet";



export default class TopView extends JetView{
	config(){
		var header = {
			type:"header", template:"WEBIX_BEAST", css:"webix_header app_header"
		};

		var menu = {
			view:"menu", id:"top:menu", 
			css:"app_menu",
			width:180, layout:"y", select:true,  subMenuPos:"right",
			template:"<span class='webix_icon #icon#'></span> #value# ",
			data:[
				{ value:"Dashboard", id:"editor", icon:"wxi-columns" },
				{ value:"Product", id:"main", icon:"wxi-folder"},
				//{ value:"NIC Editor",		 id:"editor",  icon:"wxi-close" },
				//{ value:"#",		 id:"product",  icon:"wxi-pencil" },
				//{ value:"Data",		 		 id:"data", 	icon:"wxi-pencil" }
			]
		};

		var ui = {
			type:"clean", paddingX:5, css:"app_layout", cols:[
				{  paddingX:5, paddingY:10, rows: [ {css:"webix_shadow_medium", rows:[header, menu]} ]},
				{ type:"wide", paddingY:10, paddingX:5, rows:[
					{ $subview:true } 
				]}
			]
		};

		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}
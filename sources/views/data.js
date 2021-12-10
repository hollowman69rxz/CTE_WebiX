import {JetView} from "webix-jet";
import {data} from "models/records";

export default class DataView extends JetView{
	config(){
		var columns = [
			{id:"Product", header:"Product", fillspace:true },
			{ header:"Quantity", width:80 },
			{ header:"UoM", width:100 },
			{ header:"Price", width:100 },
			{ header:"Dummy column", width:100, hidden:true }
		  ];

		return{
				view:"datatable",
				id:"grid",
				columns:webix.copy(columns),
				autoheight:true,
				scroll:false,
				headermenu:true,
				data:data
				
		
		}
		  
	}
	init(view){
		view.parse(data);
	}
}
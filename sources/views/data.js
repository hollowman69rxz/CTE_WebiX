import {JetView} from "webix-jet";
import { data } from "../models/records";

export default class LayoutView extends JetView {
	config(){ 
		return{
			view:"datatable",     
                  id:"item_list",  
				  headermenu:{
					view:"popup",
  id:"my_pop",
  width:300,
  body:{
    view:"list", 
    data:[
      {id:"1", name:"Zoo", location: "New York"},
      {id:"2", name:"Coffeebar", location:"Salt Lake City"},
      {id:"3", name:"Teeparty", location:"Alabama"}
    ],
    template:"#name# - #location#",
    autoheight:true,
    select:true
  }
				},
                  scroll:"y",     
                  autoConfig: true,     
                  data:data,
                  on:{
                        onHeaderClick(id){
                        let values = $$("itemlist").getValues(id);
						$$("itemlist").getPopup();
                        }
                     }
		}
				  
	}
	init(view){
		view.parse(data);

	}
	
}
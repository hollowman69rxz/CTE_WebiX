import {JetView} from "webix-jet";

export default class DataView extends JetView{
	config(){
		return {
      
      type:"space", rows:[
        { template:"NIC Editor", type:"header" },
        { 
          id:'editor2', 
          config:{ fullPanel : true }, 
          view:"nic-editor"
        }
      
          ]};
	}
	
}
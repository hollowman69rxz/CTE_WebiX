import {JetView, plugins} from "webix-jet";
import { data } from "../models/records";


export default class TopView extends JetView{
    config(){
    return{
        responsive:"a1",
        rows:[         
            {view:"toolbar",             
            css:"webix_dark",             
            cols:[                 
                {},                 
                {},                 
                {height: 40, type:"icon", icon:"wxi-user",  view:"button",  label:"Profile", width:100, css:"webix_transparent"}             
                 ]
            },
                          
            {cols:[             
                {view:"form", 
                id:'item_form', 
                width: 350,
                height: 515, 
                elements:[    
                        { view:"text", name:"Product", label:"Product" },     
                        { view:"text", name:"Quantity", label:"Quantity" },     
                        { view:"text", name:"UoM", label:"UoM" },     
                        { view:"text", name:"Price", label:"Price" },    
                        { cols:[                 
                                { view:"button", value:"Create",click:addData},                 
                                { view:"button", value:"Update",click:function(id) {
                                    var form = $$(id).getFormView();
                                    var values = form.getValues();
                                    $$("item_list").updateItem(values.id, values);
                                    webix.message("Successful, Update A Product!");
                                    $$("item_form").clear();
                                  }},
                                { view:"button", value:"Delete",click:removeData}        
                               ]
                        }
                        ],
                        
                },

                //Table Items beside Input Form             
                { view:"datatable",     
                  id:"item_list",     
                  scroll:"y",     
                  autoConfig: true,     
                  data:data,
                  on:{
                        onAfterSelect(id){
                        let values = $$ ("item_list").getItem(id);
                        $$("item_form").setValues(values)
                        }
                     }
                }
                //End Table Items
                ]
                
            }, 
            {cols:[ 
                {
                    height: 50, 
                    template:"The software is provided by <a href='#'>webix.com</a>. All rights reserved (c)", 
                    css:"center_text"
                } 
            ]}   
            
        ]
         
    }

    function addData(){

        var values = $$("item_form").getValues();
        $$("item_list").add(
            {
                Product:values.Product,
                Quantity:values.Quantity,
                UoM:values.UoM,
                Price:values.Price
              }, 0);
              $$("item_form").clear();
              webix.message("Successful, New Product Added!");    
      }

     

      function removeData(){
        if(!$$("item_list").getSelectedId()){
          webix.message("No item is selected!");
          return;
        }
        $$("item_list").remove($$("item_list").getSelectedId());
        $$("item_form").clear();
        webix.message("Successful, Delete a Product!");
      }

    }
}
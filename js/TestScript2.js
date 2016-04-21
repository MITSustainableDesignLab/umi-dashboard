var array_single_value_measures = [];
var header = [];
var divider = [];





//Load data from external JSON file 

setTimeout(function() {
        parseJSON(example_json);
    }, 1000);


///Parseing JSON into OO Schema///
function parseJSON(data) {


	for (i = 0; i < data.header.length; i++) {
            
            var head = new headerObj();
            head.display_name = data.header[i].display_name;
            head.hname  = data.header[i].name;
            head.htype  = data.header[i].type;
            if(head.htype == "time_series")
            default_index = i;
            head.unit   = data.header[i].unit;
            head.range  = data.header[i].range;
            //------------------------------------------------
            head.description = data.header[i].description;
            head.levels = data.header[i].levels;
            head.nlevels = data.header[i].nlevels;
            //------------------------------------------------
            head.nCatogeries = data.header[i].nCatogeries
            head.catogeries_display_name = data.header[i].catogeries_display_name
            head.catogeries = data.header[i].catogeries
            head.time_step = data.header[i].values_in_categories
            headers.push(head);
            array_single_value_measures[i] = [];
        }
	
		



		}
}





function MakeChart(){
	
	setTimeout(function() {
		
		var lables = [];








		$(function () { 
    		$('#container').highcharts({
        		chart: {
            		type: 'bar'
        		},
        		title: {
            		text: 'Fruit Consumption'
        		},
        		xAxis: {
            		categories: lables
        		},
        		yAxis: {
            		title: {
                		text: 'Fruit eaten'
                	}
                },
        		series: [{
            		name: 'Jane',
            		data: [1, 0, 4]
        		}, {
            		name: 'John',
            		data: [5, 7, 3]
        		}]
    		});
		});
	}, 2000);
}

MakeChart();
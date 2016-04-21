var headers = [];

var buildings = [];
var array_bname = [];
var array_wwr = [];
var array_area = [];
var array_bid = [];



var array_single_value_measures = [];
var headers = [];

var array_oe = [];
var array_oe_norm = [];
var array_temp_dup = [];


var array_temp_oe = [];
var array_temp_oe_co = [];
var array_temp_oe_he = [];
var array_temp_oe_el = [];
var array_temp_oe_eq = [];
var array_temp_oe_norm = [];
var array_temp_oe_co_norm = [];
var array_temp_oe_he_norm = [];
var array_temp_oe_el_norm = [];
var array_temp_oe_eq_norm = [];


function headerObj() {
   this.display_name
   this.hname;
   this.htype;
   this.hvalue;
   this.unit;
   this.range;
   this.description;
   this.levels;
   this.nlevels;
   this.nCatogeries;
   this.catogeries_display_name;
   this.catogeries;
   this.time_step;
}


function bldDataObj() {
    this.bid;
    this.bname;
    this.area;
    this.coordinates;
    this.wwr;
    this.wwr_n;
    this.wwr_s;
    this.wwr_w;
    this.wwr_e;
    this.temp;
    this.utype;
    this.oe;
    this.oe_norm;
    this.oe_eq;
    this.oe_eq_norm;
    this.oe_el;
    this.oe_el_norm;
    this.oe_he;
    this.oe_he_norm;
    this.oe_co;
    this.oe_co_norm;
    this.single_value_measure;
    this.time_series_measure;
    this.time_series_measure_sum;
    this.time_series_measure_sum_categories;
}

function prDataObj() {

    this.pname;
    this.plocation;
    this.avg_single_value_measures
    this.max_single_value_measures
    this.min_single_value_measures
}





////// Useful Functions ////////

function roundToOne(num) {
    return +(Math.round(num + "e+1") + "e-1");
}

function MaxArray(array) {
    return Math.max.apply(null, array);
};

function MinArray(array) {
    return Math.min.apply(null, array);
};



/////Load data from external JSON file 

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
                head.description = data.header[i].description;
                head.levels = data.header[i].levels;
                head.nlevels = data.header[i].nlevels;
                head.nCatogeries = data.header[i].nCatogeries
                head.catogeries_display_name = data.header[i].catogeries_display_name
                head.catogeries = data.header[i].catogeries
                head.time_step = data.header[i].values_in_categories
                headers.push(head);
                array_single_value_measures[i] = [];
             }

for (i = 0; i < data.features.length; i++) {

            var bld = new bldDataObj();

            bld.bid = data.features[i].id;

            if (data.features[i].properties.Name === undefined) {
                bld.bname = "Bldg_" + i;
            } else {
                bld.bname = data.features[i].properties.Name;
            }

            bld.area = Math.round(data.features[i].properties.GrossFloorArea);

            bld.wwr_n = data.features[i].properties.WwrN;
            bld.wwr_s = data.features[i].properties.WwrS;
            bld.wwr_e = data.features[i].properties.WwrE;
            bld.wwr_w = data.features[i].properties.WwrW;

            bld.wwr = roundToOne((bld.wwr_n + bld.wwr_s + bld.wwr_e + bld.wwr_w) / 4);

            bld.geometry = data.features[i].geometry;

            bld.temp = data.features[i].properties.UseType;
            bld.temp_name = data.features[i].properties.TemplateName;

            bld.oe_eq = [];
            bld.oe_el = [];
            bld.oe_he = [];
            bld.oe_co = [];
             
        
            bld.single_value_measure = [];
            
            bld.time_series_measure = [];
            bld.time_series_measure_sum = [];
            bld.time_series_measure_sum_categories = [];
            for (j = 0; j < headers.length; j++) {

            // Defining Performance Measures of Time Series Type Dynamically Here
                if(headers[j].htype == "time_series"){
                    bld.time_series_measure[j] = [];
                    bld.time_series_measure_sum[j] = 0
                    bld.time_series_measure_sum_categories[j] = [];
                    for (ii = 0; ii < headers[j].nCatogeries; ii++){
                        bld.time_series_measure[j][ii] = [];
                        bld.time_series_measure_sum_categories[j][ii] = 0;
                    }
                    for (ii = 0; ii < headers[j].nCatogeries; ii++){
                        for (k = 0; k < headers[j].time_step; k++) {
                            bld.time_series_measure[j][ii].push(Math.round(data.features[i].properties[headers[j].catogeries[ii]][k]));
                            bld.time_series_measure_sum_categories[j][ii] += bld.time_series_measure[j][ii][k]
                        }
                    }
                    for (ii = 0; ii < headers[j].nCatogeries; ii++){
                        bld.time_series_measure_sum[j] += bld.time_series_measure_sum_categories[j][ii]
                    }
                    bld.single_value_measure.push(bld.time_series_measure_sum[j])
                }
            
            // Defining Performance Measures of Single Value Type Dynamically Here
            
                else {
                    if(headers[j].hname == "LCEnergy" || headers[j].hname == "LCCarbon")
                        bld.single_value_measure.push(Math.round(data.features[i].properties[headers[j].hname] / data.features[i].properties.LCLength) || null)
                    else
                       bld.single_value_measure.push(data.features[i].properties[headers[j].hname] || null)
                }
            }
            
            // set missing values to NULL instead of UNDEFINED, otherwise Highcharts messes up spider chart
            bld.mo_walk = data.features[i].properties.MOWalkability || null;
            bld.mo_bike = data.features[i].properties.MOBikeability || null;
            bld.oc = data.features[i].properties.OC || null;
            bld.da = data.features[i].properties.DaylitArea || null;

            bld.lc_en = Math.round(data.features[i].properties.LCEnergy / data.features[i].properties.LCLength) || null;
            bld.lc_ca = Math.round(data.features[i].properties.LCCarbon / data.features[i].properties.LCLength) || null;


            for (j = 0; j < 12; j++) {

                bld.oe += Math.round(bld.oe_eq[j]);
                bld.oe += Math.round(bld.oe_el[j]);
                bld.oe += Math.round(bld.oe_he[j]);
                bld.oe += Math.round(bld.oe_co[j]);

                bld.oe_co_all += Math.round(bld.oe_co[j]);
                bld.oe_he_all += Math.round(bld.oe_he[j]);
                bld.oe_el_all += Math.round(bld.oe_el[j]);
                bld.oe_eq_all += Math.round(bld.oe_eq[j]);
            }

            bld.oe_co_norm = [];
            bld.oe_he_norm = [];
            bld.oe_el_norm = [];
            bld.oe_eq_norm = [];

            bld.oe_norm = roundToOne(bld.oe / bld.area);


            for (j = 0; j < 12; j++) {

                var oe_co_norm_temp = roundToOne(bld.oe_co[j] / bld.area);
                var oe_he_norm_temp = roundToOne(bld.oe_he[j] / bld.area);
                var oe_el_norm_temp = roundToOne(bld.oe_el[j] / bld.area);
                var oe_eq_norm_temp = roundToOne(bld.oe_eq[j] / bld.area);

                bld.oe_co_norm.push(oe_co_norm_temp);
                bld.oe_he_norm.push(oe_he_norm_temp);
                bld.oe_el_norm.push(oe_el_norm_temp);
                bld.oe_eq_norm.push(oe_eq_norm_temp);
            }

            buildings.push(bld);
        }


        for (i = 0; i < buildings.length; i++) {
            array_bname.push(buildings[i].bname);

            array_wwr.push(buildings[i].wwr);
            array_area.push(buildings[i].area);

            array_bid.push(buildings[i].bid);

            array_oe.push(buildings[i].oe);
            array_oe_norm.push(roundToOne(buildings[i].oe / buildings[i].area));

            //--------------- Dynamic ------------------
            for (j = 0; j < headers.length; j++) {
                array_single_value_measures[j].push(buildings[i].single_value_measure[j])
            }

            array_temp_dup.push(buildings[i].temp);

        }

        var sum_single_value_measures = [];
        var avg_single_value_measures = [];
        var max_single_value_measures = [];
        var min_single_value_measures = [];

        for (j = 0; j < headers.length; j++) {
        sum_single_value_measures[j] = array_single_value_measures[j].reduce(function(a, b) {
            return a + b
        });
        avg_single_value_measures[j] = Math.round(sum_single_value_measures[j] / array_single_value_measures[j].length);
        max_single_value_measures[j] = MaxArray(array_single_value_measures[j]);
        min_single_value_measures[j] = MinArray(array_single_value_measures[j]);
        }

        var prj = new prDataObj();
        prj.pname = data.projectName;
        prj.plocation = data.epwLocation;

        prj.avg_single_value_measures = [];
        prj.max_single_value_measures = [];
        prj.min_single_value_measures = [];

        for (j = 0; j < headers.length; j++) {
            prj.avg_single_value_measures[j] = avg_single_value_measures[j];
            prj.max_single_value_measures[j] = max_single_value_measures[j];
            prj.min_single_value_measures[j] = min_single_value_measures[j];
        }

}







function MakeChart(){
    $("#table > tbody").empty();
    for (i = 0; i < headers.length; i++) {
        $('#table > tbody:last').append('<tr id= '+i+' ><td> <img src=\"img\LC.png\" style=\"width: 22px\" /></td><td> ' +
         headers[i].display_name +' </td><td class=\"text-center\">' + project[0].avg_single_value_measures[i] +' </td><td class=\"text-center\">' + 
         project[0].min_single_value_measures[i]+'-'+project[0].max_single_value_measures[i] +' </td><td class=\"text-center\">' + headers[i].unit +' </td></tr>');
    }
}






// _sort, _norm, _sortarea, _title, _units, index
function call_oeall2(_sort, _norm, _sortarea, _title, _units, index) { 

    function bldOeObj() {
        this.bname;
        this.area;
        this.sum;
        this.sum_category;
        this.norm_oe;
    }
    var bobs = [];
    var noe_array = [];
    for (i = 0; i < buildings.length; i++) {
        var noe = buildings[i].time_series_measure_sum[index] / buildings[i].area;
        noe_array.push(noe);

        var b = new bldOeObj();
        b.bname = buildings[i].bname;
        b.area = buildings[i].area;
        b.sum = buildings[i].time_series_measure_sum[index];
        b.norm_oe = noe_array[i];
        b.sum_category = [];
        
        //categories
        for(j=0; j <headers[index].nCatogeries; j++){
            b.sum_category[j] =  buildings[i].time_series_measure_sum_categories[index][j];
        }
        bobs.push(b);
    }

    //sort
    if (_sort == 1) {
        bobs.sort(function(a, b) {
            return b.sum - a.sum
        })
    } else if (_sort == 2) {
        bobs.sort(function(a, b) {
            return a.sum - b.sum
        })
    };

    var categories = [];
    var bname_arr = [];

    for(j=0; j < headers[index].nCatogeries; j++){
        categories[j] = [];
    }

    for (i = 0; i < buildings.length; i++) {
       for(j=0; j < headers[index].nCatogeries; j++){
        categories[j].push(bobs[i].sum_category[j])
        }
        bname_arr.push(bobs[i].bname)
    };

    if (_sortarea == 1) {
        bobs.sort(function(a, b) {
            return (b.norm_oe - a.norm_oe)
        })
    }

    if (_sortarea == 2) {
        bobs.sort(function(a, b) {
            return (a.norm_oe - b.norm_oe)
        })
    }

    if (_norm == 1) {
        categories = [];
        for(j=0; j < headers[index].nCatogeries; j++){
            categories[j] = [];
        }       
        bname_arr = [];
        var category_a = [];
        var category_area = [];

        for (i = 0; i < buildings.length; i++) {
            for(j=0; j < headers[index].nCatogeries; j++){
                category_a[j] = bobs[i].sum_category[j] / bobs[i].area;
                category_area[j] = roundToOne(category_a[j]);
                categories[j].push(category_area[j]);
            }
            var bname_arr_area = bobs[i].bname;
            bname_arr.push(bname_arr_area);
        }
        
    }

    var series = [];
    for(var j=0; j < headers[index].nCatogeries; j++){ 
        series.push({
            name: headers[index].catogeries_display_name[j], 
            data: categories[j]
        });
    }
       

    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: _title
        },
        xAxis: {
            categories: bname_arr,
            lineColor: "#DCDCDC",
            tickColor: "#DCDCDC"
        },
        yAxis: {
            gridLineColor: '#DCDCDC',
            min: 0,
            title: {
                text: _units
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -70,
            verticalAlign: 'top',
            y: 20,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#DCDCDC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y.toLocaleString() + '<br/>' +
                    'Total: ' + this.point.stackTotal.toLocaleString();
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            },
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function() {
                            n = array_bname.indexOf(this.category)
                            bldinfo(n)
                        }
                    }
                }
            }
        },
        series: series
    })
};

setTimeout(function() {
        call_oeall2(1, 0, 2, "Annual Consumption", "Energy Consumption in kWh / year", 0);
    }, 1000);

MakeChart();
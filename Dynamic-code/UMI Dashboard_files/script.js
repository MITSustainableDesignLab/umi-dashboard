//highcharts trigger elements
$(document).ready(function() {
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }

    $('.dropdown-toggle').dropdown()
});
$('.btn').button()

//highcharts options
Highcharts.setOptions({
    lang: {
        drillUpText: 'Back to Use Types'
    },
    chart: {
        style: {
            fontFamily: 'arial'
        }
    }
});



//declaration of DOM variables

var menu_begin = document.getElementById("menu_begin")
var menu_comp = document.getElementById("menu_compliance")
var menu_modes = document.getElementById("menu_modes")
var menu_0 = document.getElementById("menu_0")
var menu_1 = document.getElementById("menu_1")
var menu_2 = document.getElementById("menu_2");
var menu_2b = document.getElementById("menu_2b");
var menu_3 = document.getElementById("menu_3");
var menu_4 = document.getElementById("menu_4");
var menu_5 = document.getElementById("menu_5");
var menu_6 = document.getElementById("menu_6");
var menu_7 = document.getElementById("menu_7");
var menu_7b = document.getElementById("menu_7b");
var menu_8 = document.getElementById("menu_8");
var menu_9 = document.getElementById("menu_9");
var menu_10 = document.getElementById("menu_10");

var draw_on = document.getElementById("draw_on");
var bread = document.getElementById("bread");

//default value of n
var n = null;

var ch_t = null;
var mode = 1;

var bld_col_bt = document.getElementById("bld_col_bt");
var temp_col_bt = document.getElementById("temp_col_bt");
var scatter_bt = document.getElementById("scatter_bt");
var bld_map_bt = document.getElementById("bld_map_bt");

var back = document.getElementById("back");

var logo = document.getElementById("logo");

var form = document.getElementById("form");
var submit_comp = document.getElementById("submit_comp");
var modal_comp = document.getElementById("ModalCompliace");

var mode_view = document.getElementById("mode_view");
var mode_comp = document.getElementById("mode_comp");

var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");
var row5 = document.getElementById("row5");

var prname = document.getElementById("prname");
var bldname = document.getElementById("bldname");

var value_title = document.getElementById("value_title");

var home_bt = document.getElementById("home_bt");

var input = document.getElementById("bldinput");
var input_scl = document.getElementById("sclinput");

var sort = document.getElementById("sort");
var sort_asc = document.getElementById("sort_asc");
var sort_dec = document.getElementById("sort_dec");
var sort_reset = document.getElementById("sort_reset");

var sort_b = document.getElementById("sort_b");
var sort_asc_b = document.getElementById("sort_asc_b");
var sort_dec_b = document.getElementById("sort_dec_b");
var sort_reset_b = document.getElementById("sort_reset_b");

var group_on = document.getElementById("group_on");
var group_off = document.getElementById("group_off");

var norm_area = document.getElementById("norm_area");
var norm_off = document.getElementById("norm_off");

var norm_bd_area = document.getElementById("norm_bd_area");
var norm_bd_off = document.getElementById("norm_bd_off");

var about = document.getElementById("menu_1_title");
var about_content = document.getElementById("menu_1_content");

var menu_comp_content = document.getElementById("menu_compliance_content")

//-----------------------------------------------------------------------------------------------
//Old Variables to draw the table, will be using the header object instead --> see headerObj()
var oe_title = document.getElementById("oe_title");
var oe_unit = document.getElementById("oe_unit");
var oe = document.getElementById("oe");
var oe_range = document.getElementById("oe_range");

var mo_title = document.getElementById("mo_title");
var mo = document.getElementById("mo");
var mo_range = document.getElementById("mo_range");
var mo_unit = document.getElementById("mo_unit");
var bikescore = document.getElementById("bikescore");
var walkscore = document.getElementById("walkscore");

var oc_title = document.getElementById("oc_title");
var oc = document.getElementById("oc");
var oc_range = document.getElementById("oc_range");
var oc_unit = document.getElementById("oc_unit");

var da_title = document.getElementById("da_title");
var da = document.getElementById("da");
var da_range = document.getElementById("da_range");
var da_unit = document.getElementById("da_unit");

var lc_title = document.getElementById("lc_title");
var lc = document.getElementById("lc");
var lc_range = document.getElementById("lc_range");
var lc_unit = document.getElementById("lc_unit");
var lc_energy = document.getElementById("lc_energy");
var lc_carbon = document.getElementById("lc_carbon");;
//-------------------------------------------------------------------------------------


var dropdown = document.getElementById("dropdown");

var xaxis = document.getElementById("x-axis");
var x_area = document.getElementById("x-area");
var x_wwr = document.getElementById("x-wwr");
var x_oe = document.getElementById("x-oe");
var x_oe_norm = document.getElementById("x-oe_norm");
var x_mo_walk = document.getElementById("x-mo_walk");
var x_mo_bike = document.getElementById("x-mo_bike");
var x_da = document.getElementById("x-da");
var x_lc_energy = document.getElementById("x-lc_energy");
var x_lc_carbon = document.getElementById("x-lc_carbon");

var yaxis = document.getElementById("y-axis");
var y_area = document.getElementById("y-area");
var y_wwr = document.getElementById("y-wwr");
var y_oe = document.getElementById("y-oe");
var y_oe_norm = document.getElementById("y-oe_norm");
var y_mo_walk = document.getElementById("y-mo_walk");
var y_mo_bike = document.getElementById("y-mo_bike");
var y_da = document.getElementById("y-da");
var y_lc_energy = document.getElementById("y-lc_energy");
var y_lc_carbon = document.getElementById("y-lc_carbon");

var yaxis0 = document.getElementById("y-axis-0");
var yaxis2 = document.getElementById("y-axis-2");
var y_oe2 = document.getElementById("y-oe-2");
var y_oe_norm2 = document.getElementById("y-oe_norm-2");

var type = document.getElementById("type");
var type_buildings = document.getElementById("type-buildings");
var type_templates = document.getElementById("type-templates");

var submit = document.getElementById("submit");

//declaration of JSON array variables

// ------------ Dynamic ------------
//Defining a header;
var headers = [];
var default_index = 0;
var foo = []
// -------------------------------
var buildings = [];
var project = [];

var array_bname = [];
var array_wwr = [];
var array_area = [];
var array_bid = [];

var array_oe = [];
var array_oe_norm = [];

//----------------------Dynamic------------------
//using one array of arrays for single value measures
var array_mo_walk = [];
var array_mo_bike = [];

var array_oc = [];

var array_da = [];

var array_lc_en = [];
var array_lc_ca = [];
//----------------------------------------------
var array_single_value_measures = [];
//----------------------------------------------


var array_temp_dup = [];
var array_temp = [];
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

var series_obj = [];

var comp_level = [];

// json file name from url:
// var file_url = decodeURIComponent(getUrlVars()["file"]);

//run in the beginning
// $(document).ready(function() {

    // if no link passed, use default file
    // if(file_url == "undefined") { file_url = 'MIT.json'; }

    // $.ajax({
    //     type: 'GET',
    //     url: file_url,
    //     dataType: 'json',
    //     success: BuildList2(file_url)
    // });
// });

//what happens upon clicking the home button
$(home_bt).on("click", function() {
    Start_Chart1(default_index);
});


//declaration of functions
function roundToOne(num) {
    return +(Math.round(num + "e+1") + "e-1");
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function hide(_let, _num) {
    $(_let).collapse('hide');
    $(_num).removeClass("panel panel-default");
    $(_num).addClass("panel panel-default hidden");
}

function show(_let, _num) {
    $(_num).removeClass("panel panel-default hidden");
    $(_num).addClass("panel panel-default");
    $(_let).collapse('show');
}

function enable(button) {
    if ($(button).hasClass("btn btn-default disabled")) {
        $(button).removeClass("btn btn-default disabled")
        $(button).addClass("btn btn-default")
    }
}

function disable(button) {
    if ($(button).hasClass("btn btn-default")) {
        $(button).removeClass("btn btn-default")
        $(button).addClass("btn btn-default disabled")
    }
}

function removeDuplicates(array) {
    array.filter(function(elem, pos) {
        return array.indexOf(elem) == pos;
    })
}

function MaxArray(array) {
    return Math.max.apply(null, array);
};

function MinArray(array) {
    return Math.min.apply(null, array);
};

function norm_area_fn() {

    $(oe_title).html('Energy  ' + "<span class='label label-primary'>Norm</span>");
    $(oe).html(project[0].avg_oe_norm.toLocaleString());
    $(oe_range).html(project[0].min_oe_norm.toLocaleString() + ' - ' + project[0].max_oe_norm.toLocaleString());
    $(oe_unit).html('kWh / sqm / year');

}

function norm_off_fn() {

    $(oe_title).html('Energy')
    $(oe).html(project[0].avg_oe.toLocaleString());
    $(oe_range).html(project[0].min_oe.toLocaleString() + ' - ' + project[0].max_oe.toLocaleString());
    $(oe_unit).html('kWh / year')

}

function jToKwh(el) {
    return Math.round(el / 3600000);
}

function getUrlVars() {
    var map = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        map[key] = value;
    });
    return map;
}

//-----------------Dynamic--------------

//declaring a header object
function headerObj() {
   this.display_name
   this.hname;
   this.htype;
   this.hvalue;
   this.unit;
   this.range;
   //single value variables
   this.description
   this.levels
   this.nlevels
   //time series variables
   this.nCatogeries
   this.catogeries_display_name
   this.catogeries
   this.time_step
}
//------------------------------------

//declaring bldDataObj
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

    // instead of the following six variables we define a single variable
    // that is later instantiated as an array in BuildList2() and the size of this array will be determined by
    // the size of the header in the JSON 
    this.mo_walk;
    this.mo_bike;

    this.oc;

    this.da;

    this.lc_en;
    this.lc_ca;
    /////////////////////////////////////////////////////////////
    this.single_value_measure
    this.time_series_measure
    this.time_series_measure_sum
    this.time_series_measure_sum_categories
    ////////////////////////////////////////// Dynamic ///////////

}

//declaring prDataObj
function prDataObj() {

    this.pname;
    this.plocation;
    
    this.bool_oe;
    this.bool_mo;
    this.bool_da;
    this.bool_lc;

    this.area_max;
    this.area_min;

    this.wwr_max;
    this.wwr_min;

    this.avg_oe;
    this.avg_oe_norm;
    
    //----------------- Dynamic ---------------------
    // ignoring all varibles below
    this.avg_mo_wk;
    this.avg_mo_bk;
    this.avg_oc;
    this.avg_da;
    this.avg_lc_en;
    this.avg_lc_ca;
    this.max_oe;
    this.max_oe_norm;
    this.max_mo_wk;
    this.max_mo_bk;
    this.max_oc;
    this.max_da;
    this.max_lc_en;
    this.max_lc_ca;
    this.min_oe;
    this.min_oe_norm;
    this.min_mo_wk;
    this.min_mo_bk;
    this.min_oc;
    this.min_da;
    this.min_lc_en;
    this.min_lc_ca;
    //---------------------------------------------
    // using arrays of single value measures instead - Size of these arrays depned on the header
    this.avg_single_value_measures
    this.max_single_value_measures
    this.min_single_value_measures
    //---------------------------------------------
}

//parsing JSON
function BuildList(data) {
    // $.getJSON(_path, function(data) {
        // console.log(JSON.stringify(data));

        
        for (i = 0; i < data.features.length; i++) {

            var bld = new bldDataObj();

            bld.bid = data.features[i].id;

            // CHECK FOR ERRORS         
            // If floor area doesn't exist OR no energy data exists,
            // skip this building & continue with loop
            if (data.features[i].properties.GrossFloorArea === undefined ||
                (!(data.features[i].properties.OEEquipment ||
                    data.features[i].properties.OELighting ||
                    data.features[i].properties.OEHeating ||
                    data.features[i].properties.OECooling))) {
                continue;
            }

            // Check if building has name (else assign dummy name)
            if (data.features[i].properties.Name === undefined) {
                bld.bname = "Bldg_" + i;
            } else {
                bld.bname = data.features[i].properties.Name;
            }

            // Round area to whole number 
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

            for (j = 0; j < 12; j++) {

                bld.oe_eq.push(Math.round(data.features[i].properties.OEEquipment[j]));
                bld.oe_el.push(Math.round(data.features[i].properties.OELighting[j]));
                bld.oe_he.push(Math.round(data.features[i].properties.OEHeating[j]));
                bld.oe_co.push(Math.round(data.features[i].properties.OECooling[j]));

            }

            // set missing values to NULL instead of UNDEFINED, otherwise Highcharts messes up spider chart
            bld.mo_walk = data.features[i].properties.MOWalkability || null;
            bld.mo_bike = data.features[i].properties.MOBikeability || null;
            bld.oc = data.features[i].properties.OC || null;
            bld.da = data.features[i].properties.DaylitArea || null;

            // Embodied Energy and Carbon is already in kWh
            bld.lc_en = Math.round(data.features[i].properties.LCEnergy / data.features[i].properties.LCLength) || null;
            bld.lc_ca = Math.round(data.features[i].properties.LCCarbon / data.features[i].properties.LCLength) || null;

            bld.oe = 0;
            bld.oe_co_all = 0;
            bld.oe_he_all = 0;
            bld.oe_el_all = 0;
            bld.oe_eq_all = 0;


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
            array_mo_walk.push(buildings[i].mo_walk);
            array_mo_bike.push(buildings[i].mo_bike);
            array_oc.push(buildings[i].oc);
            array_da.push(buildings[i].da);
            array_lc_en.push(buildings[i].lc_en);
            array_lc_ca.push(buildings[i].lc_ca);

            array_temp_dup.push(buildings[i].temp);

        }

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp) === -1) array_temp.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe) === -1) array_temp_oe.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_co) === -1) array_temp_oe_co.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_he) === -1) array_temp_oe_he.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_el) === -1) array_temp_oe_el.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_eq) === -1) array_temp_oe_eq.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_norm) === -1) array_temp_oe_norm.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_co_norm) === -1) array_temp_oe_co_norm.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_he_norm) === -1) array_temp_oe_he_norm.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_el_norm) === -1) array_temp_oe_el_norm.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_eq_norm) === -1) array_temp_oe_eq_norm.push(el);
        });


        //Energy by template
        for (j = 0; j < array_temp_oe.length; j++) {

            array_temp_oe[j] = [array_temp_oe[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe[j][0]) {

                    array_temp_oe[j].push(buildings[i].oe);
                }
            }
        }


        //Cooling energy by template
        for (j = 0; j < array_temp_oe_co.length; j++) {

            array_temp_oe_co[j] = [array_temp_oe_co[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_co[j][0]) {

                    array_temp_oe_co[j].push(buildings[i].oe_co);
                }
            }
        }

        //Heating energy by template
        for (j = 0; j < array_temp_oe_he.length; j++) {

            array_temp_oe_he[j] = [array_temp_oe_he[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_he[j][0]) {

                    array_temp_oe_he[j].push(buildings[i].oe_he);
                }
            }
        }

        //Electric lighting energy by template
        for (j = 0; j < array_temp_oe_el.length; j++) {

            array_temp_oe_el[j] = [array_temp_oe_el[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_el[j][0]) {

                    array_temp_oe_el[j].push(buildings[i].oe_el);
                }
            }
        }

        //Equipment energy by template
        for (j = 0; j < array_temp_oe_eq.length; j++) {

            array_temp_oe_eq[j] = [array_temp_oe_eq[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_eq[j][0]) {

                    array_temp_oe_eq[j].push(buildings[i].oe_eq);
                }
            }
        }

        //Normalized energy by template
        for (j = 0; j < array_temp_oe_norm.length; j++) {

            array_temp_oe_norm[j] = [array_temp_oe_norm[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_norm[j][0]) {

                    array_temp_oe_norm[j].push(buildings[i].oe_norm);
                }
            }
        }

        //Normalized cooling energy by template
        for (j = 0; j < array_temp_oe_co_norm.length; j++) {

            array_temp_oe_co_norm[j] = [array_temp_oe_co_norm[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_co_norm[j][0]) {

                    array_temp_oe_co_norm[j].push(buildings[i].oe_co_norm);
                }
            }
        }

        //Normalized energy by template
        for (j = 0; j < array_temp_oe_he_norm.length; j++) {

            array_temp_oe_he_norm[j] = [array_temp_oe_he_norm[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_he_norm[j][0]) {

                    array_temp_oe_he_norm[j].push(buildings[i].oe_he_norm);
                }
            }
        }

        //Normalized energy by template
        for (j = 0; j < array_temp_oe_el_norm.length; j++) {

            array_temp_oe_el_norm[j] = [array_temp_oe_el_norm[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_el_norm[j][0]) {

                    array_temp_oe_el_norm[j].push(buildings[i].oe_el_norm);
                }
            }
        }

        //Normalized energy by template
        for (j = 0; j < array_temp_oe_eq_norm.length; j++) {

            array_temp_oe_eq_norm[j] = [array_temp_oe_eq_norm[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_eq_norm[j][0]) {

                    array_temp_oe_eq_norm[j].push(buildings[i].oe_eq_norm);
                }
            }
        }


        //template max and avg by building
        for (i = 0; i < buildings.length; i++) {

            buildings[i].temp_max = null;
            buildings[i].temp_avg = null;

            for (j = 0; j < array_temp_oe.length; j++) {

                if (buildings[i].temp == array_temp_oe[j][0]) {

                    buildings[i].temp_max = MaxArray(array_temp_oe[j].slice(1));
                    buildings[i].temp_avg = Math.round(((array_temp_oe[j].slice(1)).reduce(function(a, b) {
                        return a + b
                    })) / (array_temp_oe[j].slice(1)).length)
                }
            }
        };


        var sum_oe = array_oe.reduce(function(a, b) {
            return a + b
        });
        var avg_oe = Math.round(sum_oe / array_oe.length);
        var max_oe = MaxArray(array_oe);
        var min_oe = MinArray(array_oe);

        var sum_area = array_area.reduce(function(a, b) {
            return a + b
        });
        var avg_area = Math.round(sum_area / array_area.length);
        var max_area = MaxArray(array_area);
        var min_area = MinArray(array_area);

        var sum_wwr = array_wwr.reduce(function(a, b) {
            return a + b
        });
        var avg_wwr = Math.round(sum_wwr / array_wwr.length);
        var max_wwr = MaxArray(array_wwr);
        var min_wwr = MinArray(array_wwr);

        var sum_oe_norm = array_oe_norm.reduce(function(a, b) {
            return a + b
        });
        var avg_oe_norm = roundToOne(sum_oe_norm / array_oe_norm.length);
        var max_oe_norm = MaxArray(array_oe_norm);
        var min_oe_norm = MinArray(array_oe_norm);

        var sum_mo_wk = array_mo_walk.reduce(function(a, b) {
            return a + b
        });
        var avg_mo_wk = Math.round(sum_mo_wk / array_mo_walk.length);
        var max_mo_wk = MaxArray(array_mo_walk);
        var min_mo_wk = MinArray(array_mo_walk);

        var sum_mo_bk = array_mo_bike.reduce(function(a, b) {
            return a + b
        });
        var avg_mo_bk = Math.round(sum_mo_bk / array_mo_bike.length);
        var max_mo_bk = MaxArray(array_mo_bike);
        var min_mo_bk = MinArray(array_mo_bike);

        var sum_oc = array_oc.reduce(function(a, b) {
            return a + b
        });
        var avg_oc = Math.round(sum_oc / array_oc.length);
        var max_oc = MaxArray(array_oc);
        var min_oc = MinArray(array_oc);

        var sum_da = array_da.reduce(function(a, b) {
            return a + b
        });
        var avg_da = Math.round(sum_da / array_da.length);
        var max_da = MaxArray(array_da);
        var min_da = MinArray(array_da);

        var sum_lc_en = array_lc_en.reduce(function(a, b) {
            return a + b
        });
        var avg_lc_en = Math.round(sum_lc_en / array_lc_en.length);
        var max_lc_en = MaxArray(array_lc_en);
        var min_lc_en = MinArray(array_lc_en);

        var sum_lc_ca = array_lc_ca.reduce(function(a, b) {
            return a + b
        });
        var avg_lc_ca = Math.round(sum_lc_ca / array_lc_ca.length);
        var max_lc_ca = MaxArray(array_lc_ca);
        var min_lc_ca = MinArray(array_lc_ca);

        var prj = new prDataObj();

        prj.pname = data.projectName;
        prj.plocation = data.epwLocation;

        prj.bool_oe = data.metrics.OE;
        prj.bool_mo = data.metrics.MO;
        prj.bool_da = data.metrics.DA;
        prj.bool_lc = data.metrics.LC;

        prj.area_max = max_area;
        prj.area_min = min_area;

        prj.wwr_max = max_wwr;
        prj.wwr_min = min_wwr;

        prj.avg_oe = avg_oe;
        prj.avg_oe_norm = avg_oe_norm;
        prj.avg_mo_wk = avg_mo_wk;
        prj.avg_mo_bk = avg_mo_bk;
        prj.avg_oc = avg_oc;
        prj.avg_da = avg_da;
        prj.avg_lc_en = avg_lc_en;
        prj.avg_lc_ca = avg_lc_ca;

        prj.max_oe = max_oe;
        prj.max_oe_norm = max_oe_norm;
        prj.max_mo_wk = max_mo_wk;
        prj.max_mo_bk = max_mo_bk;
        prj.max_oc = max_oc;
        prj.max_da = max_da;
        prj.max_lc_en = max_lc_en;
        prj.max_lc_ca = max_lc_ca;

        prj.min_oe = min_oe;
        prj.min_oe_norm = min_oe_norm;
        prj.min_mo_wk = min_mo_wk;
        prj.min_mo_bk = min_mo_bk;
        prj.min_oc = min_oc;
        prj.min_da = min_da;
        prj.min_lc_en = min_lc_en;
        prj.min_lc_ca = min_lc_ca;

        project.push(prj);


        //hide rows if no buildings have results
        if(!prj.bool_oe) { 
            $('#row1').hide(); 
            $('#x-oe_divider').hide(); 
            $('#x-oe_title').hide();
            $('#y-oe_divider').hide(); 
            $('#y-oe_title').hide(); 
            $('#x-oe').hide(); 
            $('#x-oe_norm').hide(); 
            $('#y-oe').hide(); 
            $('#y-oe_norm').hide(); 
        }

        if(!prj.bool_mo) { 
            $('#row2').hide(); 
            $('#x-mo_divider').hide(); 
            $('#x-mo_title').hide();
            $('#y-mo_divider').hide(); 
            $('#y-mo_title').hide(); 
            $('#x-mo_walk').hide(); 
            $('#x-mo_bike').hide(); 
            $('#y-mo_walk').hide(); 
            $('#y-mo_bike').hide(); 
        }

        if(!prj.bool_da) { 
            $('#row4').hide(); 
            $('#x-da_divider').hide(); 
            $('#x-da_title').hide();
            $('#y-da_divider').hide(); 
            $('#y-da_title').hide(); 
            $('#x-da').hide(); 
            $('#y-da').hide(); 
        }
        if(!prj.bool_lc) { 
            $('#row5').hide();
            $('#x-lc_divider').hide(); 
            $('#x-lc_title').hide();
            $('#y-lc_divider').hide(); 
            $('#y-lc_title').hide(); 
            $('#x-lc_energy').hide(); 
            $('#x-lc_carbon').hide(); 
            $('#y-lc_energy').hide(); 
            $('#y-lc_carbon').hide(); 
        }

        Start_Chart1(default_index);

        // remove loading div
        listReady();

    // });
}

// --------------- Testing -------------to print values in objects for testing purposes
function myFunction(){
    var f = [ headers[1].range[0], headers[1].levels, headers[1].range[1] ]; //buildings[5].single_value_measure;
    /*for (i = 0; i < buildings.length; i++){
        f[i] = buildings[i].lc_en;
    }*/
    foo.toString();
    document.getElementById("demo").innerHTML = foo;
}

// parsing JSON dynamically
function BuildList2(data) {
    // $.getJSON(_path, function(data) {
        // console.log(JSON.stringify(data));

        //------------------- Dynamic ---------------------
        for (i = 0; i < data.header.length; i++) {
            
            var head = new headerObj();
            head.display_name = data.header[i].display_name;
            head.hname  = data.header[i].name;
            head.htype  = data.header[i].type;
            if(head.htype == "time_series")
                default_index = i;
            //console.log(head.htype)
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
        //-------------------------------------------------


        for (i = 0; i < data.features.length; i++) {

            var bld = new bldDataObj();

            bld.bid = data.features[i].id;

            // CHECK FOR ERRORS         
            // If floor area doesn't exist OR no energy data exists,
            // skip this building & continue with loop
            if (data.features[i].properties.GrossFloorArea === undefined ||
                (!(data.features[i].properties.OEEquipment ||
                    data.features[i].properties.OELighting ||
                    data.features[i].properties.OEHeating ||
                    data.features[i].properties.OECooling))) {
                continue;
            }

            // Check if building has name (else assign dummy name)
            if (data.features[i].properties.Name === undefined) {
                bld.bname = "Bldg_" + i;
            } else {
                bld.bname = data.features[i].properties.Name;
            }

            // Round area to whole number 
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

            for (j = 0; j < 12; j++) {

                bld.oe_eq.push(Math.round(data.features[i].properties.OEEquipment[j]));
                bld.oe_el.push(Math.round(data.features[i].properties.OELighting[j]));
                bld.oe_he.push(Math.round(data.features[i].properties.OEHeating[j]));
                bld.oe_co.push(Math.round(data.features[i].properties.OECooling[j]));
            }
            //-------------------- Dynamic --------------------------------
            
            
            //This array has a single number for each of the performance measures
            // For single value measures (e.g. Walkability): The single number is the value in this performance measure
            // For Time Series measures (e.g. Energy): The single number is the gross sum for sub-values in the time series across time steps (Monthly...) and categories (Cooling...)
            bld.single_value_measure = [];
            

            // The following three arrays are used only for Time Series measures
            bld.time_series_measure = [];
            bld.time_series_measure_sum = [];
            bld.time_series_measure_sum_categories = [];
            for (j = 0; j < headers.length; j++) {

            // Defining Performance Measues of Time Series Type Dynamically Here
                
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
            
            // Defining Performance Measues of Single Value Type Dynamically Here
            
                else {
                    if(headers[j].hname == "LCEnergy" || headers[j].hname == "LCCarbon")
                        bld.single_value_measure.push(Math.round(data.features[i].properties[headers[j].hname] / data.features[i].properties.LCLength) || null)
                    else
                       bld.single_value_measure.push(data.features[i].properties[headers[j].hname] || null)
                }
            }
            //------------------------------------------------------------------            
            /*
            for (j = 0; j < headers[j].nCatogeries; j++){
                if(headers[j].htype == "time_series"){
                    for (ii = 0; ii < headers[j].nCatogeries; ii++){
                        bld.time_series_measure_sum[j] += bld.time_series_measure_sum_categories[ii]
                    }
                }
            }*/
            foo = bld.time_series_measure_sum_categories
            
            //console.log(bld.time_series_measure_sum_categories);
            // set missing values to NULL instead of UNDEFINED, otherwise Highcharts messes up spider chart
            bld.mo_walk = data.features[i].properties.MOWalkability || null;
            bld.mo_bike = data.features[i].properties.MOBikeability || null;
            bld.oc = data.features[i].properties.OC || null;
            bld.da = data.features[i].properties.DaylitArea || null;

            //------------------- Dynamic--------------------
            // CAUTION: Life Cycle is devided by Life Cycle Length overhere!
            // Embodied Energy and Carbon is already in kWh
            bld.lc_en = Math.round(data.features[i].properties.LCEnergy / data.features[i].properties.LCLength) || null;
            bld.lc_ca = Math.round(data.features[i].properties.LCCarbon / data.features[i].properties.LCLength) || null;

            bld.oe = 0;
            bld.oe_co_all = 0;
            bld.oe_he_all = 0;
            bld.oe_el_all = 0;
            bld.oe_eq_all = 0;


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
            //---------------------------------------
            array_mo_walk.push(buildings[i].mo_walk);
            array_mo_bike.push(buildings[i].mo_bike);
            array_oc.push(buildings[i].oc);
            array_da.push(buildings[i].da);
            array_lc_en.push(buildings[i].lc_en);
            array_lc_ca.push(buildings[i].lc_ca);
            //---------------------------------------

            array_temp_dup.push(buildings[i].temp);

        }

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp) === -1) array_temp.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe) === -1) array_temp_oe.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_co) === -1) array_temp_oe_co.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_he) === -1) array_temp_oe_he.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_el) === -1) array_temp_oe_el.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_eq) === -1) array_temp_oe_eq.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_norm) === -1) array_temp_oe_norm.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_co_norm) === -1) array_temp_oe_co_norm.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_he_norm) === -1) array_temp_oe_he_norm.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_el_norm) === -1) array_temp_oe_el_norm.push(el);
        });

        $.each(array_temp_dup, function(i, el) {
            if ($.inArray(el, array_temp_oe_eq_norm) === -1) array_temp_oe_eq_norm.push(el);
        });


        //Energy by template
        for (j = 0; j < array_temp_oe.length; j++) {

            array_temp_oe[j] = [array_temp_oe[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe[j][0]) {

                    array_temp_oe[j].push(buildings[i].oe);
                }
            }
        }


        //Cooling energy by template
        for (j = 0; j < array_temp_oe_co.length; j++) {

            array_temp_oe_co[j] = [array_temp_oe_co[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_co[j][0]) {

                    array_temp_oe_co[j].push(buildings[i].oe_co);
                }
            }
        }

        //Heating energy by template
        for (j = 0; j < array_temp_oe_he.length; j++) {

            array_temp_oe_he[j] = [array_temp_oe_he[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_he[j][0]) {

                    array_temp_oe_he[j].push(buildings[i].oe_he);
                }
            }
        }

        //Electric lighting energy by template
        for (j = 0; j < array_temp_oe_el.length; j++) {

            array_temp_oe_el[j] = [array_temp_oe_el[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_el[j][0]) {

                    array_temp_oe_el[j].push(buildings[i].oe_el);
                }
            }
        }

        //Equipment energy by template
        for (j = 0; j < array_temp_oe_eq.length; j++) {

            array_temp_oe_eq[j] = [array_temp_oe_eq[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_eq[j][0]) {

                    array_temp_oe_eq[j].push(buildings[i].oe_eq);
                }
            }
        }

        //Normalized energy by template
        for (j = 0; j < array_temp_oe_norm.length; j++) {

            array_temp_oe_norm[j] = [array_temp_oe_norm[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_norm[j][0]) {

                    array_temp_oe_norm[j].push(buildings[i].oe_norm);
                }
            }
        }

        //Normalized cooling energy by template
        for (j = 0; j < array_temp_oe_co_norm.length; j++) {

            array_temp_oe_co_norm[j] = [array_temp_oe_co_norm[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_co_norm[j][0]) {

                    array_temp_oe_co_norm[j].push(buildings[i].oe_co_norm);
                }
            }
        }

        //Normalized energy by template
        for (j = 0; j < array_temp_oe_he_norm.length; j++) {

            array_temp_oe_he_norm[j] = [array_temp_oe_he_norm[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_he_norm[j][0]) {

                    array_temp_oe_he_norm[j].push(buildings[i].oe_he_norm);
                }
            }
        }

        //Normalized energy by template
        for (j = 0; j < array_temp_oe_el_norm.length; j++) {

            array_temp_oe_el_norm[j] = [array_temp_oe_el_norm[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_el_norm[j][0]) {

                    array_temp_oe_el_norm[j].push(buildings[i].oe_el_norm);
                }
            }
        }

        //Normalized energy by template
        for (j = 0; j < array_temp_oe_eq_norm.length; j++) {

            array_temp_oe_eq_norm[j] = [array_temp_oe_eq_norm[j]];

            for (i = 0; i < buildings.length; i++) {

                if (buildings[i].temp == array_temp_oe_eq_norm[j][0]) {

                    array_temp_oe_eq_norm[j].push(buildings[i].oe_eq_norm);
                }
            }
        }


        //template max and avg by building
        for (i = 0; i < buildings.length; i++) {

            buildings[i].temp_max = null;
            buildings[i].temp_avg = null;

            for (j = 0; j < array_temp_oe.length; j++) {

                if (buildings[i].temp == array_temp_oe[j][0]) {

                    buildings[i].temp_max = MaxArray(array_temp_oe[j].slice(1));
                    buildings[i].temp_avg = Math.round(((array_temp_oe[j].slice(1)).reduce(function(a, b) {
                        return a + b
                    })) / (array_temp_oe[j].slice(1)).length)
                }
            }
        };


        var sum_oe = array_oe.reduce(function(a, b) {
            return a + b
        });
        var avg_oe = Math.round(sum_oe / array_oe.length);
        var max_oe = MaxArray(array_oe);
        var min_oe = MinArray(array_oe);

        var sum_area = array_area.reduce(function(a, b) {
            return a + b
        });
        var avg_area = Math.round(sum_area / array_area.length);
        var max_area = MaxArray(array_area);
        var min_area = MinArray(array_area);

        var sum_wwr = array_wwr.reduce(function(a, b) {
            return a + b
        });
        var avg_wwr = Math.round(sum_wwr / array_wwr.length);
        var max_wwr = MaxArray(array_wwr);
        var min_wwr = MinArray(array_wwr);

        var sum_oe_norm = array_oe_norm.reduce(function(a, b) {
            return a + b
        });
        var avg_oe_norm = roundToOne(sum_oe_norm / array_oe_norm.length);
        var max_oe_norm = MaxArray(array_oe_norm);
        var min_oe_norm = MinArray(array_oe_norm);

        //------------------ Dynamic ----------------------
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
        //-----------------------------------------------

        var sum_mo_wk = array_mo_walk.reduce(function(a, b) {
            return a + b
        });
        var avg_mo_wk = Math.round(sum_mo_wk / array_mo_walk.length);
        var max_mo_wk = MaxArray(array_mo_walk);
        var min_mo_wk = MinArray(array_mo_walk);

        var sum_mo_bk = array_mo_bike.reduce(function(a, b) {
            return a + b
        });
        var avg_mo_bk = Math.round(sum_mo_bk / array_mo_bike.length);
        var max_mo_bk = MaxArray(array_mo_bike);
        var min_mo_bk = MinArray(array_mo_bike);

        var sum_oc = array_oc.reduce(function(a, b) {
            return a + b
        });
        var avg_oc = Math.round(sum_oc / array_oc.length);
        var max_oc = MaxArray(array_oc);
        var min_oc = MinArray(array_oc);

        var sum_da = array_da.reduce(function(a, b) {
            return a + b
        });
        var avg_da = Math.round(sum_da / array_da.length);
        var max_da = MaxArray(array_da);
        var min_da = MinArray(array_da);

        var sum_lc_en = array_lc_en.reduce(function(a, b) {
            return a + b
        });
        var avg_lc_en = Math.round(sum_lc_en / array_lc_en.length);
        var max_lc_en = MaxArray(array_lc_en);
        var min_lc_en = MinArray(array_lc_en);

        var sum_lc_ca = array_lc_ca.reduce(function(a, b) {
            return a + b
        });
        var avg_lc_ca = Math.round(sum_lc_ca / array_lc_ca.length);
        var max_lc_ca = MaxArray(array_lc_ca);
        var min_lc_ca = MinArray(array_lc_ca);
        //---------------------------------------------------------------------------------

        var prj = new prDataObj();

        prj.pname = data.projectName;
        prj.plocation = data.epwLocation;

        prj.bool_oe = data.metrics.OE;
        prj.bool_mo = data.metrics.MO;
        prj.bool_da = data.metrics.DA;
        prj.bool_lc = data.metrics.LC;

        prj.area_max = max_area;
        prj.area_min = min_area;

        prj.wwr_max = max_wwr;
        prj.wwr_min = min_wwr;

        prj.avg_oe = avg_oe;
        prj.avg_oe_norm = avg_oe_norm;

        //----------- Dynamic -------------------
        prj.avg_single_value_measures = [];
        prj.max_single_value_measures = [];
        prj.min_single_value_measures = [];

        for (j = 0; j < headers.length; j++) {
            prj.avg_single_value_measures[j] = avg_single_value_measures[j];
            prj.max_single_value_measures[j] = max_single_value_measures[j];
            prj.min_single_value_measures[j] = min_single_value_measures[j];
        }
        //-------------------------------------
        prj.avg_mo_wk = avg_mo_wk;
        prj.avg_mo_bk = avg_mo_bk;
        prj.avg_oc = avg_oc;
        prj.avg_da = avg_da;
        prj.avg_lc_en = avg_lc_en;
        prj.avg_lc_ca = avg_lc_ca;

        prj.max_oe = max_oe;
        prj.max_oe_norm = max_oe_norm;
        prj.max_mo_wk = max_mo_wk;
        prj.max_mo_bk = max_mo_bk;
        prj.max_oc = max_oc;
        prj.max_da = max_da;
        prj.max_lc_en = max_lc_en;
        prj.max_lc_ca = max_lc_ca;

        prj.min_oe = min_oe;
        prj.min_oe_norm = min_oe_norm;
        prj.min_mo_wk = min_mo_wk;
        prj.min_mo_bk = min_mo_bk;
        prj.min_oc = min_oc;
        prj.min_da = min_da;
        prj.min_lc_en = min_lc_en;
        prj.min_lc_ca = min_lc_ca;

        project.push(prj);


        //hide rows if no buildings have results
        if(!prj.bool_oe) { 
            $('#row1').hide(); 
            $('#x-oe_divider').hide(); 
            $('#x-oe_title').hide();
            $('#y-oe_divider').hide(); 
            $('#y-oe_title').hide(); 
            $('#x-oe').hide(); 
            $('#x-oe_norm').hide(); 
            $('#y-oe').hide(); 
            $('#y-oe_norm').hide(); 
        }

        if(!prj.bool_mo) { 
            $('#row2').hide(); 
            $('#x-mo_divider').hide(); 
            $('#x-mo_title').hide();
            $('#y-mo_divider').hide(); 
            $('#y-mo_title').hide(); 
            $('#x-mo_walk').hide(); 
            $('#x-mo_bike').hide(); 
            $('#y-mo_walk').hide(); 
            $('#y-mo_bike').hide(); 
        }

        if(!prj.bool_da) { 
            $('#row4').hide(); 
            $('#x-da_divider').hide(); 
            $('#x-da_title').hide();
            $('#y-da_divider').hide(); 
            $('#y-da_title').hide(); 
            $('#x-da').hide(); 
            $('#y-da').hide(); 
        }
        if(!prj.bool_lc) { 
            $('#row5').hide();
            $('#x-lc_divider').hide(); 
            $('#x-lc_title').hide();
            $('#y-lc_divider').hide(); 
            $('#y-lc_title').hide(); 
            $('#x-lc_energy').hide(); 
            $('#x-lc_carbon').hide(); 
            $('#y-lc_energy').hide(); 
            $('#y-lc_carbon').hide(); 
        }

        Start_Chart1(default_index);
        console.log(project[0].avg_single_value_measures)
        // remove loading div
        listReady();

    // });
}

function Start_Chart1(index) {

    //replace logo
    // document.getElementsByTagName("img")[0].src = "ico/UMI.png";

    //replace title
    document.getElementsByTagName("h3")[0].innerHTML = "Buildings" + "<font color='#d3d3d3'>" + " | Energy" + "</style>";

    $(bread).find("li").slice(0, 4).remove();
    $(bread).append("<li>" + "<a onclick='Start_Chart1(default_index)' href='#'>All Building Columns</a>" + "</li>");
    $(bread).append("<li class='active'>" + "Energy" + "</li>");

    //restore tabs to default
    row1.style.color = "black";
    row1.style.backgroundColor = "#f5f5f5";
    row2.style.color = "black";
    row2.style.backgroundColor = "white";
    row3.style.color = "black";
    row3.style.backgroundColor = "white";
    row4.style.color = "black";
    row4.style.backgroundColor = "white";
    row5.style.color = "black";
    row5.style.backgroundColor = "white";

    ch_t = 1
    mode = 1

    show('#collapseModes', menu_modes);

    $(mode_view).button('toggle')
    $(bld_col_bt).button('toggle')


    //reset n
    n = null;


    sc_a = 0
    sc_b = 0


    show('#collapseBegin', menu_begin);
    show('#collapseOne', menu_1);
    show('#collapseTwo', menu_2);
    show('#collapseModes', menu_modes);

    hide('#collapseZero', menu_0);
    hide('#collapseCompliance', menu_compliance)
    hide('#collapseFive', menu_5);
    hide('#collapseSix', menu_6);
    hide('#collapseSeven', menu_7);
    hide('#collapseEight', menu_8);
    hide('#collapseNine', menu_9);
    hide('#collapseTen', menu_10);

    //load project information
    about.innerHTML = "Project Information";
    about_content.innerHTML =
        "<li>" + "Number of Buildings: " + buildings.length + "</li>" +
        "<li>" + "Number of Use Types: " + array_temp.length + "</li>" +
        "<li>" + "Area Range: " + project[0].area_min.toLocaleString() + " - " + project[0].area_max.toLocaleString() + " sqm" + "</li>"

    $(sort).html('')
    $(yaxis0).html(' OE')
    
    /* ----------------------Drawing in a seperate function-----------------------
    $(oe_title).html(headers[1].cat_name);
    $(oe_unit).html("kWh / year");

    $(mo_title).html('Mobility');
    $(mo_unit).html("Walkscore (%)");

    $(lc_title).html('Lifecycle');
    $(lc_unit).html("kWh / year");
    */ 

    // --------------- Dynamic ---------------------
    
    $("#table > tbody").empty();
    
    //$('#table > tbody:last').append('<tr id=\"0\" style=\"color: black; background-color: white;\"><td><img src=\"./UMI Dashboard_files/LC.png\" width=\"22px\" height=\"auto\"></td><td id=\"oe_title\">Energy</td><td id=\"oe\" class=\"text-center\">22,013,637</td><td id=\"oe_range\" class=\"text-center\">150,684 - 22,013,637</td><td  class=\"text-center\">kWh / year</td></tr>'); 
    for (i = 0; i < headers.length; i++) {
        //console.log(headers[i])
        $('#table > tbody:last').append('<tr id= '+i+' ><td> <img src=\"UMI Dashboard_files/LC.png\" style=\"width: 22px\" /></td><td> ' +
         headers[i].display_name +' </td><td class=\"text-center\">' + project[0].avg_single_value_measures[i] +' </td><td class=\"text-center\">' + 
         project[0].min_single_value_measures[i]+'-'+project[0].max_single_value_measures[i] +' </td><td class=\"text-center\">' + headers[i].unit +' </td></tr>');
    }

        /*tr = $('tbody:last');
        tr.append("<tr style=\"color: black; background-color: white;\">");
        tr.append("<td class=\"text-center\">" + headers[i].hname + "</td>");
        tr.append("<td class=\"text-center\">" + headers[i].hname + "</td>");
        tr.append("<td class=\"text-center\">" + project[0].avg_lc_ca + "</td>");
        tr.append("<td class=\"text-center\">" + headers[i].unit + "</td>");
        tr.append("<td class=\"text-center\">" + project[0].avg_single_value_measures[i] + "</td>");
        tr.append("</tr>");*/
        //$('tbody').append(tr);

    /*if (bool_delete)
    {
        for (i = 2; i < headers.length+10; i=i+1) {
            document.getElementById("table").deleteRow(i);
        }
    }*/
    
    //bool_delete = true
    // ----------------------------------------------
    
    $(dropdown).empty();

    var button = [];

    for (i = 0; i < buildings.length; i++) {

        $(dropdown).append("<li id='" + i + "'" + " role='presentation'><a role='menuitem' tabindex='-1' href='#'>" + buildings[i].bname + "</a></li>");

        button[i] = document.getElementById(i);

        if (typeof window.addEventListener === 'function') {
            (function(_td) {
                button[i].addEventListener('click', function() {
                    n = parseInt(this.id)
                    bldinfo(n);
                });
            })(button[i]);

        }
    };

    var header = [];
    var divider = [];


    for (i = 0; i < array_temp.length; i++) {

        $(dropdown).append("<li id='t" + i + "'" + " role='presentation' class='dropdown-header'>" + array_temp[i] + "</a></li>");

        $(dropdown).append("<li id='d" + i + "'" + "role='presentation' class='divider'></li>");

        header[i] = document.getElementById('t' + i);
        divider[i] = document.getElementById('d' + i);
    }


    for (i = 0; i < button.length; i++) {

        for (j = 0; j < header.length; j++) {

            if (buildings[i].temp == header[j].innerHTML) {

                $(header[j]).after(button[i]);
            };

        };
    };

    $(divider[divider.length - 1]).remove()


    //load project name and location
    prname.innerHTML = "<b>" + project[0].pname + "</b>" + " | " + project[0].plocation;

    //default value for s
    var s = 2;
    var no = 0;
    var sa = 0;
    var ti_1 = "Annual Consumption";
    var ti_2 = "Normalized Annual Consumption";
    var un_1 = "Energy Consumption in kWh / year";
    var un_2 = "Energy Consumption in kWh / sqm / year";

    call_oeall2(s, no, sa, ti_1, un_1, index);

    //mode 1 sorting

    //sort ascending
    $(sort_asc).on("click", function() {

        $(sort).html(' ')

        if (no == 0) {
            s = 2
            call_oeall2(2, 0, 0, ti_1, un_1, index);
        } else if (no == 1) {
            s = 0
            call_oeall2(0, 1, 2, ti_2, un_2, index);
        }

    });

    //sort descending
    $(sort_dec).on("click", function() {

        $(sort).html(' Dec')

        if (no == 0) {
            s = 1
            call_oeall2(1, 0, 0, ti_1, un_1, index);
        } else if (no == 1) {
            s = 0
            call_oeall2(0, 1, 1, ti_2, un_2, index);
        }
    });

    //sort reset
    $(sort_reset).on("click", function() {

        $(sort).html(' Res')

        if (no == 0) {
            s = 0
            call_oeall2(0, 0, 0, ti_1, un_1, index);
        } else if (no == 1) {
            s = 0
            call_oeall2(0, 1, 0, ti_2, un_2, index);
        }

    });

    //mode 2 sorting

    //sort ascending
    $(sort_asc_b).on("click", function() {

        $(sort).html(' ')

        call_oeall_comp(2);

    });

    //sort descending
    $(sort_dec_b).on("click", function() {

        $(sort_b).html(' Dec')

        call_oeall_comp(1);


    });

    //sort reset
    $(sort_reset_b).on("click", function() {

        $(sort_b).html(' Res')

        call_oeall_comp(0);

    });



    //normalize by area
    $(norm_area).on("click", function() {

        $(yaxis0).html(' OE ' + "<span class='label label-danger'>Norm</span>")

        no = 1
        norm_area_fn()

        if (s == 0) {
            call_oeall2(0, 1, 0, ti_2, un_2, index);
        } else if (s == 1) {
            call_oeall2(0, 1, 1, ti_2, un_2, index);
        } else if (s == 2) {
            call_oeall2(0, 1, 2, ti_2, un_2, index);
        }


    });

    //normalize off
    $(norm_off).on("click", function() {

        $(yaxis0).html(' OE')

        no = 0
        norm_off_fn();

        if (s == 0) {
            call_oeall2(0, 1, 0, ti_2, un_2, index);
        } else if (s == 1) {
            call_oeall2(0, 1, 1, ti_2, un_2, index);
        } else if (s == 2) {
            call_oeall2(0, 1, 2, ti_2, un_2, index);
        }

        call_oeall2(s, 0, sa, ti_1, un_1, index);

    });



    //append avg and max
    $(oe).html(project[0].avg_oe.toLocaleString());
    $(mo).html(project[0].avg_mo_wk.toLocaleString());
    $(oc).html(project[0].avg_oc.toLocaleString());
    $(da).html(project[0].avg_da.toLocaleString());
    $(lc).html(project[0].avg_lc_en.toLocaleString());

    //change column name
    $(value_title).html('Average');

    //insert range values
    $(oe_range).html(project[0].min_oe.toLocaleString() + " - " + project[0].max_oe.toLocaleString());
    $(mo_range).html(project[0].min_mo_wk.toLocaleString() + " - " + project[0].max_mo_wk.toLocaleString());
    $(oc_range).html(project[0].min_oc.toLocaleString() + " - " + project[0].max_oc.toLocaleString());
    $(da_range).html(project[0].min_da.toLocaleString() + " - " + project[0].max_da.toLocaleString());
    $(lc_range).html(project[0].min_lc_en.toLocaleString() + " - " + project[0].max_lc_en.toLocaleString());

    for (i = 0; i < buildings.length; i++) {

        var sct = new scatterobj();

        sct.a1.push(buildings[i].area, buildings[i].area);
        sct.a2.push(buildings[i].area, buildings[i].wwr);
        sct.a3.push(buildings[i].area, buildings[i].oe);
        sct.a4.push(buildings[i].area, buildings[i].oe_norm);
        sct.a5.push(buildings[i].area, buildings[i].mo_walk);
        sct.a6.push(buildings[i].area, buildings[i].mo_bike);
        sct.a7.push(buildings[i].area, buildings[i].da);
        sct.a8.push(buildings[i].area, buildings[i].lc_en);
        sct.a9.push(buildings[i].area, buildings[i].lc_ca);

        sct.a1_n.push(buildings[i].area, buildings[i].bname);

        sct.b1.push(buildings[i].wwr, buildings[i].area);
        sct.b2.push(buildings[i].wwr, buildings[i].wwr);
        sct.b3.push(buildings[i].wwr, buildings[i].oe);
        sct.b4.push(buildings[i].wwr, buildings[i].oe_norm);
        sct.b5.push(buildings[i].wwr, buildings[i].mo_walk);
        sct.b6.push(buildings[i].wwr, buildings[i].mo_bike);
        sct.b7.push(buildings[i].wwr, buildings[i].da);
        sct.b8.push(buildings[i].wwr, buildings[i].lc_en);
        sct.b9.push(buildings[i].wwr, buildings[i].lc_ca);

        sct.b1_n.push(buildings[i].wwr, buildings[i].bname);

        sct.c1.push(buildings[i].oe, buildings[i].area);
        sct.c2.push(buildings[i].oe, buildings[i].wwr);
        sct.c3.push(buildings[i].oe, buildings[i].oe);
        sct.c4.push(buildings[i].oe, buildings[i].oe_norm);
        sct.c5.push(buildings[i].oe, buildings[i].mo_walk);
        sct.c6.push(buildings[i].oe, buildings[i].mo_bike);
        sct.c7.push(buildings[i].oe, buildings[i].da);
        sct.c8.push(buildings[i].oe, buildings[i].lc_en);
        sct.c9.push(buildings[i].oe, buildings[i].lc_ca);

        sct.c1_n.push(buildings[i].oe, buildings[i].bname);

        sct.d1.push(buildings[i].oe_norm, buildings[i].area);
        sct.d2.push(buildings[i].oe_norm, buildings[i].wwr);
        sct.d3.push(buildings[i].oe_norm, buildings[i].oe);
        sct.d4.push(buildings[i].oe_norm, buildings[i].oe_norm);
        sct.d5.push(buildings[i].oe_norm, buildings[i].mo_walk);
        sct.d6.push(buildings[i].oe_norm, buildings[i].mo_bike);
        sct.d7.push(buildings[i].oe_norm, buildings[i].da);
        sct.d8.push(buildings[i].oe_norm, buildings[i].lc_en);
        sct.d9.push(buildings[i].oe_norm, buildings[i].lc_ca);

        sct.d1_n.push(buildings[i].oe_norm, buildings[i].bname);

        sct.e1.push(buildings[i].mo_walk, buildings[i].area);
        sct.e2.push(buildings[i].mo_walk, buildings[i].wwr);
        sct.e3.push(buildings[i].mo_walk, buildings[i].oe);
        sct.e4.push(buildings[i].mo_walk, buildings[i].oe_norm);
        sct.e5.push(buildings[i].mo_walk, buildings[i].mo_walk);
        sct.e6.push(buildings[i].mo_walk, buildings[i].mo_bike);
        sct.d7.push(buildings[i].mo_walk, buildings[i].da);
        sct.d8.push(buildings[i].mo_walk, buildings[i].lc_en);
        sct.d9.push(buildings[i].mo_walk, buildings[i].lc_ca);

        sct.e1_n.push(buildings[i].mo_walk, buildings[i].bname);

        sct.f1.push(buildings[i].mo_bike, buildings[i].area);
        sct.f2.push(buildings[i].mo_bike, buildings[i].wwr);
        sct.f3.push(buildings[i].mo_bike, buildings[i].oe);
        sct.f4.push(buildings[i].mo_bike, buildings[i].oe_norm);
        sct.f5.push(buildings[i].mo_bike, buildings[i].mo_walk);
        sct.f6.push(buildings[i].mo_bike, buildings[i].mo_bike);
        sct.f7.push(buildings[i].mo_bike, buildings[i].da);
        sct.f8.push(buildings[i].mo_bike, buildings[i].lc_en);
        sct.f9.push(buildings[i].mo_bike, buildings[i].lc_ca);

        sct.f1_n.push(buildings[i].mo_bike, buildings[i].bname);

        sct.g1.push(buildings[i].da, buildings[i].area);
        sct.g2.push(buildings[i].da, buildings[i].wwr);
        sct.g3.push(buildings[i].da, buildings[i].oe);
        sct.g4.push(buildings[i].da, buildings[i].oe_norm);
        sct.g5.push(buildings[i].da, buildings[i].mo_walk);
        sct.g6.push(buildings[i].da, buildings[i].mo_bike);
        sct.g7.push(buildings[i].da, buildings[i].da);
        sct.g8.push(buildings[i].da, buildings[i].lc_en);
        sct.g9.push(buildings[i].da, buildings[i].lc_ca);

        sct.g1_n.push(buildings[i].da, buildings[i].bname);

        sct.h1.push(buildings[i].lc_en, buildings[i].area);
        sct.h2.push(buildings[i].lc_en, buildings[i].wwr);
        sct.h3.push(buildings[i].lc_en, buildings[i].oe);
        sct.h4.push(buildings[i].lc_en, buildings[i].oe_norm);
        sct.h5.push(buildings[i].lc_en, buildings[i].mo_walk);
        sct.h6.push(buildings[i].lc_en, buildings[i].mo_bike);
        sct.h7.push(buildings[i].lc_en, buildings[i].da);
        sct.h8.push(buildings[i].lc_en, buildings[i].lc_en);
        sct.h9.push(buildings[i].lc_en, buildings[i].lc_ca);

        sct.h1_n.push(buildings[i].lc_en, buildings[i].bname);

        sct.i1.push(buildings[i].lc_ca, buildings[i].area);
        sct.i2.push(buildings[i].lc_ca, buildings[i].wwr);
        sct.i3.push(buildings[i].lc_ca, buildings[i].oe);
        sct.i4.push(buildings[i].lc_ca, buildings[i].oe_norm);
        sct.i5.push(buildings[i].lc_ca, buildings[i].mo_walk);
        sct.i6.push(buildings[i].lc_ca, buildings[i].mo_bike);
        sct.i7.push(buildings[i].lc_ca, buildings[i].da);
        sct.i8.push(buildings[i].lc_ca, buildings[i].lc_en);
        sct.i9.push(buildings[i].lc_ca, buildings[i].lc_ca);

        sct.i1_n.push(buildings[i].lc_ca, buildings[i].bname);

        scatter.push(sct);

    }

    a1 = [];
    a2 = [];
    a3 = [];
    a4 = [];
    a5 = [];
    a6 = [];
    a7 = [];
    a8 = [];
    a9 = [];

    a1_n = [];

    b1 = [];
    b2 = [];
    b3 = [];
    b4 = [];
    b5 = [];
    b6 = [];
    b7 = [];
    b8 = [];
    b9 = [];

    b1_n = [];

    c1 = [];
    c2 = [];
    c3 = [];
    c4 = [];
    c5 = [];
    c6 = [];
    c7 = [];
    c8 = [];
    c9 = [];

    c1_n = [];

    d1 = [];
    d2 = [];
    d3 = [];
    d4 = [];
    d5 = [];
    d6 = [];
    d7 = [];
    d8 = [];
    d9 = [];

    d1_n = [];

    e1 = [];
    e2 = [];
    e3 = [];
    e4 = [];
    e5 = [];
    e6 = [];
    e7 = [];
    e8 = [];
    e9 = [];

    e1_n = [];

    f1 = [];
    f2 = [];
    f3 = [];
    f4 = [];
    f5 = [];
    f6 = [];
    f7 = [];
    f8 = [];
    f9 = [];

    f1_n = [];

    g1 = [];
    g2 = [];
    g3 = [];
    g4 = [];
    g5 = [];
    g6 = [];
    g7 = [];
    g8 = [];
    g9 = [];

    g1_n = [];

    h1 = [];
    h2 = [];
    h3 = [];
    h4 = [];
    h5 = [];
    h6 = [];
    h7 = [];
    h8 = [];
    h9 = [];

    h1_n = [];

    i1 = [];
    i2 = [];
    i3 = [];
    i4 = [];
    i5 = [];
    i6 = [];
    i7 = [];
    i8 = [];
    i9 = [];

    i1_n = [];


    for (i = 0; i < buildings.length; i++) {

        a1.push(scatter[i].a1)
        a2.push(scatter[i].a2)
        a3.push(scatter[i].a3)
        a4.push(scatter[i].a4)
        a5.push(scatter[i].a5)
        a6.push(scatter[i].a6)
        a7.push(scatter[i].a7)
        a8.push(scatter[i].a8)
        a9.push(scatter[i].a9)

        a1_n.push(scatter[i].a1_n)

        b1.push(scatter[i].b1)
        b2.push(scatter[i].b2)
        b3.push(scatter[i].b3)
        b4.push(scatter[i].b4)
        b5.push(scatter[i].b5)
        b6.push(scatter[i].b6)
        b7.push(scatter[i].b7)
        b8.push(scatter[i].b8)
        b9.push(scatter[i].b9)

        b1_n.push(scatter[i].b1_n)

        c1.push(scatter[i].c1)
        c2.push(scatter[i].c2)
        c3.push(scatter[i].c3)
        c4.push(scatter[i].c4)
        c5.push(scatter[i].c5)
        c6.push(scatter[i].c6)
        c7.push(scatter[i].c7)
        c8.push(scatter[i].c8)
        c9.push(scatter[i].c9)

        c1_n.push(scatter[i].c1_n)

        d1.push(scatter[i].d1)
        d2.push(scatter[i].d2)
        d3.push(scatter[i].d3)
        d4.push(scatter[i].d4)
        d5.push(scatter[i].d5)
        d6.push(scatter[i].d6)
        d7.push(scatter[i].d7)
        d8.push(scatter[i].d8)
        d9.push(scatter[i].d9)

        d1_n.push(scatter[i].d1_n)

        e1.push(scatter[i].e1)
        e2.push(scatter[i].e2)
        e3.push(scatter[i].e3)
        e4.push(scatter[i].e4)
        e5.push(scatter[i].e5)
        e6.push(scatter[i].e6)
        e7.push(scatter[i].e7)
        e8.push(scatter[i].e8)
        e9.push(scatter[i].e9)

        e1_n.push(scatter[i].e1_n)

        f1.push(scatter[i].f1)
        f2.push(scatter[i].f2)
        f3.push(scatter[i].f3)
        f4.push(scatter[i].f4)
        f5.push(scatter[i].f5)
        f6.push(scatter[i].f6)
        f7.push(scatter[i].f7)
        f8.push(scatter[i].f8)
        f9.push(scatter[i].f9)

        f1_n.push(scatter[i].f1_n)

        g1.push(scatter[i].g1)
        g2.push(scatter[i].g2)
        g3.push(scatter[i].g3)
        g4.push(scatter[i].g4)
        g5.push(scatter[i].g5)
        g6.push(scatter[i].g6)
        g7.push(scatter[i].g7)
        g8.push(scatter[i].g8)
        g9.push(scatter[i].g9)

        g1_n.push(scatter[i].g1_n)

        h1.push(scatter[i].h1)
        h2.push(scatter[i].h2)
        h3.push(scatter[i].h3)
        h4.push(scatter[i].h4)
        h5.push(scatter[i].h5)
        h6.push(scatter[i].h6)
        h7.push(scatter[i].h7)
        h8.push(scatter[i].h8)
        h9.push(scatter[i].h9)

        h1_n.push(scatter[i].h1_n)

        i1.push(scatter[i].i1)
        i2.push(scatter[i].i2)
        i3.push(scatter[i].i3)
        i4.push(scatter[i].i4)
        i5.push(scatter[i].i5)
        i6.push(scatter[i].i6)
        i7.push(scatter[i].i7)
        i8.push(scatter[i].i8)
        i9.push(scatter[i].i9)

        i1_n.push(scatter[i].h1_n)

    }

    function sortbyx(array) {
        array.sort(function(a, b) {
            if (a[0] == b[0]) return 0;
            return a[0] < b[0] ? -1 : 1;
        });
    };

    sortbyx(a1)
    sortbyx(a2)
    sortbyx(a3)
    sortbyx(a4)
    sortbyx(a5)
    sortbyx(a6)
    sortbyx(a7)
    sortbyx(a8)
    sortbyx(a9)

    sortbyx(a1_n)

    sortbyx(b1)
    sortbyx(b2)
    sortbyx(b3)
    sortbyx(b4)
    sortbyx(b5)
    sortbyx(b6)
    sortbyx(b7)
    sortbyx(b8)
    sortbyx(b9)

    sortbyx(b1_n)

    sortbyx(c1)
    sortbyx(c2)
    sortbyx(c3)
    sortbyx(c4)
    sortbyx(c5)
    sortbyx(c6)
    sortbyx(c7)
    sortbyx(c8)
    sortbyx(c9)

    sortbyx(c1_n)

    sortbyx(d1)
    sortbyx(d2)
    sortbyx(d3)
    sortbyx(d4)
    sortbyx(d5)
    sortbyx(d6)
    sortbyx(d7)
    sortbyx(d8)
    sortbyx(d9)

    sortbyx(d1_n)

    sortbyx(e1)
    sortbyx(e2)
    sortbyx(e3)
    sortbyx(e4)
    sortbyx(e5)
    sortbyx(e6)
    sortbyx(e7)
    sortbyx(e8)
    sortbyx(e9)

    sortbyx(e1_n)

    sortbyx(f1)
    sortbyx(f2)
    sortbyx(f3)
    sortbyx(f4)
    sortbyx(f5)
    sortbyx(f6)
    sortbyx(f7)
    sortbyx(f8)
    sortbyx(f9)

    sortbyx(f1_n)

    sortbyx(g1)
    sortbyx(g2)
    sortbyx(g3)
    sortbyx(g4)
    sortbyx(g5)
    sortbyx(g6)
    sortbyx(g7)
    sortbyx(g8)
    sortbyx(g9)

    sortbyx(g1_n)

    sortbyx(h1)
    sortbyx(h2)
    sortbyx(h3)
    sortbyx(h4)
    sortbyx(h5)
    sortbyx(h6)
    sortbyx(h7)
    sortbyx(h8)
    sortbyx(h9)

    sortbyx(h1_n)

    sortbyx(i1)
    sortbyx(i2)
    sortbyx(i3)
    sortbyx(i4)
    sortbyx(i5)
    sortbyx(i6)
    sortbyx(i7)
    sortbyx(i8)
    sortbyx(i9)

    sortbyx(i1_n)


    a1_names = [];
    b1_names = [];
    c1_names = [];
    d1_names = [];
    e1_names = [];
    f1_names = [];
    g1_names = [];
    h1_names = [];
    i1_names = [];

    for (i = 0; i < a1_n.length; i++) {

        a1_names.push(a1_n[i][1])
        b1_names.push(b1_n[i][1])
        c1_names.push(c1_n[i][1])
        d1_names.push(d1_n[i][1])
        e1_names.push(e1_n[i][1])
        f1_names.push(f1_n[i][1])
        g1_names.push(g1_n[i][1])
        h1_names.push(h1_n[i][1])
        i1_names.push(i1_n[i][1])
    }
}

//what happens upon pressing enter
function handle(e) {
    
    var key = e.keyCode || e.which;

    if (key === 13 && $(input).is(':focus')) {

        for (k = 0; k < buildings.length; k++) {
            if (input.value.toUpperCase() === buildings[k].bname.toUpperCase()) {
                n = k;
                bldinfo(n);
            }
        }
    }
    

    if (key === 13 && $(input_scl).is(':focus')) {

        var chart = $('#container').highcharts();

        if (input_scl.value != 0) {
            chart.yAxis[0].setExtremes(0, input_scl.value)
        } else {
            //call_oe('Monthly Consumption Normalized', 'Energy Consumption in kWh / sqm / month', buildings[n].oe_co_norm.toLocaleString(), buildings[n].oe_he_norm.toLocaleString(), buildings[n].oe_el_norm.toLocaleString(), buildings[n].oe_eq_norm.toLocaleString())
            call_oe2('Monthly Consumption', 'Energy Consumption in kWh / month', buildings[n].time_series_measure[i], i);
        }

    }

}

//appending the building scores to the boxes
function BldScores(bldid) {
    $(oe).html(buildings[bldid].oe.toLocaleString());
    $(mo).html(buildings[bldid].mo_walk);
    $(oc).html(buildings[bldid].oc);
    $(da).html(buildings[bldid].da);
    $(lc).html(buildings[bldid].lc_en.toLocaleString());
}

//call building info
function bldinfo(n) {

    hide('#collapseZero', menu_0);
    hide('#collapseBegin', menu_begin);
    hide('#collapseTwo', menu_2);
    hide('#collapseTwoB', menu_2b);
    hide('#collapseSeven', menu_7);
    hide('#collapseFour', menu_4);
    hide('#collapseFive', menu_5);
    hide('#collapseSix', menu_6);
    hide('#collapseEight', menu_8);
    hide('#collapseNine', menu_9);

    document.getElementsByTagName("img")[0].src = "ico/UMI.png";

    //load building scores
    BldScores(n);


    //load building name
    bldname.innerHTML = buildings[n].bname + "<font color='#d1d1d1'>" + " | Overview</style>";

    $(bread).find("li").slice(1).remove();
    $(bread).append("<li>" + "<a onclick='building_overview()' href='#'>" + buildings[n].bname + "</a>" + "</li>");
    $(bread).append("<li class='active'>" + "Overview" + "</li>");

    //load builing information
    about.innerHTML = "Building Information";
    about_content.innerHTML =
        "<li>" + "Name: " + buildings[n].bname + "</li>" +
        "<li>" + "Applied Use Type: " + buildings[n].temp + "</li>" +
        "<li>" + "Applied Template: " + buildings[n].temp_name + "</li>" +
        "<li>" + "Area: " + buildings[n].area.toLocaleString() + " sqm" + "</li>" +
        "<li>" + "WWR North: " + buildings[n].wwr_n + "</li>" +
        "<li>" + "WWR South: " + buildings[n].wwr_s + "</li>" +
        "<li>" + "WWR East: " + buildings[n].wwr_e + "</li>" +
        "<li>" + "WWR West: " + buildings[n].wwr_w + "</li>"

    //load score
    Overview(n);

    //change column name
    $(value_title).html('Value');
/*
    //restore tabs to default
    row1.style.color = "black";
    row1.style.backgroundColor = "white";
    row2.style.color = "black";
    row2.style.backgroundColor = "white";
    row3.style.color = "black";
    row3.style.backgroundColor = "white";
    row4.style.color = "black";
    row4.style.backgroundColor = "white";
    row5.style.color = "black";
    row5.style.backgroundColor = "white";

    //insert range values
    $(oe_range).html(project[0].min_oe.toLocaleString() + " - " + project[0].max_oe.toLocaleString());
    $(mo_range).html(project[0].min_mo_wk.toLocaleString() + " - " + project[0].max_mo_wk.toLocaleString());
    $(oc_range).html(project[0].min_oc.toLocaleString() + " - " + project[0].max_oc.toLocaleString());
    $(da_range).html(project[0].min_da.toLocaleString() + " - " + project[0].max_da.toLocaleString());
    $(lc_range).html(project[0].min_lc_en.toLocaleString() + " - " + project[0].max_lc_en.toLocaleString());
    $(oe_title).html('Energy');
    $(oe).html(buildings[n].oe.toLocaleString());
    $(oe_unit).html("kWh / year");
*/
}



function building_overview() {
    
    row1.style.backgroundColor = "white";
    row1.style.color = "black";
    row2.style.color = "black";
    row2.style.backgroundColor = "white";
    row3.style.color = "black";
    row3.style.backgroundColor = "white";
    row4.style.color = "black";
    row4.style.backgroundColor = "white";
    row5.style.color = "black";
    row5.style.backgroundColor = "white";
    
    document.getElementsByTagName("img")[0].src = "ico/UMI.png";

    bldname.innerHTML = buildings[n].bname + "<font color='#d1d1d1'>" + " | Overview</style>";
    $(bread).find("li").slice(2).remove();
    $(bread).find("li").slice(3).remove();
    $(bread).append("<li class='active'>" + "Overview" + "</li>");

    //reset to overview screen
    Overview(n);

    hide('#collapseFive', menu_5);
    hide('#collapseSix', menu_6);
    hide('#collapseSeven', menu_7);
    hide('#collapseEight', menu_8);
    hide('#collapseNine', menu_9);
    hide('#collapseModes', menu_modes);

    
    $(oe_title).html('Energy');
    $(oe).html(buildings[n].oe.toLocaleString());
    $(oe_unit).html("kWh / year");

    $(mo_title).html('Mobility');
    $(mo).html(buildings[n].mo_walk.toLocaleString());
    $(mo_range).html(project[0].min_mo_wk.toLocaleString() + ' - ' + project[0].max_mo_wk.toLocaleString());
    $(mo_unit).html('Walkscore (%)');

    $(lc_title).html('Lifecycle');
    $(lc).html(buildings[n].lc_en.toLocaleString());
    $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
    $(lc_unit).html('kWh / year');
    
}

//-----------------Dynamic----------------
function building_time_series_measure_value(i) { 

    //console.log("building_time_series_measure");

    $(bread).find("li").slice(2).remove();
    $(bread).append("<li>" + "<a onclick='building_overview()' href='#'>Overview</a>" + "</li>");
    $(bread).append("<li class='active'>" + headers[i].display_name + "</li>");

    row1.style.backgroundColor = "#f5f5f5";
    row1.style.color = "";
    row2.style.backgroundColor = "";
    row3.style.backgroundColor = "";
    row4.style.backgroundColor = "";
    row5.style.backgroundColor = "";

    document.getElementsByTagName("img")[0].src = "ico/bOE.png";
    bldname.innerHTML = buildings[n].bname + "<font color='#d1d1d1'>" + " | Energy</style>";

    //call_oe('Monthly Consumption', 'Energy Consumption in kWh / month', buildings[n].oe_co, buildings[n].oe_he, buildings[n].oe_el, buildings[n].oe_eq);
    call_oe2('Monthly Consumption', 'Energy Consumption in kWh / month', buildings[n].time_series_measure[i], i);
    show('#collapseFive', menu_5);

    $(norm_bd_area).on("click", function() {

       // call_oe('Monthly Consumption Normalized', 'Energy Consumption in kWh / sqm / month', buildings[n].oe_co_norm, buildings[n].oe_he_norm, buildings[n].oe_el_norm, buildings[n].oe_eq_norm)
        call_oe2('Monthly Consumption', 'Energy Consumption in kWh / month', buildings[n].time_series_measure[i], i); //SOS change to norm!

        $(oe_title).html('Energy  ' + "<span class='label label-primary'>Norm</span>");
        $(oe).html(roundToOne(buildings[n].oe / buildings[n].area).toLocaleString());
        $(oe_range).html(project[0].min_oe_norm.toLocaleString() + ' - ' + project[0].max_oe_norm.toLocaleString());
        $(oe_unit).html("kWh / sqm / year");


        show('#collapseSix', menu_6);

    })

    $(norm_bd_off).on("click", function() {

       // call_oe('Monthly Consumption', 'Energy Consumption in kWh / month', buildings[n].oe_co, buildings[n].oe_he, buildings[n].oe_el, buildings[n].oe_eq);
        call_oe2('Monthly Consumption', 'Energy Consumption in kWh / month', buildings[n].time_series_measure[i], i);

        $(oe_title).html('Energy');
        $(oe).html(buildings[n].oe.toLocaleString());
        $(oe_range).html(project[0].min_oe.toLocaleString() + ' - ' + project[0].max_oe.toLocaleString());
        $(oe_unit).html("kWh / year");

        hide('#collapseSix', menu_6);

    })

    hide('#collapseEight', menu_8);
    hide('#collapseNine', menu_9);

    
    $(mo_title).html('Mobility');
    $(mo).html(buildings[n].mo_walk.toLocaleString());
    $(mo_range).html(project[0].min_mo_wk.toLocaleString() + ' - ' + project[0].max_mo_wk.toLocaleString());
    $(mo_unit).html('Walkscore (%)');

    $(lc_title).html('Lifecycle');
    $(lc).html(buildings[n].lc_en.toLocaleString());
    $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
    $(lc_unit).html('kWh / year');
    
}
//--------------------------------------------------

function building_energy() {

    $(bread).find("li").slice(2).remove();
    $(bread).append("<li>" + "<a onclick='building_overview()' href='#'>Overview</a>" + "</li>");
    $(bread).append("<li class='active'>" + "Energy" + "</li>");

    row1.style.backgroundColor = "#f5f5f5";
    row1.style.color = "";
    row2.style.backgroundColor = "";
    row3.style.backgroundColor = "";
    row4.style.backgroundColor = "";
    row5.style.backgroundColor = "";

    document.getElementsByTagName("img")[0].src = "ico/bOE.png";
    bldname.innerHTML = buildings[n].bname + "<font color='#d1d1d1'>" + " | Energy</style>";

    call_oe('Monthly Consumption', 'Energy Consumption in kWh / month', buildings[n].oe_co, buildings[n].oe_he, buildings[n].oe_el, buildings[n].oe_eq);
    show('#collapseFive', menu_5);

    $(norm_bd_area).on("click", function() {

        call_oe('Monthly Consumption Normalized', 'Energy Consumption in kWh / sqm / month', buildings[n].oe_co_norm, buildings[n].oe_he_norm, buildings[n].oe_el_norm, buildings[n].oe_eq_norm)

        $(oe_title).html('Energy  ' + "<span class='label label-primary'>Norm</span>");
        $(oe).html(roundToOne(buildings[n].oe / buildings[n].area).toLocaleString());
        $(oe_range).html(project[0].min_oe_norm.toLocaleString() + ' - ' + project[0].max_oe_norm.toLocaleString());
        $(oe_unit).html("kWh / sqm / year");


        show('#collapseSix', menu_6);

    })

    $(norm_bd_off).on("click", function() {

        call_oe('Monthly Consumption', 'Energy Consumption in kWh / month', buildings[n].oe_co, buildings[n].oe_he, buildings[n].oe_el, buildings[n].oe_eq);

        $(oe_title).html('Energy');
        $(oe).html(buildings[n].oe.toLocaleString());
        $(oe_range).html(project[0].min_oe.toLocaleString() + ' - ' + project[0].max_oe.toLocaleString());
        $(oe_unit).html("kWh / year");

        hide('#collapseSix', menu_6);

    })

    hide('#collapseEight', menu_8);
    hide('#collapseNine', menu_9);

    
    $(mo_title).html('Mobility');
    $(mo).html(buildings[n].mo_walk.toLocaleString());
    $(mo_range).html(project[0].min_mo_wk.toLocaleString() + ' - ' + project[0].max_mo_wk.toLocaleString());
    $(mo_unit).html('Walkscore (%)');

    $(lc_title).html('Lifecycle');
    $(lc).html(buildings[n].lc_en.toLocaleString());
    $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
    $(lc_unit).html('kWh / year');
    
}

function building_mobility() {

    $(bread).find("li").slice(2).remove();
    $(bread).append("<li>" + "<a onclick='building_overview()' href='#'>Overview</a>" + "</li>");
    $(bread).append("<li class='active'>" + "Mobility" + "</li>");

    row2.style.backgroundColor = "#f5f5f5";
    row2.style.color = "";
    row1.style.backgroundColor = "";
    row3.style.backgroundColor = "";
    row4.style.backgroundColor = "";
    row5.style.backgroundColor = "";

    //call histogram
    histogram_walkability();

    document.getElementsByTagName("img")[0].src = "ico/bMO.png";
    bldname.innerHTML = buildings[n].bname + "<font color='#d1d1d1'>" + " | Mobility</style>";

    hide('#collapseSeven', menu_7);
    hide('#collapseFive', menu_5);
    hide('#collapseSix', menu_6);
    hide('#collapseNine', menu_9);

    show('#collapseEight', menu_8);

    $(oe_title).html('Energy');
    $(oe).html(buildings[n].oe.toLocaleString());
    $(oe_unit).html("kWh / year");

    $(lc_title).html('Lifecycle');
    $(lc).html(buildings[n].lc_en.toLocaleString());
    $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
    $(lc_unit).html('kWh / year');

    $(walkscore).on("click", function() {
        walkscore_bd_fn()
        histogram_walkability();
    });

    $(bikescore).on("click", function() {
        bikescore_bd_fn()
        histogram_bikeability();
    });
}

function building_daylight() {
    $(bread).find("li").slice(2).remove();
    $(bread).append("<li>" + "<a onclick='building_overview()' href='#'>Overview</a>" + "</li>");
    $(bread).append("<li class='active'>" + "Daylight" + "</li>");

    row4.style.backgroundColor = "#f5f5f5";
    row4.style.color = "";
    row1.style.backgroundColor = "";
    row2.style.backgroundColor = "";
    row3.style.backgroundColor = "";
    row5.style.backgroundColor = "";

    document.getElementsByTagName("img")[0].src = "ico/bDA.png";

    hide('#collapseSeven', menu_7);
    hide('#collapseFive', menu_5);
    hide('#collapseSix', menu_6);
    hide('#collapseEight', menu_8);
    hide('#collapseNine', menu_9);

    $(oe_title).html('Energy');
    $(oe).html(buildings[n].oe.toLocaleString());
    $(oe_unit).html("kWh / year");

    $(mo_title).html('Mobility');
    $(mo).html(buildings[n].mo_walk.toLocaleString());
    $(mo_range).html(project[0].min_mo_wk.toLocaleString() + ' - ' + project[0].max_mo_wk.toLocaleString());
    $(mo_unit).html('Walkscore (%)');

    $(lc_title).html('Lifecycle');
    $(lc).html(buildings[n].lc_en.toLocaleString());
    $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
    $(lc_unit).html('kWh / year');

    bldname.innerHTML = buildings[n].bname + "<font color='#d1d1d1'>" + " | Daylight</style>";
    histogram_daylight();
}

function building_lifecycle() {

    $(bread).find("li").slice(2).remove();
    $(bread).append("<li>" + "<a onclick='building_overview()' href='#'>Overview</a>" + "</li>");
    $(bread).append("<li class='active'>" + "Lifecycle" + "</li>");

    row5.style.backgroundColor = "#f5f5f5";
    row5.style.color = "";
    row1.style.backgroundColor = "";
    row2.style.backgroundColor = "";
    row4.style.backgroundColor = "";
    row3.style.backgroundColor = "";

    document.getElementsByTagName("img")[0].src = "ico/bLC.png";
    bldname.innerHTML = buildings[n].bname + "<font color='#d1d1d1'>" + " | Lifecycle</style>";

    hide('#collapseSeven', menu_7);
    hide('#collapseFive', menu_5);
    hide('#collapseSix', menu_6);
    hide('#collapseEight', menu_8);

    show('#collapseNine', menu_9);

    $(oe_title).html('Energy');
    $(oe).html(buildings[n].oe.toLocaleString());
    $(oe_unit).html("kWh / year");

    $(mo_title).html('Mobility');
    $(mo).html(buildings[n].mo_walk.toLocaleString());
    $(mo_range).html(project[0].min_mo_wk.toLocaleString() + ' - ' + project[0].max_mo_wk.toLocaleString());
    $(mo_unit).html('Walkscore (%)');

    call_lcall(1, 'Lifecycle Energy', 'Lifecycle Energy in kWh / year', 'kWh / year');


    $(lc_energy).on("click", function() {
        $(lc_title).html('Lifecycle');
        $(lc).html(buildings[n].lc_en.toLocaleString());
        $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
        $(lc_unit).html('kWh / year');

        call_lcall(1, 'Lifecycle Energy', 'Lifecycle Energy in kWh / year', 'kWh / year');

    });

    $(lc_carbon).on("click", function() {
        $(lc_title).html('Lifecycle  ' + "<span class='label label-lc'>Carbon</span>");
        $(lc).html(buildings[n].lc_ca.toLocaleString());
        $(lc_range).html(project[0].min_lc_ca.toLocaleString() + ' - ' + project[0].max_lc_ca.toLocaleString());
        $(lc_unit).html('kg / year');

        call_lcall(2, 'Lifecycle Carbon', 'Lifecycle Carbon in kg / year', 'kg / year');

    });
}

//-----------------Dynamic-------------------------//


function building_single_measure_value(j) {

    $(bread).find("li").slice(2).remove();
    $(bread).append("<li>" + "<a onclick='building_overview()' href='#'>Overview</a>" + "</li>");
    $(bread).append("<li class='active'>" + headers[j].display_name + "</li>");

    

    row4.style.backgroundColor = "#f5f5f5";
    row4.style.color = "";
    row1.style.backgroundColor = "";
    row2.style.backgroundColor = "";
    row3.style.backgroundColor = "";
    row5.style.backgroundColor = "";

    document.getElementsByTagName("img")[0].src = "ico/bDA.png";

    hide('#collapseSeven', menu_7);
    hide('#collapseFive', menu_5);
    hide('#collapseSix', menu_6);
    hide('#collapseEight', menu_8);
    hide('#collapseNine', menu_9);


    /*for (i = 0; i < headers.length; i++) 
    {

      $('#table > tbody:last').append('<tr><td class=\"text-center\"> <img src="UMI Dashboard_files/LC.png" style="width: 30px" /></td><td class=\"text-center\"> ' + headers[i].hname +' </td><td class=\"text-center\">' + headers[i].hvalue +' </td><td class=\"text-center\">' +headers[i].unit +' </td><td class=\"text-center\">' + headers[i].range +' </td></tr>');
    }*/
/*

    $(oe_title).html('Energy');
    $(oe).html(buildings[n].oe.toLocaleString());
    $(oe_unit).html("kWh / year");

    $(mo_title).html('Mobility');
    $(mo).html(buildings[n].mo_walk.toLocaleString());
    $(mo_range).html(project[0].min_mo_wk.toLocaleString() + ' - ' + project[0].max_mo_wk.toLocaleString());
    $(mo_unit).html('Walkscore (%)');

    $(lc_title).html('Lifecycle');
    $(lc).html(buildings[n].lc_en.toLocaleString());
    $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
    $(lc_unit).html('kWh / year');
    
*/
    bldname.innerHTML = buildings[n].bname + "<font color='#d1d1d1'>" + " | " + headers[j].display_name + "</style>";


    histogram_single_measure_values(j);
}


function histogram_single_measure_values(j) {

    //var da_description = ["Very Shaded", "Shaded", "Somewhat Daylit", "Daylit", "Sublime"]; 
    var description = headers[j].description;

    //var hist_values = [headers[j].nlevels][];
    var hist_levels = [];
    var current;
    var counters = [];
    for (i = 0; i < headers[j].nlevels; i++) {
        counters[i] = 0;
        if(i == 0)
            hist_levels[i] = headers[j].range[0];
        else
            hist_levels[i] = headers[j].levels[i-1];
    }
    hist_levels[headers[j].nlevels] = headers[j].range[1];

    for (var i = 0; i < buildings.length; i++) {
        for(var k = 0; k < headers[j].nlevels; k++){
            if(buildings[i].single_value_measure[j] >= hist_levels[k] && buildings[i].single_value_measure[j] < hist_levels[k+1]){
                    counters[k] = counters[k] + 1;               
            }
        }
    }

    //foo = hist_levels[1];
    var da_colors = ["#FFBE20", "#FFBE20", "#FFBE20", "#FFBE20", "#FFBE20"];
    var title = headers[j].display_name+' Autonomy Distribution'

    /*
    if (n == null) {
        da_colors = ["#FFBE20", "#FFBE20", "#FFBE20", "#FFBE20", "#FFBE20"]
    } else {
        if ((da_01.indexOf(n)) != -1) {
            da_colors = ['rgba(255, 190, 32, 1.0)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)']
        } else if ((da_02.indexOf(n)) != -1) {
            da_colors = ['rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 1.0)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)']
        } else if ((da_03.indexOf(n)) != -1) {
            da_colors = ['rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 1.0)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)']
        } else if ((da_04.indexOf(n)) != -1) {
            da_colors = ['rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 1.0)', 'rgba(255, 190, 32, 0.4)']
        } else if ((da_05.indexOf(n)) != -1) {
            da_colors = ['rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 1.0)']
        }
    }*/

    $('#container').highcharts({

        chart: {
            type: 'column'
        },
        legend: {
            enabled: false
        },
        title: {
            text: title
        },
        xAxis: {
            categories: description,
            lineColor: "#DCDCDC",
            tickColor: "#DCDCDC"
        },
        yAxis: {
            min: 0,
            gridLineColor: "#DCDCDC",
            title: {
                text: 'Number of Occurences'
            }
        },
        tooltip: {
            formatter: function() {
                return this.series.name + ': ' + this.y.toLocaleString()
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                groupPadding: 0,
                borderWidth: 1,
                colorByPoint: true,
                colors: da_colors,
                dataLabels: {
                    enabled: true
                }
            },
        },
        series: [{
            name: 'Number of Occurences',
            data: counters
        }]
    });
};

//--------------------------------------------//


//-----------------Dynamic--------------------//

$('#table > tbody').on('click', 'tr', function() {

    var index = this.id;
    console.log(index);
    //var htype = document.getElementById(index).value;
    var htype = headers[index].htype;
    console.log(htype);
    
    
     if (n != null) {

        //if (this.style.backgroundColor == "" || this.style.backgroundColor == "white") {

            //building_daylight(); EDIT
            if( htype == "time_series"){
                //building_energy();
                building_time_series_measure_value(index)
            } else {
                building_single_measure_value(index);
            }

       // } else {

//            building_overview();
  //      }
    } else if (n == null && ch_t==1 && mode==1) {
     if(htype == "time_series"){
        $(bread).find("li").slice(1).remove();
        $(bread).append("<li class='active'>" + headers[index].display_name + "</li>");

        if (this.style.backgroundColor == "" || this.style.backgroundColor == "white") {

            //this.style.backgroundColor = "#f5f5f5";
            row1.style.backgroundColor = "";
            row3.style.backgroundColor = "";
            row2.style.backgroundColor = "";
            row5.style.backgroundColor = "";

            //call histogram
            // histogram_daylight();//EDIT
            //building_single_measure_value(index);
            
            Start_Chart1(index);
            
            
            
            document.getElementsByTagName("img")[0].src = "ico/bDA.png";
            document.getElementsByTagName("h3")[0].innerHTML = "Buildings" + "<font color='#d3d3d3'>" + " | Energy </style>";

            show('#collapseZero', menu_begin);
            show('#collapseModes', menu_modes);
            hide('#collapseTwo', menu_2);
            hide('#collapseSeven', menu_7);
            hide('#collapseFive', menu_5);
            hide('#collapseSix', menu_6);
            hide('#collapseNine', menu_9);
            hide('#collapseEight', menu_8);
      
/*
            $(oe_title).html('Energy');
            $(oe).html(project[0].avg_oe.toLocaleString());
            $(oe_range).html(project[0].min_oe.toLocaleString() + ' - ' + project[0].max_oe.toLocaleString());
            $(oe_unit).html("kWh / year");
            $(lc_title).html('Lifecycle');
            $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
            $(lc_unit).html('kWh / year');
*/
        }
      } else {
        $(bread).find("li").slice(1).remove();
        $(bread).append("<li class='active'>" + headers[index].display_name + "</li>");

        if (this.style.backgroundColor == "" || this.style.backgroundColor == "white") {

            //this.style.backgroundColor = "#f5f5f5";
            row1.style.backgroundColor = "";
            row3.style.backgroundColor = "";
            row2.style.backgroundColor = "";
            row5.style.backgroundColor = "";

            //call histogram
            // histogram_daylight();//EDIT
            //building_single_measure_value(index);
            
            histogram_single_measure_values(index);
            
            
            
            document.getElementsByTagName("img")[0].src = "ico/bDA.png";
            document.getElementsByTagName("h3")[0].innerHTML = "Buildings" + "<font color='#d3d3d3'>" + " | "+ headers[index].display_name + "</style>";

            show('#collapseZero', menu_begin);
            show('#collapseModes', menu_modes);
            hide('#collapseTwo', menu_2);
            hide('#collapseSeven', menu_7);
            hide('#collapseFive', menu_5);
            hide('#collapseSix', menu_6);
            hide('#collapseNine', menu_9);
            hide('#collapseEight', menu_8);

      }
    }
    }
});

//*******************************************//
/*                                                                  Dynamic
//click on row 1
$(row1).on("click", function() {

    if (n != null) {

        if (row1.style.backgroundColor == "" || row1.style.backgroundColor == "white") {

            building_energy();

        } else {

            building_overview();
        }
    } else if (n == null && ch_t==1 && mode==1) {

        $(bread).find("li").slice(1).remove();
        $(bread).append("<li class='active'>" + "Energy" + "</li>");

        if (this.style.backgroundColor == "" || this.style.backgroundColor == "white") {

            this.style.backgroundColor = "#f5f5f5";
            row2.style.backgroundColor = "";
            row3.style.backgroundColor = "";
            row4.style.backgroundColor = "";
            row5.style.backgroundColor = "";

            //call histogram
            Start_Chart1();

            show('#collapseZero', menu_begin);
            show('#collapseTwo', menu_2);
            hide('#collapseSeven', menu_7);
            hide('#collapseFive', menu_5);
            hide('#collapseSix', menu_6);
            hide('#collapseNine', menu_9);
            hide('#collapseEight', menu_8);

            $(oe_title).html('Energy');
            $(oe).html(project[0].avg_oe.toLocaleString());
            $(oe_range).html(project[0].min_oe.toLocaleString() + ' - ' + project[0].max_oe.toLocaleString());
            $(oe_unit).html("kWh / year");
            $(lc_title).html('Lifecycle');
            $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
            $(lc_unit).html('kWh / year');
        }

    }
})


//click on row 2
$(row2).on("click", function() {

    if (n != null) {

        if (row2.style.backgroundColor == "" || row2.style.backgroundColor == "white") {

            building_mobility();

        } else {

            building_overview();
        }
    } else if (n == null && ch_t==1 && mode==1) {

        $(bread).find("li").slice(1).remove();
        $(bread).append("<li class='active'>" + "Mobility" + "</li>");

        if (this.style.backgroundColor == "" || this.style.backgroundColor == "white") {

            this.style.backgroundColor = "#f5f5f5";
            row1.style.backgroundColor = "";
            row3.style.backgroundColor = "";
            row4.style.backgroundColor = "";
            row5.style.backgroundColor = "";

            //call histogram
            histogram_walkability();

            document.getElementsByTagName("img")[0].src = "ico/bMO.png";
            document.getElementsByTagName("h3")[0].innerHTML = "Buildings" + "<font color='#d3d3d3'>" + " | Mobility" + "</style>";

            hide('#collapseZero', menu_begin);
            hide('#collapseModes', menu_modes);
            hide('#collapseTwo', menu_2);
            hide('#collapseSeven', menu_7);
            hide('#collapseFive', menu_5);
            hide('#collapseSix', menu_6);
            hide('#collapseNine', menu_9);
            hide('#collapseEight', menu_8);

            $(oe_title).html('Energy');
            $(oe).html(project[0].avg_oe.toLocaleString());
            $(oe_range).html(project[0].min_oe.toLocaleString() + ' - ' + project[0].max_oe.toLocaleString());
            $(oe_unit).html("kWh / year");
            $(lc_title).html('Lifecycle');
            $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
            $(lc_unit).html('kWh / year');
        }
    }
});


//click on row 4
$(row4).on("click", function() {

    if (n != null) {

        if (row4.style.backgroundColor == "" || row4.style.backgroundColor == "white") {

            building_daylight();

        } else {

            building_overview();
        }
    } else if (n == null && ch_t==1 && mode==1) {

        $(bread).find("li").slice(1).remove();
        $(bread).append("<li class='active'>" + "Daylight" + "</li>");

        if (this.style.backgroundColor == "" || this.style.backgroundColor == "white") {

            this.style.backgroundColor = "#f5f5f5";
            row1.style.backgroundColor = "";
            row3.style.backgroundColor = "";
            row2.style.backgroundColor = "";
            row5.style.backgroundColor = "";

            //call histogram
            histogram_daylight();

            document.getElementsByTagName("img")[0].src = "ico/bDA.png";
            document.getElementsByTagName("h3")[0].innerHTML = "Buildings" + "<font color='#d3d3d3'>" + " | Daylight" + "</style>";

            hide('#collapseZero', menu_begin);
            hide('#collapseModes', menu_modes);
            hide('#collapseTwo', menu_2);
            hide('#collapseSeven', menu_7);
            hide('#collapseFive', menu_5);
            hide('#collapseSix', menu_6);
            hide('#collapseNine', menu_9);
            hide('#collapseEight', menu_8);

            $(oe_title).html('Energy');
            $(oe).html(project[0].avg_oe.toLocaleString());
            $(oe_range).html(project[0].min_oe.toLocaleString() + ' - ' + project[0].max_oe.toLocaleString());
            $(oe_unit).html("kWh / year");
            $(lc_title).html('Lifecycle');
            $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
            $(lc_unit).html('kWh / year');
        }
    }
});


//click on row 5
$(row5).on("click", function() {

    if (n != null) {

        if (row5.style.backgroundColor == "" || row5.style.backgroundColor == "white") {

            building_lifecycle();

        } else {

            building_overview();

        }
    } else if (n == null && ch_t==1 && mode==1) {

        $(bread).find("li").slice(1).remove();
        $(bread).append("<li class='active'>" + "Lifecycle" + "</li>");

        if (this.style.backgroundColor == "" || this.style.backgroundColor == "white") {

            this.style.backgroundColor = "#f5f5f5";
            row1.style.backgroundColor = "";
            row2.style.backgroundColor = "";
            row3.style.backgroundColor = "";
            row4.style.backgroundColor = "";

            //call histogram
            call_lcall(1, 'Lifecycle Energy', 'Lifecycle Energy in kWh / year', 'kWh / year');

            document.getElementsByTagName("img")[0].src = "ico/bLC.png";
            document.getElementsByTagName("h3")[0].innerHTML = "Buildings" + "<font color='#d3d3d3'>" + " | Lifecycle" + "</style>";

            hide('#collapseZero', menu_begin);
            hide('#collapseModes', menu_modes);
            hide('#collapseTwo', menu_2);
            hide('#collapseSeven', menu_7);
            hide('#collapseFive', menu_5);
            hide('#collapseSix', menu_6);
            hide('#collapseNine', menu_9);
            hide('#collapseEight', menu_8);

            $(oe_title).html('Energy');
            $(oe).html(project[0].avg_oe.toLocaleString());
            $(oe_range).html(project[0].min_oe.toLocaleString() + ' - ' + project[0].max_oe.toLocaleString());
            $(oe_unit).html("kWh / year");
            $(lc_title).html('Lifecycle');
            $(lc_range).html(project[0].min_lc_en.toLocaleString() + ' - ' + project[0].max_lc_en.toLocaleString());
            $(lc_unit).html('kWh / year');
        }
    }
});
*/
//overview graph
function Overview(bldid) {

    hide('#collapseModes', menu_modes);

    var overview_categories=[];
    var overview_blddata=[];
    var overview_avgdata=[];

    //-------------------- Dynamic -------------------------
    for(j = 0; j < headers.length; j++){
        overview_categories.push(headers[j].display_name);
        if (headers[j].hname == "LCEnergy" || headers[j].hname == "LCCarbon" || headers[j].htype == "time_series"){
            overview_blddata.push(Math.round(buildings[bldid].single_value_measure[j] / project[0].max_single_value_measures[j] * 100));
            overview_avgdata.push(Math.round(project[0].avg_single_value_measures[j] / project[0].max_single_value_measures[j] * 100));
        } else {
            overview_blddata.push(buildings[bldid].single_value_measure[j]);
            overview_avgdata.push(project[0].avg_single_value_measures[j]);
        }
    }
    /*
    if(project[0].bool_lc) { 
        overview_categories.push('Lifecycle');
        overview_blddata.push(Math.round(buildings[bldid].lc_en / project[0].max_lc_en * 100));
        overview_avgdata.push(Math.round(project[0].avg_lc_en / project[0].max_lc_en * 100));
    }

    if(project[0].bool_mo) { 
        overview_categories.push('Mobility');
        overview_blddata.push(buildings[bldid].mo_walk);
        overview_avgdata.push(project[0].avg_mo_wk);
    }

    if(project[0].bool_da) { 
        overview_categories.push('Daylight');
        overview_blddata.push(buildings[bldid].da);
        overview_avgdata.push(project[0].avg_da);
    }
    
    if(project[0].bool_oe) { 
        overview_categories.push('Energy');
        overview_blddata.push(Math.round(buildings[bldid].oe / buildings[bldid].temp_max * 100));
        overview_avgdata.push(Math.round(buildings[bldid].temp_avg / buildings[bldid].temp_max * 100));
    }*/

    $('#container').highcharts({

        colors: ['#00A99D', '#ED1E79'],

        chart: {
            polar: true,
            type: 'area'
        },

        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function() {                     // Dynamic
                            for(j = 0; j < headers.length; j++){
                                if (this.category == headers[j].display_name) {
                                    if(headers[j].htype == "time_series"){
                                        building_time_series_measure_value(j);
                                    } else {
                                        building_single_measure_value(j);
                                    }
                                }
                            }
                              /*else if (this.category == 'MOWalkability') {
                                building_mobility();
                            } else if (this.category == 'DaylitArea') {
                                building_daylight();
                            } else if (this.category == 'LCEnergy') {
                                building_lifecycle();
                            }*/
                        }
                    }
                }
            }
        },

        title: {
            text: 'Overview Graph'
        },

        subtitle: {
            text: 'Click the dots to view detailed metrics'
        },

        xAxis: {
            categories: overview_categories,
            tickmarkPlacement: 'on',
            lineWidth: 0,
            gridLineColor: "#DCDCDC",
            minorGridLineColor: "#DCDCDC",
            minorTickColor: "#DCDCDC"
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            gridLineColor: "#DCDCDC",
            max: 100,
            min:0,
            labels: {
                enabled: false
            }
        },

        tooltip: {
            shared: true,
            formatter: function() {

                /*if (this.x == 'Energy') {
                    var s = '<b>Energy</b>' + '<br/>' + buildings[bldid].bname + ': ' + buildings[bldid].oe.toLocaleString() + ' kWh/year' + '<br/>' +
                        'Use Type Average' + ': ' + buildings[bldid].temp_avg.toLocaleString() + ' kWh/year';
                    return s;
                } else {*/
                    var s = ''
                    for(j = 0; j < headers.length; j++){        // Dynamic
                        if (this.x == headers[j].hname)
                            s = '<b>' + headers[j].display_name +'</b>' + '<br/>' + buildings[bldid].bname + ': ' + 
                                buildings[bldid].single_value_measure[j].toLocaleString() + '%' + '<br/>' +
                                'Average' + ': ' + project[0].avg_single_value_measures[j].toLocaleString() + headers[j].unit;
                    }
                    return s;
                //}

                /* if (this.x == 'Lifecycle') {
                    var s = '<b>Lifecycle</b>' + '<br/>' + buildings[bldid].bname + ': ' + buildings[bldid].lc_en.toLocaleString() + ' kWh/year' + '<br/>' +
                        'Average' + ': ' + project[0].avg_lc_en.toLocaleString() + ' kWh/year';
                    return s;
                } else if (this.x == 'Mobility') {
                    var s = '<b>Mobility</b>' + '<br/>' + buildings[bldid].bname + ': ' + buildings[bldid].mo_walk.toLocaleString() + '%' + '<br/>' +
                        'Average' + ': ' + project[0].avg_mo_wk.toLocaleString() + '%';
                    return s;
                } else if (this.x == 'Daylight') {
                    var s = '<b>Daylight</b>' + '<br/>' + buildings[bldid].bname + ': ' + buildings[bldid].da.toLocaleString() + '%' + '<br/>' +
                        'Average' + ': ' + project[0].avg_da.toLocaleString() + '%';
                    return s;
                }*/

            }
        },

        legend: {
            align: 'bottom',
            verticalAlign: 'top',
            y: 50,
            layout: 'vertical'
        },

        series: [{
            name: buildings[bldid].bname,
            data: overview_blddata,
            pointPlacement: 'on'
        }, {
            name: 'Average',
            data: overview_avgdata,
            pointPlacement: 'on'
        }]
    });
};


function call_oe2(_title, _units, _series, index) { 

    var series = [];
    for (var i = 0; i < _series.length; i++) {
        series.push({
            name: headers[index].catogeries_display_name[i],  //Pass header Index
            data: _series[i]
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
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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
                enabled: true,
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
            line: {
                marker: {
                    enabled: false
                }
            }
        },

    series: series
    })
};

//call Energy chart
function call_oe(_title, _units, _series01, _series02, _series03, _series04) {

    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: _title
        },
        xAxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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
                enabled: true,
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
            line: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [{
            name: 'Cooling',
            data: _series01,
            color: '#107dff'
        }, {
            name: 'Heating',
            data: _series02,
            color: '#ed1e79'
        }, {
            name: 'Lighting',
            data: _series03,
            color: '#ffbe20'
        }, {
            name: 'Equipment',
            data: _series04,
            color: '#00a99d'
        }],
    })
};

function call_oeall2(_sort, _norm, _sortarea, _title, _units, index) { //index of time_series_value

    function bldOeObj() {
        this.bname;
        this.area;
        this.sum;
        this.sum_category;
        this.norm_oe;
    }
    //console.log()
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
        //console.log("NAMES");
        //console.log(bname_arr);
    }

    var series = [];
    for(var j=0; j < headers[index].nCatogeries; j++){ 
        series.push({
            name: "YYY", 
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

//call all Energy
function call_oeall(_sort, _norm, _sortarea, _title, _units) {

    function bldOeObj(_bn, _ar, _bt, _co, _he, _el, _eq, _noe) {
        this.bname = _bn;
        this.area = _ar;
        this.oe = _bt;
        this.oe_co_all = _co
        this.oe_he_all = _he
        this.oe_el_all = _el
        this.oe_eq_all = _eq

        this.norm_oe = _noe
    }

    var bobs = [];

    var noe_array = [];

    for (i = 0; i < buildings.length; i++) {

        var noe = buildings[i].oe / buildings[i].area;

        noe_array.push(noe);

        var b = new bldOeObj(buildings[i].bname, buildings[i].area, buildings[i].oe, buildings[i].oe_co_all, buildings[i].oe_he_all, buildings[i].oe_el_all, buildings[i].oe_eq_all, noe_array[i]);
        bobs.push(b);
    }

    //sort
    if (_sort == 1) {
        bobs.sort(function(a, b) {
            return b.oe - a.oe
        })
    } else if (_sort == 2) {
        bobs.sort(function(a, b) {
            return a.oe - b.oe
        })
    };

    var oe_co = [];
    var oe_he = [];
    var oe_el = [];
    var oe_eq = [];
    var bname_arr = [];

    for (i = 0; i < buildings.length; i++) {
        oe_co.push(bobs[i].oe_co_all)
        oe_he.push(bobs[i].oe_he_all)
        oe_el.push(bobs[i].oe_el_all)
        oe_eq.push(bobs[i].oe_eq_all)
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

        oe_co = [];
        oe_he = [];
        oe_el = [];
        oe_eq = [];
        bname_arr = [];

        for (i = 0; i < buildings.length; i++) {

            var o_co_a = bobs[i].oe_co_all / bobs[i].area;
            var o_he_a = bobs[i].oe_he_all / bobs[i].area;
            var o_el_a = bobs[i].oe_el_all / bobs[i].area;
            var o_eq_a = bobs[i].oe_eq_all / bobs[i].area;

            var oe_co_area = roundToOne(o_co_a);
            var oe_he_area = roundToOne(o_he_a);
            var oe_el_area = roundToOne(o_el_a);
            var oe_eq_area = roundToOne(o_eq_a);
            var bname_arr_area = bobs[i].bname;

            oe_co.push(oe_co_area)
            oe_he.push(oe_he_area)
            oe_el.push(oe_el_area)
            oe_eq.push(oe_eq_area)
            bname_arr.push(bname_arr_area)
        }
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
        series: [{
            name: 'Cooling',
            data: oe_co
        }, {
            name: 'Heating',
            data: oe_he
        }, {
            name: 'Lighting',
            data: oe_el
        }, {
            name: 'Equipment',
            data: oe_eq
        }],

        colors: [
            '#107dff', '#ed1e79', '#ffbe20', '#00a99d'
        ]
    })
};


//create scatter object
function scatterobj() {

    this.a1 = [];
    this.a2 = [];
    this.a3 = [];
    this.a4 = [];
    this.a5 = [];
    this.a6 = [];
    this.a7 = [];
    this.a8 = [];
    this.a9 = [];

    this.b1 = [];
    this.b2 = [];
    this.b3 = [];
    this.b4 = [];
    this.b5 = [];
    this.b6 = [];
    this.b7 = [];
    this.b8 = [];
    this.b9 = [];

    this.c1 = [];
    this.c2 = [];
    this.c3 = [];
    this.c4 = [];
    this.c5 = [];
    this.c6 = [];
    this.c7 = [];
    this.c8 = [];
    this.c9 = [];

    this.d1 = [];
    this.d2 = [];
    this.d3 = [];
    this.d4 = [];
    this.d5 = [];
    this.d6 = [];
    this.d7 = [];
    this.d8 = [];
    this.d9 = [];

    this.e1 = [];
    this.e2 = [];
    this.e3 = [];
    this.e4 = [];
    this.e5 = [];
    this.e6 = [];
    this.e7 = [];
    this.e8 = [];
    this.e9 = [];

    this.f1 = [];
    this.f2 = [];
    this.f3 = [];
    this.f4 = [];
    this.f5 = [];
    this.f6 = [];
    this.f7 = [];
    this.f8 = [];
    this.f9 = [];

    this.g1 = [];
    this.g2 = [];
    this.g3 = [];
    this.g4 = [];
    this.g5 = [];
    this.g6 = [];
    this.g7 = [];
    this.g8 = [];
    this.g9 = [];

    this.h1 = [];
    this.h2 = [];
    this.h3 = [];
    this.h4 = [];
    this.h5 = [];
    this.h6 = [];
    this.h7 = [];
    this.h8 = [];
    this.h9 = [];

    this.i1 = [];
    this.i2 = [];
    this.i3 = [];
    this.i4 = [];
    this.i5 = [];
    this.i6 = [];
    this.i7 = [];
    this.i8 = [];
    this.i9 = [];

    this.a1_n = [];
    this.b1_n = [];
    this.c1_n = [];
    this.d1_n = [];
    this.e1_n = [];
    this.f1_n = [];
    this.g1_n = [];
    this.h1_n = [];
    this.i1_n = [];
}

//scatter variables
scatter = [];

var sc_a = 0;
var sc_b = 0;
var sc_c = 0;

var title_a = null;
var title_b = null;

var units_a = null;
var units_b = null;

var names = null;

//scatter controls
$(x_area).on('click', function() {

    $(xaxis).html(" Area");
    sc_a = 'a'
    title_a = 'Area'
    units_a = 'sqm'
    names = a1_names

    submit_scatter();
})

$(x_wwr).on('click', function() {

    $(xaxis).html(" WWR")
    sc_a = 'b'
    title_a = 'WWR'
    units_a = 'ratio'
    names = b1_names

    submit_scatter();
})

$(x_oe).on('click', function() {

    $(xaxis).html(" OE")
    sc_a = 'c'
    title_a = 'Consumption'
    units_a = 'kWh / year'
    names = c1_names

    submit_scatter();
})

$(x_oe_norm).on('click', function() {

    $(xaxis).html(" OE " + "<span class='label label-danger'>Norm</span>")
    sc_a = 'd'
    title_a = 'Normalized Consumption'
    units_a = 'kWh / sqm / year'
    names = d1_names

    submit_scatter();
})

$(x_mo_walk).on('click', function() {

    $(xaxis).html(" MO")
    sc_a = 'e'
    title_a = 'Walkscore'
    units_a = '%'
    names = e1_names

    submit_scatter();
})

$(x_mo_bike).on('click', function() {

    $(xaxis).html(" MO " + "<span class='label label-danger'>Bike</span>")
    sc_a = 'f'
    title_a = 'Bikescore'
    units_a = '%'
    names = f1_names

    submit_scatter();
})

$(x_da).on('click', function() {

    $(xaxis).html(" DA");
    sc_a = 'g'
    title_a = 'Autonomy'
    units_a = '%'
    names = g1_names

    submit_scatter();
})

$(x_lc_energy).on('click', function() {

    $(xaxis).html(" LC");
    sc_a = 'h'
    title_a = 'Lifecycle Energy'
    units_a = 'kWh / year'
    names = h1_names

    submit_scatter();
})

$(x_lc_carbon).on('click', function() {

    $(xaxis).html(" LC " + "<span class='label label-danger'>Carbon</span>");
    sc_a = 'i'
    title_a = 'Lifecycle Carbon'
    units_a = 'kg / year'
    names = i1_names

    submit_scatter();
})

$(y_area).on('click', function() {

    $(yaxis).html(" Area")
    sc_b = 1
    title_b = 'Area'
    units_b = 'sqm'

    submit_scatter();
})

$(y_wwr).on('click', function() {

    $(yaxis).html(" WWR")
    sc_b = 2
    title_b = 'WWR'
    units_b = 'ratio'

    submit_scatter();
})

$(y_oe).on('click', function() {

    $(yaxis).html(" OE")
    sc_b = 3
    title_b = 'Consumption'
    units_b = 'kWh / year'

    submit_scatter();
})

$(y_oe_norm).on('click', function() {

    $(yaxis).html(" OE " + "<span class='label label-danger'>Norm</span>")
    sc_b = 4
    title_b = 'Normalized Consumption'
    units_b = 'kWh / sqm / year'

    submit_scatter();
})

$(y_mo_walk).on('click', function() {

    $(yaxis).html(" MO")
    sc_b = 5
    title_b = 'Walkscore'
    units_b = '%'

    submit_scatter();
})

$(y_mo_bike).on('click', function() {

    $(yaxis).html(" MO " + "<span class='label label-danger'>Bike</span>")
    sc_b = 6
    title_b = 'Bikescore'
    units_b = '%'

    submit_scatter();
})

$(y_da).on('click', function() {

    $(yaxis).html(" DA")
    sc_b = 7
    title_b = 'Autonomy'
    units_b = '%'

    submit_scatter();
})

$(y_lc_energy).on('click', function() {

    $(yaxis).html(" LC")
    sc_b = 8
    title_b = 'Lifecycle Energy'
    units_b = 'kWh / year'

    submit_scatter();
})

$(y_lc_carbon).on('click', function() {

    $(yaxis).html(" LC " + "<span class='label label-danger'>Carbon</span>")
    sc_b = 9
    title_b = 'Lifecycle Carbon'
    units_b = 'kg / year'

    submit_scatter();
})

$(type_buildings).on('click', function() {

    $(type).html(" Bld")
    sc_c = 1

    submit_scatter();
})

$(type_templates).on('click', function() {

    $(type).html(" UType")
    sc_c = 2

    submit_scatter();
})

function Start_Chart3_Buildings(){

    ch_t = 3
    mode = 1
    n = null

    hide('#collapseModes', menu_modes);

    norm_off_fn();
    walkscore_fn();

    show('#collapseZero', menu_0)
    show('#collapseBegin', menu_begin)
    
    document.getElementsByTagName("img")[0].src = "ico/UMI.png";
    about.innerHTML = "Project Information";
    about_content.innerHTML =
        "<li>" + "Number of Buildings: " + buildings.length + "</li>" +
        "<li>" + "Number of Use Types: " + array_temp.length + "</li>" +
        "<li>" + "Area Range: " + project[0].area_min.toLocaleString() + " - " + project[0].area_max.toLocaleString() + " sqm" + "</li>"

    hide('#collapseModes', menu_modes);
    hide('#collapseTwo', menu_2);
    hide('#collapseTwoB', menu_2b);
    hide('#collapseFive', menu_5);
    hide('#collapseSix', menu_6);
    hide('#collapseSeven', menu_7);
    hide('#collapseEight', menu_8);
    hide('#collapseNine', menu_9);

    sc_a = 'a'
    sc_b = 3
    sc_c = 1

    title_a = 'Area'
    units_a = 'sqm'
    names = a1_names

    title_b = 'Consumption'
    units_b = 'kWh / year'

    $(xaxis).html(' Area')
    $(yaxis).html(' OE')
    $(type).html(' Bld')

    row1.style.backgroundColor = "";

    submit_scatter();
}

function Start_Chart3_Templates(){

    ch_t = 3
    mode = 1
    n = null

    norm_off_fn();
    walkscore_fn();

    show('#collapseBegin', menu_begin);
    show('#collapseZero', menu_0);
    hide('#collapseModes', menu_modes);
    hide('#collapseTwo', menu_2);
    hide('#collapseTwoB', menu_2b);
    hide('#collapseFive', menu_5);
    hide('#collapseSix', menu_6);
    hide('#collapseSeven', menu_7);
    hide('#collapseEight', menu_8);
    hide('#collapseNine', menu_9);
    
    document.getElementsByTagName("img")[0].src = "ico/UMI.png";
    about.innerHTML = "Project Information";
    about_content.innerHTML =
        "<li>" + "Number of Buildings: " + buildings.length + "</li>" +
        "<li>" + "Number of Use Types: " + array_temp.length + "</li>" +
        "<li>" + "Area Range: " + project[0].area_min.toLocaleString() + " - " + project[0].area_max.toLocaleString() + " sqm" + "</li>"

    sc_a = 'a'
    sc_b = 3
    sc_c = 2

    title_a = 'Area'
    units_a = 'sqm'
    names = a1_names

    title_b = 'Consumption'
    units_b = 'kWh / year'

    $(xaxis).html(' Area')
    $(yaxis).html(' OE')
    $(type).html(' Tmp')

    row1.style.backgroundColor = "";

    submit_scatter();
}

//go to scatter plot
$(scatter_bt).on("click", function() {
    Start_Chart3_Buildings();
})

//go to building map
$(bld_map_bt).on("click", function() {
    Start_Chart4();
})

function scatter_titles() {
    $(bread).find("li").slice(0).remove();
    if (sc_c == 1) {
        bldname.innerHTML = "Buildings" + "<font color='#d3d3d3'>" + " | " + title_a + " vs. " + title_b + "</style>";
        $(bread).append("<li>" + "<a onclick='Start_Chart3_Buildings()' href='#'>All Building Points</a>" + "</li>");
    } else if (sc_c == 2) {
        bldname.innerHTML = "Use Types" + "<font color='#d3d3d3'>" + " | " + title_a + " vs. " + title_b + "</style>";
        $(bread).append("<li>" + "<a onclick='Start_Chart3_Templates()' href='#'>All Use Type Points</a>" + "</li>");
    }
    $(bread).append("<li class='active'>" + title_a + " vs. " + title_b + "</li>");
}


//submit scatter function
function submit_scatter() {

    scatter_titles();


    if (sc_a != 0 && sc_b != 0 && sc_c == 1) {

        hide('#collapseTwo', menu_2);
        hide('#collapseTen', menu_10);

        var sc = window[sc_a + sc_b]

        $('#container').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                selectionMarkerFill: 'rgba(220, 220, 220, 0.4)',
                resetZoomButton: {
                    theme: {
                        fill: 'white',
                        stroke: 'rgba(220, 220, 220, 1.0)',
                        r: 0,
                        states: {
                            hover: {
                                fill: 'rgba(220, 220, 220, 0.2)',
                                stroke: 'rgba(220, 220, 220, 1.0)'
                            }
                        }
                    }
                }
            },
            title: {
                text: title_a + ' vs. ' + title_b
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: title_a + " (" + units_a + ")"
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
                lineColor: "#DCDCDC",
                tickColor: "#DCDCDC"
            },
            yAxis: {
                min: 0,
                title: {
                    text: title_b + " (" + units_b + ")"
                },
                gridLineColor: '#DCDCDC'
            },
            legend: {
                layout: 'vertical',
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
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                                for (i = 0; i < buildings.length; i++) {

                                    if (names == a1_names) {

                                        if (buildings[i].bname == a1_names[this.series.data.indexOf(this)]) {
                                            n = i
                                            bldinfo(n)
                                        }
                                    } else if (names == b1_names) {

                                        if (buildings[i].bname == b1_names[this.series.data.indexOf(this)]) {
                                            n = i
                                            bldinfo(n)
                                        }
                                    } else if (names == c1_names) {

                                        if (buildings[i].bname == c1_names[this.series.data.indexOf(this)]) {
                                            n = i
                                            bldinfo(n)
                                        }
                                    } else if (names == d1_names) {

                                        if (buildings[i].bname == d1_names[this.series.data.indexOf(this)]) {
                                            n = i
                                            bldinfo(n)
                                        }
                                    } else if (names == e1_names) {

                                        if (buildings[i].bname == e1_names[this.series.data.indexOf(this)]) {
                                            n = i
                                            bldinfo(n)
                                        }
                                    } else if (names == f1_names) {

                                        if (buildings[i].bname == f1_names[this.series.data.indexOf(this)]) {
                                            n = i
                                            bldinfo(n)
                                        }
                                    } else if (names == g1_names) {

                                        if (buildings[i].bname == g1_names[this.series.data.indexOf(this)]) {
                                            n = i
                                            bldinfo(n)
                                        }
                                    } else if (names == h1_names) {

                                        if (buildings[i].bname == h1_names[this.series.data.indexOf(this)]) {
                                            n = i
                                            bldinfo(n)
                                        }
                                    } else if (names == i1_names) {

                                        if (buildings[i].bname == i1_names[this.series.data.indexOf(this)]) {
                                            n = i
                                            bldinfo(n)
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'white'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    if (names == a1_names) {
                        return "<b>" + a1_names[this.series.data.indexOf(this.point)] + "</b><br/>" + this.point.x.toLocaleString() + " " + units_a + " | " + this.point.y.toLocaleString() + " " + units_b
                    } else if (names == b1_names) {
                        return "<b>" + b1_names[this.series.data.indexOf(this.point)] + "</b><br/>" + this.point.x.toLocaleString() + " " + units_a + " | " + this.point.y.toLocaleString() + " " + units_b
                    } else if (names == c1_names) {
                        return "<b>" + c1_names[this.series.data.indexOf(this.point)] + "</b><br/>" + this.point.x.toLocaleString() + " " + units_a + " | " + this.point.y.toLocaleString() + " " + units_b
                    } else if (names == d1_names) {
                        return "<b>" + d1_names[this.series.data.indexOf(this.point)] + "</b><br/>" + this.point.x.toLocaleString() + " " + units_a + " | " + this.point.y.toLocaleString() + " " + units_b
                    } else if (names == e1_names) {
                        return "<b>" + e1_names[this.series.data.indexOf(this.point)] + "</b><br/>" + this.point.x.toLocaleString() + " " + units_a + " | " + this.point.y.toLocaleString() + " " + units_b
                    } else if (names == f1_names) {
                        return "<b>" + f1_names[this.series.data.indexOf(this.point)] + "</b><br/>" + this.point.x.toLocaleString() + " " + units_a + " | " + this.point.y.toLocaleString() + " " + units_b
                    } else if (names == g1_names) {
                        return "<b>" + g1_names[this.series.data.indexOf(this.point)] + "</b><br/>" + this.point.x.toLocaleString() + " " + units_a + " | " + this.point.y.toLocaleString() + " " + units_b
                    } else if (names == h1_names) {
                        return "<b>" + h1_names[this.series.data.indexOf(this.point)] + "</b><br/>" + this.point.x.toLocaleString() + " " + units_a + " | " + this.point.y.toLocaleString() + " " + units_b
                    } else if (names == i1_names) {
                        return "<b>" + i1_names[this.series.data.indexOf(this.point)] + "</b><br/>" + this.point.x.toLocaleString() + " " + units_a + " | " + this.point.y.toLocaleString() + " " + units_b
                    }
                }
            },
            series: [{
                name: 'Buildings',
                color: '#00A99D',
                data: sc
            }]
        });

    } else if (sc_a != 0 && sc_b != 0 && sc_c == 2) {


        hide('#collapseTwo', menu_2);
        hide('#collapseTen', menu_10);


        var sc = window[sc_a + sc_b]

        $('#container').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                selectionMarkerFill: 'rgba(220, 220, 220, 0.4)',
                resetZoomButton: {
                    theme: {
                        fill: 'white',
                        stroke: 'rgba(220, 220, 220, 1.0)',
                        r: 0,
                        states: {
                            hover: {
                                fill: 'rgba(220, 220, 220, 0.2)',
                                stroke: 'rgba(220, 220, 220, 1.0)'
                            }
                        }
                    }
                }
            },
            title: {
                text: title_a + ' vs. ' + title_b
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: title_a + " (" + units_a + ")"
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
                lineColor: "#DCDCDC",
                tickColor: "#DCDCDC"
            },
            yAxis: {
                min: 0,
                title: {
                    text: title_b + " (" + units_b + ")"
                },
                gridLineColor: '#DCDCDC'
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
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                                for (i = 0; i < buildings.length; i++) {

                                    if (buildings[i].bname == series[this.series.index].bname[this.series.data.indexOf(this)]) {
                                        n = i
                                        bldinfo(n)

                                    }
                                }
                            }
                        }
                    }
                },
                scatter: {
                    marker: {
                        radius: 7,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'white'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return "<b>" + series[this.series.index].bname[this.series.data.indexOf(this.point)] + "</b><br/>" + this.point.x + " " + units_a + " | " + this.point.y + " " + units_b
                }
            },
            series: []
        });

        var chart = $('#container').highcharts()

        templates = []
        series = []
        colors = ['rgba(237,30,121,1.0)', 'rgba(0,169,157,1.0)', 'rgba(16,125,255,1.0)', 'rgba(255,190,32,1.0)', 'rgba(140,140,140,1.0)', 'rgba(237,30,121,0.6)', 'rgba(0,169,157,0.6)', 'rgba(16,125,255,0.6)', 'rgba(255,190,32,0.6)', 'rgba(140,140,140,0.6)', 'rgba(237,30,121,0.3)', 'rgba(0,169,157,0.3)', 'rgba(16,125,255,0.3)', 'rgba(255,190,32,0.3)', 'rgba(140,140,140,0.3)']

        for (i = 0; i < names.length; i++) {

            for (j = 0; j < buildings.length; j++) {

                if (names[i] == buildings[j].bname) {

                    templates.push(buildings[j].temp)

                }
            }
        }

        function tempobject() {

            this.name;
            this.data;
            this.color;
            this.bname;

        }

        for (i = 0; i < array_temp.length; i++) {

            var tobj = new tempobject();

            tobj.name = array_temp[i];
            tobj.data = [];
            tobj.color = colors[i];
            tobj.bname = [];

            series.push(tobj)

        }

        for (j = 0; j < series.length; j++) {

            for (i = 0; i < templates.length; i++) {

                if (templates[i] == series[j].name) {

                    series[j].data.push(sc[i])
                    series[j].bname.push(names[i])
                }

            }
        }

        for (i = 0; i < series.length; i++) {

            chart.addSeries({
                name: series[i].name,
                color: series[i].color,
                data: series[i].data
            })

        }

        chart.redraw();

    }
};

function Sum_Templates(_array01,_array02){

    for (i = 0; i < _array01.length; i++) {

        var array_temp_sliced = _array01[i].slice(1);
        var array_sum = [];

        for (j=0; j<array_temp_sliced.length;j++){
            var array_temp_sum = array_temp_sliced[j].reduce(function(a, b) {
                return a + b
            })
            array_sum.push(array_temp_sum);
        }
        var final_sum = array_sum.reduce(function(a, b) {
                return a + b
        })
        _array02.push(final_sum);
     }

     return _array02;

}


function Avg_Templates(_array01,_array02){

    for (i = 0; i < _array01.length; i++) {

        var array_temp_sliced = _array01[i].slice(1);
        var array_sum = [];

        for (j=0; j<array_temp_sliced.length;j++){
            var array_temp_sum = array_temp_sliced[j].reduce(function(a, b) {
                return a + b
            })
            array_sum.push(array_temp_sum);
        }
        var final_avg = Math.round(array_sum.reduce(function(a, b) {return a + b}) / _array01[i].length);
        _array02.push(final_avg);
     }
     return _array02;
}

//submit group function
function gr_on(x) {

    gr = x;

    var chart = $('#container').highcharts()

    //create the series

    function drillid() {
        this.temp;
        this.name;
        this.oe;
        this.oe_co;
        this.oe_he;
        this.oe_el;
        this.oe_eq;
        this.oe_norm;
        this.oe_co_norm;
        this.oe_he_norm;
        this.oe_el_norm;
        this.oe_eq_norm;
    }

    drill_id = [];

    for (i = 0; i < buildings.length; i++) {

        var drid = new drillid()

        drid.temp = buildings[i].temp;

        drid.name = buildings[i].bname;
        drid.oe = buildings[i].oe;
        drid.oe_co = buildings[i].oe_co;
        drid.oe_he = buildings[i].oe_he;
        drid.oe_el = buildings[i].oe_el;
        drid.oe_eq = buildings[i].oe_eq;
        drid.oe_norm = buildings[i].oe_norm;
        drid.oe_co_norm = buildings[i].oe_co_norm;
        drid.oe_he_norm = buildings[i].oe_he_norm;
        drid.oe_el_norm = buildings[i].oe_el_norm;
        drid.oe_eq_norm = buildings[i].oe_eq_norm;

        drill_id.push(drid);
    }

    function drillcat_co() {
        this.id;
        this.name;
        this.data =[];
    }
    function drillcat_he() {
        this.id;
        this.name;
        this.data =[];
    }
    function drillcat_el() {
        this.id;
        this.name;
        this.data =[];
    }
    function drillcat_eq() {
        this.id;
        this.name;
        this.data =[];
    }

    drill_cat_co = [];
    drill_cat_he = [];
    drill_cat_el = [];
    drill_cat_eq = [];

    function series_co_obj() {
        this.name;
        this.y;
        this.drilldown;
    }

    function series_he_obj() {
        this.name;
        this.y;
        this.drilldown;
    }

    function series_el_obj() {
        this.name;
        this.y;
        this.drilldown;
    }

    function series_eq_obj() {
        this.name;
        this.y;
        this.drilldown;
    }


    series_co_object = [];
    series_he_object = [];
    series_el_object = [];
    series_eq_object = [];

    temp_sum_co = [];
    temp_sum_he = [];
    temp_sum_el = [];
    temp_sum_eq = [];

    series_co_array = [];
    series_he_array = [];
    series_el_array = [];
    series_eq_array = [];

    drilldown_array = [];

    if (gr == 1) {

        temp_title = 'Average Annual Consumption'
        temp_units = 'Energy Consumption in kWh / year'
        temp_units_short = 'kWh / year';

        for (i = 0; i < array_temp.length; i++) {
            var drcat = new drillcat_co()
            drcat.id = array_temp[i]+'_co';
            drcat.name = 'Cooling';
            for (j = 0; j < drill_id.length; j++) {
                if (drill_id[j].temp == array_temp[i]) {
                    drcat.data.push([drill_id[j].name, drill_id[j].oe_co.reduce(function(a, b){return a + b})]);
                }
            }
            drill_cat_co.push(drcat);
        }

        for (i = 0; i < array_temp.length; i++) {
            var drcat = new drillcat_he()
            drcat.id = array_temp[i]+'_he';
            drcat.name = 'Heating';
            for (j = 0; j < drill_id.length; j++) {
                if (drill_id[j].temp == array_temp[i]) {
                    drcat.data.push([drill_id[j].name, drill_id[j].oe_he.reduce(function(a, b){return a + b})]);
                }
            }
            drill_cat_he.push(drcat);
        }

        for (i = 0; i < array_temp.length; i++) {
            var drcat = new drillcat_el()
            drcat.id = array_temp[i]+'_el';
            drcat.name = 'Lighting';
            for (j = 0; j < drill_id.length; j++) {
                if (drill_id[j].temp == array_temp[i]) {
                    drcat.data.push([drill_id[j].name, drill_id[j].oe_el.reduce(function(a, b){return a + b})]);
                }
            }
            drill_cat_el.push(drcat);
        }

        for (i = 0; i < array_temp.length; i++) {
            var drcat = new drillcat_eq()
            drcat.id = array_temp[i]+'_eq';
            drcat.name = 'Equipment';
            for (j = 0; j < drill_id.length; j++) {
                if (drill_id[j].temp == array_temp[i]) {
                    drcat.data.push([drill_id[j].name, drill_id[j].oe_eq.reduce(function(a, b){return a + b})]);
                }
            }
            drill_cat_eq.push(drcat);
        }

        
        Sum_Templates(array_temp_oe_co, temp_sum_co);
        Sum_Templates(array_temp_oe_he, temp_sum_he);
        Sum_Templates(array_temp_oe_el, temp_sum_el);
        Sum_Templates(array_temp_oe_eq, temp_sum_eq);


        for (i = 0; i < array_temp_oe_co.length; i++) {
            var sobj = new series_co_obj();
            sobj.name = array_temp[i];
            sobj.y = temp_sum_co[i];
            sobj.drilldown = array_temp[i]+'_co';
            series_co_object.push(sobj)
        }

        for (i = 0; i < array_temp_oe_he.length; i++) {
            var sobj = new series_he_obj();
            sobj.name = array_temp[i];
            sobj.y = temp_sum_he[i];
            sobj.drilldown = array_temp[i]+'_he';
            series_he_object.push(sobj)
        }

        for (i = 0; i < array_temp_oe_el.length; i++) {
            var sobj = new series_el_obj();
            sobj.name = array_temp[i];
            sobj.y = temp_sum_el[i];
            sobj.drilldown = array_temp[i]+'_el';
            series_el_object.push(sobj)
        }

        for (i = 0; i < array_temp_oe_eq.length; i++) {
            var sobj = new series_eq_obj();
            sobj.name = array_temp[i];
            sobj.y = temp_sum_eq[i];
            sobj.drilldown = array_temp[i]+'_eq';
            series_eq_object.push(sobj)
        }

        for (i = 0; i < series_co_object.length; i++) {
            series_co_array.push(series_co_object[i])
        };

        for (i = 0; i < series_he_object.length; i++) {
            series_he_array.push(series_he_object[i])
        };

        for (i = 0; i < series_el_object.length; i++) {
            series_el_array.push(series_el_object[i])
        };

        for (i = 0; i < series_eq_object.length; i++) {
            series_eq_array.push(series_eq_object[i])
        };

        for (i = 0; i < array_temp.length; i++) {
            drilldown_array.push(drill_cat_co[i]);
            drilldown_array.push(drill_cat_he[i]);
            drilldown_array.push(drill_cat_el[i]);
            drilldown_array.push(drill_cat_eq[i]);
        };

        temp_columns();

    } else if (gr == 2) {

        temp_title = 'Average Normalized Annual Consumption'
        temp_units = 'Energy Consumption in kWh / sqm / year'
        temp_units_short = 'kWh / sqm / year';

        for (i = 0; i < array_temp.length; i++) {
            var drcat = new drillcat_co()
            drcat.id = array_temp[i]+'_co_norm';
            drcat.name = 'Cooling';
            for (j = 0; j < drill_id.length; j++) {
                if (drill_id[j].temp == array_temp[i]) {
                    drcat.data.push([drill_id[j].name, drill_id[j].oe_co_norm.reduce(function(a, b){return a + b})]);
                }
            }
            drill_cat_co.push(drcat);
        }
        

        for (i = 0; i < array_temp.length; i++) {
            var drcat = new drillcat_he()
            drcat.id = array_temp[i]+'_he_norm';
            drcat.name = 'Heating';
            for (j = 0; j < drill_id.length; j++) {
                if (drill_id[j].temp == array_temp[i]) {
                    drcat.data.push([drill_id[j].name, drill_id[j].oe_he_norm.reduce(function(a, b){return a + b})]);
                }
            }
            drill_cat_he.push(drcat);
        }

        for (i = 0; i < array_temp.length; i++) {
            var drcat = new drillcat_el()
            drcat.id = array_temp[i]+'_el_norm';
            drcat.name = 'Lighting';
            for (j = 0; j < drill_id.length; j++) {
                if (drill_id[j].temp == array_temp[i]) {
                    drcat.data.push([drill_id[j].name, drill_id[j].oe_el_norm.reduce(function(a, b){return a + b})]);
                }
            }
            drill_cat_el.push(drcat);
        }

        for (i = 0; i < array_temp.length; i++) {
            var drcat = new drillcat_eq()
            drcat.id = array_temp[i]+'_eq_norm';
            drcat.name = 'Equipment';
            for (j = 0; j < drill_id.length; j++) {
                if (drill_id[j].temp == array_temp[i]) {
                    drcat.data.push([drill_id[j].name, drill_id[j].oe_eq_norm.reduce(function(a, b){return a + b})]);
                }
            }
            drill_cat_eq.push(drcat);
        }

        Avg_Templates(array_temp_oe_co_norm, temp_sum_co);
        Avg_Templates(array_temp_oe_he_norm, temp_sum_he);
        Avg_Templates(array_temp_oe_el_norm, temp_sum_el);
        Avg_Templates(array_temp_oe_eq_norm, temp_sum_eq);

    
        for (i = 0; i < array_temp_oe_co.length; i++) {
            var sobj = new series_co_obj();
            sobj.name = array_temp[i];
            sobj.y = temp_sum_co[i];
            sobj.drilldown = array_temp[i]+'_co_norm';
            series_co_object.push(sobj)
        }

        for (i = 0; i < array_temp_oe_he.length; i++) {
            var sobj = new series_he_obj();
            sobj.name = array_temp[i];
            sobj.y = temp_sum_he[i];
            sobj.drilldown = array_temp[i]+'_he_norm';
            series_he_object.push(sobj)
        }

        for (i = 0; i < array_temp_oe_el.length; i++) {
            var sobj = new series_el_obj();
            sobj.name = array_temp[i];
            sobj.y = temp_sum_el[i];
            sobj.drilldown = array_temp[i]+'_el_norm';
            series_el_object.push(sobj)
        }

        for (i = 0; i < array_temp_oe_eq.length; i++) {
            var sobj = new series_eq_obj();
            sobj.name = array_temp[i];
            sobj.y = temp_sum_eq[i];
            sobj.drilldown = array_temp[i]+'_eq_norm';
            series_eq_object.push(sobj)
        }

        for (i = 0; i < series_co_object.length; i++) {
            series_co_array.push(series_co_object[i])
        };

        for (i = 0; i < series_he_object.length; i++) {
            series_he_array.push(series_he_object[i])
        };

        for (i = 0; i < series_el_object.length; i++) {
            series_el_array.push(series_el_object[i])
        };

        for (i = 0; i < series_eq_object.length; i++) {
            series_eq_array.push(series_eq_object[i])
        };

        for (i = 0; i < array_temp.length; i++) {
            drilldown_array.push(drill_cat_co[i]);
            drilldown_array.push(drill_cat_he[i]);
            drilldown_array.push(drill_cat_el[i]);
            drilldown_array.push(drill_cat_eq[i]);
        };

        temp_columns();

    }

    
}

//group chart controls
$(y_oe2).on('click', function() {

    $(yaxis2).html(" OE")
    gr_on(1)
    norm_off_fn();
})

$(y_oe_norm2).on('click', function() {

    $(yaxis2).html(" OE " + "<span class='label label-danger'>Norm</span>")
    gr_on(2)
    norm_area_fn();
})

function walkscore_bd_fn() {

    $(mo_title).html('Mobility');
    $(mo).html(buildings[n].mo_walk.toLocaleString());
    $(mo_range).html(project[0].min_mo_wk.toLocaleString() + ' - ' + project[0].max_mo_wk.toLocaleString());
    $(mo_unit).html('Walkscore (%)');
}

function bikescore_bd_fn() {

    $(mo_title).html('Mobility  ' + "<span class='label label-default'>Bike</span>");
    $(mo).html(buildings[n].mo_bike.toLocaleString());
    $(mo_range).html(project[0].min_mo_bk.toLocaleString() + ' - ' + project[0].max_mo_bk.toLocaleString());
    $(mo_unit).html('Bikescore (%)');
}

function walkscore_fn() {

    $(mo_title).html('Mobility');
    $(mo).html(project[0].avg_mo_wk.toLocaleString());
    $(mo_range).html(project[0].min_mo_wk.toLocaleString() + ' - ' + project[0].max_mo_wk.toLocaleString());
    $(mo_unit).html('Walkscore (%)');
}

function bikescore_fn() {

    $(mo_title).html('Mobility  ' + "<span class='label label-default'>Bike</span>");
    $(mo).html(project[0].avg_mo_bk.toLocaleString());
    $(mo_range).html(project[0].min_mo_bk.toLocaleString() + ' - ' + project[0].max_mo_bk.toLocaleString());
    $(mo_unit).html('Bikescore (%)');
}

function temp_columns() {

    $('#container').highcharts({
        chart: {
            type: 'column',
        },

        title: {
            text: temp_title
        },

        subtitle: {
            text: 'Click the columns to view buildings'
        },

        xAxis: {
            type: 'category',
            lineColor: "#DCDCDC",
            tickColor: "#DCDCDC"
        },
        yAxis: {
            gridLineColor: '#DCDCDC',
            min: 0,
            title: {
                text: temp_units
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

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        
        tooltip: {
            formatter: function() {
                return '<b>' + this.point.name + '</b><br/>' +
                    this.series.name + ': ' + this.y.toLocaleString() + '<br/>' +
                    'Total: ' + this.point.stackTotal.toLocaleString();
            }
        },

        series: [
            {
                name: 'Cooling',
                color: '#107dff',
                data: series_co_array
            },
            {
                name: 'Heating',
                color: '#ed1e79',
                data: series_he_array
            },
            {
                name: 'Lighting',
                color: '#ffbe20',
                data: series_el_array
            },
            {
                name: 'Equipment',
                color: '#00a99d',
                data: series_eq_array
            }
        ],

        drilldown: {
            drillUpButton: {
                theme: {
                    fill: 'white',
                    stroke: 'rgba(220, 220, 220, 1.0)',
                    r: 0,
                    states: {
                        hover: {
                            fill: 'rgba(220, 220, 220, 0.2)',
                            stroke: 'rgba(220, 220, 220, 1.0)'
                        }
                    }
                }
            },
            series: drilldown_array
        }


    })
}

//go to building column chart
$(bld_col_bt).on("click", function() {
    console.log(default_index);
    $(bread).find("li").slice(0).remove();
    $(bread).append("<li>" + "<a onclick='Start_Chart1(0)' href='#'>All Building Columns</a>" + "</li>");
    $(bread).append("<li class='active'>" + "Energy" + "</li>");

    //replace title
    document.getElementsByTagName("h3")[0].innerHTML = "Buildings" + "<font color='#d3d3d3'>" + " | Energy" + "</style>";

    row1.style.backgroundColor = "#f5f5f5";

    ch_t = 1

    if (mode == 1) {

        norm_off_fn();
        walkscore_fn();

        $(sort).html('')
        $(yaxis0).html(' OE')

        show('#collapseTwo', menu_2);
        show('#collapseModes', menu_modes);

        hide('#collapseZero', menu_0);
        hide('#collapseSeven', menu_7);
        hide('#collapseTwoB', menu_2b)

        var s = 2;
        var no = 0;
        var sa = 0;
        var ti_1 = "Annual Consumption";
        var ti_2 = "Normalized Annual Consumption";
        var un_1 = "Energy Consumption in kWh / year";
        var un_2 = "Energy Consumption in kWh / sqm / year";

        call_oeall2(s, no, sa, ti_1, un_1, 0);

    } else if (mode == 2) {
        
        hide('#collapseTwo', menu_2);
        show('#collapseTwoB', menu_2b);
        call_oeall_comp(2)

    }
})

function Start_Chart2(){
    $(bread).find("li").slice(0).remove();
    $(bread).append("<li>" + "<a onclick='Start_Chart2()' href='#'>All Use Type Columns</a>" + "</li>");
    $(bread).append("<li class='active'>" + "Energy" + "</li>");

    //replace title
    document.getElementsByTagName("h3")[0].innerHTML = "Use Types" + "<font color='#d3d3d3'>" + " | Energy" + "</style>";

    row1.style.backgroundColor = "#f5f5f5";

    if (mode == 1) {

        ch_t = 2

        var temp_title = null;
        var temp_units = null;
        var temp_units_short = null;

        norm_off_fn();
        walkscore_fn();

        show('#collapseSeven', menu_7);
        show('#collapseModes', menu_modes);

        hide('#collapseZero', menu_0);
        hide('#collapseTwo', menu_2);
        hide('#collapseTwoB', menu_2b)

        $(yaxis2).html(" OE")

        gr_on(1)

    } else if (mode == 2) {

        hide('#collapseTwoB', menu_2b);

        if (levels_filtered.length === array_temp.length) {

            gr_on_comp();
        }

    }
}

//go to grouped column chart
$(temp_col_bt).on("click", function() {
    Start_Chart2();
})



//view mode
$(mode_view).on("click", function() {

    mode = 1;

    if (ch_t == 1) {

        norm_off_fn();
        walkscore_fn();

        $(sort).html('')
        $(yaxis0).html(' OE')

        show('#collapseTwo', menu_2);

        hide('#collapseZero', menu_0);
        hide('#collapseSeven', menu_7);
        hide('#collapseTwoB', menu_2b)

        var s = 2;
        var no = 0;
        var sa = 0;
        var ti_1 = "Annual Consumption";
        var ti_2 = "Normalized Annual Consumption";
        var un_1 = "Energy Consumption in kWh / year";
        var un_2 = "Energy Consumption in kWh / sqm / year";

        call_oeall(s, no, sa, ti_1, un_1);

    } else if (ch_t == 2) {

        temp_title = null;
        temp_units = null;
        temp_units_short = null;

        show('#collapseModes', menu_modes);

        norm_off_fn();
        walkscore_fn();

        show('#collapseSeven', menu_7);

        hide('#collapseZero', menu_0);
        hide('#collapseTwo', menu_2);

        $(yaxis2).html(" OE")

        gr_on(1)

    } else if (ch_t == 3) {

        norm_off_fn();
        walkscore_fn();

        show('#collapseZero', menu_0)

        hide('#collapseTwo', menu_2);
        hide('#collapseSeven', menu_7);

        sc_a = 'a'
        sc_b = 3
        sc_c = 1

        title_a = 'Area'
        units_a = 'sqm'
        names = a1_names

        title_b = 'Consumption'
        units_b = 'kWh / year'

        $(xaxis).html(' Area')
        $(yaxis).html(' OE')
        $(type).html(' Bld')

        submit_scatter();
    }
})

//compliance mode
$(mode_comp).on("click", function() {


    mode = 2

    //create form

    if (form.children.length == 0) {

        for (i = 0; i < array_temp.length; i++) {

            $(form).append(
                "<div class='form-group'>" +
                "<label for='" + array_temp[i] + "'>" + array_temp[i] + "</label>" +
                "<div class='input-group'>" +
                "<input type='compliance' class='form-control' id='" + array_temp[i] + "'" + "placeholder='Compliance Level'>" +
                "<div class='input-group-addon'>kWh / sqm / year</div>" +
                "</div>" +
                "</div>"
            )

            comp_level[i] = document.getElementById(array_temp[i]);
        }
    }
})

//compliance variables

var levels = []
var array_temp_c_down = [];
var array_temp_c_up = [];
var c_down_number = [];
var c_down_percent = [];
var c_up_number = [];
var c_up_percent = [];
var c_names = []
var levels = []
var levels_filtered = []


function tempobj() {
    this.name;
    this.level;
    this.up;
    this.down;
    this.oe;
    this.oe_norm;
    this.oe_co;
    this.oe_he;
    this.oe_el;
    this.oe_eq;
}

function create_to() {

    levels = [];
    levels_filtered = [];

    array_temp_c_down = [];
    array_temp_c_up = [];

    c_down_number = [];
    c_down_percent = [];
    c_up_number = [];
    c_up_percent = [];
    c_names = []

    t_comp = [];

    for (i = 0; i < array_temp.length; i++) {

        var to = new tempobj

        to.name = array_temp[i];
        to.level = 0;
        to.up = [];
        to.down = [];
        to.oe = array_temp_oe[i].slice(1);
        to.oe_norm = array_temp_oe_norm[i].slice(1);

        t_comp.push(to);

    }
}

//submit compliance levels
$(submit_comp).on("click", function() {

    if (ch_t == 1) {

        hide('#collapseTwo', menu_2)
        show('#collapseTwoB', menu_2b)

        create_to();

        for (i = 0; i < array_temp.length; i++) {

            $(comp_level[i]).parent().removeClass('form-group has-success');
            $(comp_level[i]).parent().removeClass('form-group has-error');
            $(comp_level[i]).parent().addClass('form-group');

            if (comp_level[i].value > 0) {

                $(comp_level[i]).parent().removeClass('form-group');
                $(comp_level[i]).parent().addClass('form-group has-success');

                t_comp[i].level = parseFloat(comp_level[i].value);
            } else {

                $(comp_level[i]).parent().removeClass('form-group');
                $(comp_level[i]).parent().addClass('form-group has-error');

            }

            levels.push(t_comp[i].level)
        }

        function filter(element) {
            return element != 0
        }

        levels_filtered = levels.filter(filter);

        if (levels_filtered.length === array_temp.length) {

            call_oeall_comp(2)

        }

    }

    if (ch_t == 2) {

        hide('#collapseSeven', menu_7)

        create_to();

        for (i = 0; i < array_temp.length; i++) {

            $(comp_level[i]).parent().removeClass('form-group has-success');
            $(comp_level[i]).parent().removeClass('form-group has-error');
            $(comp_level[i]).parent().addClass('form-group');

            if (comp_level[i].value > 0) {

                $(comp_level[i]).parent().removeClass('form-group');
                $(comp_level[i]).parent().addClass('form-group has-success');

                t_comp[i].level = parseFloat(comp_level[i].value);
            } else {

                $(comp_level[i]).parent().removeClass('form-group');
                $(comp_level[i]).parent().addClass('form-group has-error');

            }

            levels.push(t_comp[i].level)
        }

        function filter(element) {
            return element != 0
        }

        levels_filtered = levels.filter(filter);

        if (levels_filtered.length === array_temp.length) {

            gr_on_comp();
        }
    }
})


//building columns compliance
function call_oeall_comp(_sort) {

    function bldOeObj_2(_bn, _tmp, _noe) {
        this.bname = _bn;
        this.btemp = _tmp;
        this.norm_oe = _noe;
        this.level = 0;
        this.col = 0;
    }

    var bobs_2 = [];

    var noe_array_2 = [];

    for (i = 0; i < buildings.length; i++) {

        var noe = buildings[i].oe_norm

        noe_array_2.push(noe);

        var b_2 = new bldOeObj_2(buildings[i].bname, buildings[i].temp, noe_array_2[i]);

        bobs_2.push(b_2);
    }

    //sort
    if (_sort == 1) {
        bobs_2.sort(function(a, b) {
            return b.norm_oe - a.norm_oe
        })
    } else if (_sort == 2) {
        bobs_2.sort(function(a, b) {
            return a.norm_oe - b.norm_oe
        })
    };

    var bname_arr_2 = [];
    var btemp_arr_2 = [];
    var level_arr_2 = [];
    var oe_norm_arr_2 = [];
    var color_arr_2 = [];

    for (i = 0; i < buildings.length; i++) {

        btemp_arr_2.push(bobs_2[i].btemp)
        bname_arr_2.push(bobs_2[i].bname)
        oe_norm_arr_2.push(bobs_2[i].norm_oe)
    };

    for (i = 0; i < btemp_arr_2.length; i++) {

        for (j = 0; j < array_temp.length; j++) {

            if (btemp_arr_2[i] == array_temp[j]) {
                bobs_2[i].level = levels_filtered[j]
            }
        }
    }

    for (i = 0; i < buildings.length; i++) {

        level_arr_2.push(bobs_2[i].level)
    };

    for (i = 0; i < level_arr_2.length; i++) {

        if (level_arr_2[i] > oe_norm_arr_2[i]) {
            bobs_2[i].col = 'rgba(0,169,157,0.6)'
        } else {
            bobs_2[i].col = 'rgba(237,30,121,0.6)'
        }
    };

    for (i = 0; i < buildings.length; i++) {

        color_arr_2.push(bobs_2[i].col)
    };


    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Normalized Annual Consumption'
        },
        xAxis: {
            categories: bname_arr_2,
            lineColor: "#DCDCDC",
            tickColor: "#DCDCDC"
        },
        yAxis: {
            gridLineColor: '#DCDCDC',
            min: 0,
            title: {
                text: 'Energy Consumption in kWh / sqm / year'
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
                if (this.series.name == 'Normalized Consumption') {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + ' kWh / sqm / year' + '<br/>'
                } else if (this.series.name == 'Compliance Level') {
                    return '<b>' + btemp_arr_2[this.series.data.indexOf(this.point)] + '</b><br/>' +
                        this.series.name + ': ' + this.y + ' kWh / sqm / year' + '<br/>'
                }
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                colors: color_arr_2,
                colorByPoint: true
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
        series: [{
            name: 'Normalized Consumption',
            data: oe_norm_arr_2,
            color: '#00a99d'
        }, {
            name: 'Compliance Level',
            type: 'line',
            dashStyle: 'dash',
            data: level_arr_2,
            color: '#ed1e79'
        }]
    })
};

//submit group function
function gr_on_comp() {

    //create the series

    function drillid() {
        this.temp
        this.name
        this.oe_norm
        this.level
        this.col
    }

    drill_id = [];



    for (i = 0; i < buildings.length; i++) {

        var drid = new drillid()

        drid.temp = buildings[i].temp;
        drid.name = buildings[i].bname;
        drid.oe_norm = buildings[i].oe_norm;

        drid.level = 0;
        drid.col = 0;

        drill_id.push(drid);
    }


    for (i = 0; i < drill_id.length; i++) {

        for (j = 0; j < array_temp.length; j++) {
            if (drill_id[i].temp == array_temp[j]) {
                drill_id[i].level = levels_filtered[j]
            }
        }
    }


    for (i = 0; i < drill_id.length; i++) {

        if (drill_id[i].oe_norm > drill_id[i].level) {
            drill_id[i].col = 'rgba(237,30,121,0.6)'
        } else {
            drill_id[i].col = 'rgba(0,169,157,0.6)'
        }
    }


    function drillcat() {
        this.id;
        this.data = []
        this.colorByPoint = true;
    }

    drill_cat = [];

    temp_title = 'Average Normalized Annual Consumption'
    temp_units = 'Energy Consumption in kWh / sqm / year'
    temp_units_short = 'kWh / sqm / year'

    function drillcatdata() {
        this.name;
        this.color;
        this.y;
    }

    function drillcatline() {
        this.name;
        this.color;
        this.data = [];
        this.type;
        this.id;
    }

    function levelsobject() {
        this.name;
        this.y;
    }

    level_objects = [];

    for (i = 0; i < levels_filtered.length; i++) {
        var levob = new levelsobject
        levob.name = array_temp[i];
        levob.y = levels_filtered[i];

        level_objects.push(levob)
    }

    drill_cat_data = [];

    for (i = 0; i < drill_id.length; i++) {

        var drcatdata = new drillcatdata()

        drcatdata.name = drill_id[i].name;
        drcatdata.color = drill_id[i].col;
        drcatdata.y = drill_id[i].oe_norm;

        drill_cat_data.push(drcatdata)
    }

    drill_cat_line = [];

    for (i = 0; i < series_obj.length; i++) {

        var drcatline = new drillcatline()

        drcatline.name = 'Compliance'
        drcatline.color = 'red'
        drcatline.type = 'line'

        for (j = 0; j < drill_id.length; j++) {

            if (series_obj[i].drilldown == drill_id[j].temp) {

                drcatline.data.push(drill_id[j].level)
                drcatline.id = drill_id[j].temp

            }
        }

        drill_cat_line.push(drcatline)

    }


    for (i = 0; i < array_temp.length; i++) {

        var drcat = new drillcat()

        drcat.id = array_temp[i]

        for (j = 0; j < drill_cat_data.length; j++) {

            if (drill_id[j].temp == array_temp[i]) {

                drcat.data.push(drill_cat_data[j])

            }
        }

        drill_cat.push(drcat);
    }

    function seriesobj() {
        this.name;
        this.y;
        this.color;
        this.drilldown;
    }

    series_obj = [];

    temp_sum = [];

    for (i = 0; i < array_temp_oe_norm.length; i++) {

        var array_temp_oe_norm_sliced = array_temp_oe_norm[i].slice(1)
        var array_temp_oe_norm_sum = array_temp_oe_norm_sliced.reduce(function(a, b) {
            return a + b
        })
        var array_temp_oe_norm_avg = roundToOne(array_temp_oe_norm_sum / array_temp_oe_norm_sliced.length)

        temp_sum.push(array_temp_oe_norm_avg)
    }

    console.log(temp_sum);

    for (i = 0; i < array_temp_oe_norm.length; i++) {

        var sobj = new seriesobj();

        sobj.name = array_temp[i];
        sobj.y = temp_sum[i];
        sobj.drilldown = array_temp[i];
        sobj.color = 0;

        series_obj.push(sobj)
    }

    for (i = 0; i < series_obj.length; i++) {

        if (series_obj[i].y > levels_filtered[i]) {
            series_obj[i].color = 'rgba(237,30,121,0.6)'
        } else {
            series_obj[i].color = 'rgba(0,169,157,0.6)'
        }
    }

    series_array = [];
    drilldown_array = [];

    for (i = 0; i < series_obj.length; i++) {

        series_array.push(series_obj[i])
    };

    for (i = 0; i < drill_cat.length; i++) {

        drilldown_array.push(drill_cat[i])
    };

    temp_columns_comp();
}

//template columns compliance
function temp_columns_comp() {

    $('#container').highcharts({
        chart: {
            type: 'column',
            events: {
                drilldown: function(point) {

                    for (i = 0; i < level_objects.length; i++) {
                        if (point.seriesOptions.id == level_objects[i].name) {
                            this_level = level_objects[i].y;
                        }
                    }

                    var chart = $('#container').highcharts();

                    if (chart.yAxis[0].max < this_level) {
                        chart.yAxis[0].setExtremes(0, this_level + 3)
                    }

                    chart.yAxis[0].addPlotLine({
                        value: this_level,
                        width: 2,
                        id: 'plot-line',
                        dashStyle: 'dash',
                        color: '#ed1e79'
                    })

                },

                drillup: function() {
                    var chart = $('#container').highcharts();
                    chart.yAxis[0].removePlotLine('plot-line')
                }
            }
        },

        title: {
            text: temp_title
        },

        subtitle: {
            text: 'Click the columns to view buildings'
        },

        xAxis: {
            type: 'category',
            lineColor: "#DCDCDC",
            tickColor: "#DCDCDC"
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

        yAxis: {
            title: {
                text: temp_units
            },
            gridLineColor: '#DCDCDC'
        },

        plotOptions: {
            series: {
                borderWidth: 0
            }
        },

        tooltip: {
            headerFormat: '',
            pointFormat: '<span>{point.name}</span>: <b>{point.y}</b> kWh / year<br/>'
        },

        series: [{
            name: 'Use Types',
            color: '#00A99D',
            data: series_array
        }, {
            name: 'Compliance Level',
            type: 'line',
            dashStyle: 'dash',
            data: level_objects,
            color: '#ed1e79'
        }],

        drilldown: {
            drillUpButton: {
                theme: {
                    fill: 'white',
                    stroke: 'rgba(220, 220, 220, 1.0)',
                    r: 0,
                    states: {
                        hover: {
                            fill: 'rgba(220, 220, 220, 0.2)',
                            stroke: 'rgba(220, 220, 220, 1.0)'
                        }
                    }
                }
            },
            series: drilldown_array
        }

    })
}

//histogram walkability
function histogram_walkability() {

    var wk_description = ['Very Car-Dependent', 'Car-Dependent', 'Somewhat Walkable', 'Very Walkable', 'Walkers Paradise'];

    var wk_01 = [];
    var wk_02 = [];
    var wk_03 = [];
    var wk_04 = [];
    var wk_05 = [];

    for (i = 0; i < buildings.length; i++) {
        if (buildings[i].mo_walk < 25) {
            wk_01.push(i);
        } else if (buildings[i].mo_walk >= 25 && buildings[i].mo_walk < 50) {
            wk_02.push(i);
        } else if (buildings[i].mo_walk >= 50 && buildings[i].mo_walk < 70) {
            wk_03.push(i);
        } else if (buildings[i].mo_walk >= 70 && buildings[i].mo_walk < 90) {
            wk_04.push(i);
        } else if (buildings[i].mo_walk >= 90) {
            wk_05.push(i);
        }
    }

    var wk_scores = [wk_01.length, wk_02.length, wk_03.length, wk_04.length, wk_05.length];
    var wk_colors = [];


    if (n == null) {
        wk_colors = ['rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 1.0)']
    } else {
        if ((wk_01.indexOf(n)) != -1) {
            wk_colors = ['rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)']
        } else if ((wk_02.indexOf(n)) != -1) {
            wk_colors = ['rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)']
        } else if ((wk_03.indexOf(n)) != -1) {
            wk_colors = ['rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)']
        } else if ((wk_04.indexOf(n)) != -1) {
            wk_colors = ['rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 0.4)']
        } else if ((wk_05.indexOf(n)) != -1) {
            wk_colors = ['rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 1.0)']
        }
    }

    $('#container').highcharts({

        chart: {
            type: 'column'
        },
        legend: {
            enabled: false
        },
        title: {
            text: 'Walkscore Distribution'
        },
        xAxis: {
            categories: wk_description,
            lineColor: "#DCDCDC",
            tickColor: "#DCDCDC"
        },
        yAxis: {
            min: 0,
            gridLineColor: "#DCDCDC",
            title: {
                text: 'Number of Occurences'
            }
        },
        tooltip: {
            formatter: function() {
                return this.series.name + ': ' + this.y.toLocaleString()
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                groupPadding: 0,
                borderWidth: 1,
                colorByPoint: true,
                colors: wk_colors,
                dataLabels: {
                    enabled: true
                }
            },
        },
        series: [{
            name: 'Number of Occurences',
            data: wk_scores
        }]
    });
};

//histogram bikeability
function histogram_bikeability() {

    var bk_description = ['Very Car-Dependent', 'Car-Dependent', 'Somewhat Bikeable', 'Very Bikeable', 'Bikers Paradise'];

    var bk_01 = [];
    var bk_02 = [];
    var bk_03 = [];
    var bk_04 = [];
    var bk_05 = [];

    for (i = 0; i < buildings.length; i++) {
        if (buildings[i].mo_bike < 25) {
            bk_01.push(i);
        } else if (buildings[i].mo_bike >= 25 && buildings[i].mo_bike < 50) {
            bk_02.push(i);
        } else if (buildings[i].mo_bike >= 50 && buildings[i].mo_bike < 70) {
            bk_03.push(i);
        } else if (buildings[i].mo_bike >= 70 && buildings[i].mo_bike < 90) {
            bk_04.push(i);
        } else if (buildings[i].mo_bike >= 90) {
            bk_05.push(i);
        }
    }

    var bk_scores = [bk_01.length, bk_02.length, bk_03.length, bk_04.length, bk_05.length];
    var bk_colors = [];


    if (n == null) {
        bk_colors = ['rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 1.0)']
    } else {
        if ((bk_01.indexOf(n)) != -1) {
            bk_colors = ['rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)']
        } else if ((bk_02.indexOf(n)) != -1) {
            bk_colors = ['rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)']
        } else if ((bk_03.indexOf(n)) != -1) {
            bk_colors = ['rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)']
        } else if ((bk_04.indexOf(n)) != -1) {
            bk_colors = ['rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 1.0)', 'rgba(0, 169, 157, 0.4)']
        } else if ((bk_05.indexOf(n)) != -1) {
            bk_colors = ['rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 0.4)', 'rgba(0, 169, 157, 1.0)']
        }
    }

    $('#container').highcharts({

        chart: {
            type: 'column'
        },
        legend: {
            enabled: false
        },
        title: {
            text: 'Bikescore Distribution'
        },
        xAxis: {
            categories: bk_description,
            lineColor: "#DCDCDC",
            tickColor: "#DCDCDC"
        },
        yAxis: {
            min: 0,
            gridLineColor: "#DCDCDC",
            title: {
                text: 'Number of Occurences'
            }
        },
        tooltip: {
            formatter: function() {
                return this.series.name + ': ' + this.y.toLocaleString()
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                groupPadding: 0,
                borderWidth: 1,
                colorByPoint: true,
                colors: bk_colors,
                dataLabels: {
                    enabled: true
                }
            },
        },
        series: [{
            name: 'Number of Occurences',
            data: bk_scores
        }]
    });
};

//histogram daylight
function histogram_daylight() {

    var da_description = ["Very Shaded", "Shaded", "Somewhat Daylit", "Daylit", "Sublime"];

    var da_01 = [];
    var da_02 = [];
    var da_03 = [];
    var da_04 = [];
    var da_05 = [];

    for (i = 0; i < buildings.length; i++) {
        if (buildings[i].da < 20) {
            da_01.push(i);
        } else if (buildings[i].da >= 20 && buildings[i].da < 40) {
            da_02.push(i);
        } else if (buildings[i].da >= 40 && buildings[i].da < 60) {
            da_03.push(i);
        } else if (buildings[i].da >= 60 && buildings[i].da < 80) {
            da_04.push(i);
        } else if (buildings[i].da >= 80) {
            da_05.push(i);
        }
    }

    var da_scores = [da_01.length, da_02.length, da_03.length, da_04.length, da_05.length];
    var da_colors = [];


    if (n == null) {
        da_colors = ["#FFBE20", "#FFBE20", "#FFBE20", "#FFBE20", "#FFBE20"]
    } else {
        if ((da_01.indexOf(n)) != -1) {
            da_colors = ['rgba(255, 190, 32, 1.0)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)']
        } else if ((da_02.indexOf(n)) != -1) {
            da_colors = ['rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 1.0)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)']
        } else if ((da_03.indexOf(n)) != -1) {
            da_colors = ['rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 1.0)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)']
        } else if ((da_04.indexOf(n)) != -1) {
            da_colors = ['rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 1.0)', 'rgba(255, 190, 32, 0.4)']
        } else if ((da_05.indexOf(n)) != -1) {
            da_colors = ['rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 0.4)', 'rgba(255, 190, 32, 1.0)']
        }
    }

    $('#container').highcharts({

        chart: {
            type: 'column'
        },
        legend: {
            enabled: false
        },
        title: {
            text: 'Daylight Autonomy Distribution'
        },
        xAxis: {
            categories: da_description,
            lineColor: "#DCDCDC",
            tickColor: "#DCDCDC"
        },
        yAxis: {
            min: 0,
            gridLineColor: "#DCDCDC",
            title: {
                text: 'Number of Occurences'
            }
        },
        tooltip: {
            formatter: function() {
                return this.series.name + ': ' + this.y.toLocaleString()
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                groupPadding: 0,
                borderWidth: 1,
                colorByPoint: true,
                colors: da_colors,
                dataLabels: {
                    enabled: true
                }
            },
        },
        series: [{
            name: 'Number of Occurences',
            data: da_scores
        }]
    });
};


//call all Lifecycle
function call_lcall(_metric, _title, _yaxis, _units) {

    function bldLcObj(_bn, _ar, _lcen, _lcca) {
        this.bname = _bn;
        this.area = _ar;
        this.lc_en = _lcen;
        this.lc_ca = _lcca;
    }

    var bobs_lc = [];

    for (i = 0; i < buildings.length; i++) {

        var b = new bldLcObj(buildings[i].bname, buildings[i].area, buildings[i].lc_en, buildings[i].lc_ca);
        bobs_lc.push(b);
    }

    //add if statement for sorting
    if (_metric == 1) {
        bobs_lc.sort(function(a, b) {
            return a.lc_en - b.lc_en
        })
    } else if (_metric == 2) {
        bobs_lc.sort(function(a, b) {
            return a.lc_ca - b.lc_ca
        })
    }

    var lc_en = [];
    var lc_ca = [];
    var lc_bname_arr = [];
    var lc_colors = [];

    var lc_data

    for (i = 0; i < buildings.length; i++) {
        lc_en.push(bobs_lc[i].lc_en)
        lc_ca.push(bobs_lc[i].lc_ca)
        lc_bname_arr.push(bobs_lc[i].bname)
        if (n == null) {
            lc_colors.push('rgba(140, 140, 140, 1.0)');
        } else if (buildings[n].bname != bobs_lc[i].bname) {
            lc_colors.push('rgba(140, 140, 140, 0.4)');
        } else if (buildings[n].bname == bobs_lc[i].bname) {
            lc_colors.push('rgba(140, 140, 140, 1.0)');
        }
    };



    if (_metric == 1) {
        lc_data = lc_en;
    } else if (_metric == 2) {
        lc_data = lc_ca;
    }


    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: _title
        },
        xAxis: {
            categories: lc_bname_arr,
            lineColor: "#DCDCDC",
            tickColor: "#DCDCDC"
        },
        yAxis: {
            gridLineColor: '#DCDCDC',
            min: 0,
            title: {
                text: _yaxis
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
                    this.series.name + ': ' + this.y.toLocaleString() + ' ' + _units + '<br/>'
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                pointPadding: 0,
                groupPadding: 0,
                borderWidth: 1,
                colorByPoint: true,
                colors: lc_colors,
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: _title,
            data: lc_data
        }]
    })
};

function Start_Chart4(){

    ch_t = 4
    mode = 1

    n=null;

    show('#collapseBegin', menu_begin);
    hide('#collapseZero', menu_0);
    hide('#collapseModes', menu_modes);
    hide('#collapseTwo', menu_2);
    hide('#collapseTwoB', menu_2b);
    hide('#collapseFive', menu_5);
    hide('#collapseSix', menu_6);
    hide('#collapseSeven', menu_7);
    hide('#collapseEight', menu_8);
    hide('#collapseNine', menu_9);

    document.getElementsByTagName("img")[0].src = "ico/UMI.png";
    about.innerHTML = "Project Information";
    about_content.innerHTML =
        "<li>" + "Number of Buildings: " + buildings.length + "</li>" +
        "<li>" + "Number of Use Types: " + array_temp.length + "</li>" +
        "<li>" + "Area Range: " + project[0].area_min.toLocaleString() + " - " + project[0].area_max.toLocaleString() + " sqm" + "</li>"

    norm_off_fn();
    walkscore_fn();

    bldname.innerHTML = "Buildings" + "<font color='#d3d3d3'>" + " | " + "Energy" + "</style>";

    $(bread).find("li").slice(0).remove();
    
    $(bread).append("<li>" + "<a onclick='Start_Chart4()' href='#'>All Building Map</a>" + "</li>");
    $(bread).append("<li class='active'>" + "Energy" + "</li>");

    create_geodata();
    
}

function create_geodata(){

    var building_geometries = [];
    var building_data = [];

    function bldGeoArray() {
        this.type;
        this.features;
    }

    function bldGeoObj() {
        this.geometry;
        this.properties;
        this.type;
    }

    function bldGeoProp() {
        this.name;
        this.oe;
    }

    function bldGeoData(){
        this.code;
        this.value;
    }

    var building_array = new bldGeoArray();

    building_array.type = "FeatureCollection";

    for (i=0;i<buildings.length;i++){

        var bld = new bldGeoObj();

        bld.geometry = buildings[i].geometry;
        bld.type = "Feature";

        var bldprop = new bldGeoProp();

        bldprop.name = buildings[i].bname;
        bldprop.oe = buildings[i].oe;

        bld.properties = bldprop;

        building_geometries.push(bld);

        var blddata = new bldGeoData();

        blddata.code = buildings[i].bname;
        blddata.value = buildings[i].oe;

        building_data.push(blddata);

    }

    building_array.features = building_geometries;

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Annual Consumption'
        },

        tooltip: {
            formatter: function() {

                var s = '<b>'+ this.point.name + '</b>' + '<br/>' + 'Total: ' + this.point.value.toLocaleString() + ' kWh/year';
                return s;
    
            }
        },

        plotOptions: {
            map: {
                borderColor: "white"
            },
            series: {
                allowPointSelect:true,
                cursor: 'pointer',
                point: {
                    events: {
                        click: function() {
                            n = array_bname.indexOf(this.name)
                            bldinfo(n)
                        }
                    }
                }
            }
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            stops: [
                [0, '#00a99d'],
                [0.5, '#ffbe20'],
                [1.0, '#ed1e79']
            ],
            max: project[0].max_oe,
            min: project[0].min_oe,
            tickColor: "#DCDCDC"
        },

        series : [{
            data : building_data,
            mapData: building_array,
            joinBy: ['name', 'code'],
            name: 'Energy',
            states: {
                hover: {
                    color: '#ffe19f'
                }
            }
        }]
    });
    
}

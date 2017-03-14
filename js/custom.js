// var new_zip = new JSZip();

(function () {
  if (!window.FileReader || !window.ArrayBuffer) {
    $("#error_block").removeClass("hidden").addClass("show");
    return;
  }


  var $result = $("#result");
  $("#zipinput_test").on("change", function(evt) {
    // remove content
    $result.html("");
    // be sure to show the results
    $("#result_block").removeClass("hidden").addClass("show");

    // see http://www.html5rocks.com/en/tutorials/file/dndfiles/

   files = evt.target.files;


    for (var i = 0, f; f = files[i]; i++) {

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          var $title = $("<h4>", {
            text : theFile.name
          });
          $result.append($title);
          var $fileContent = $("<ul>");
          try {

            var dateBefore = new Date();
            // read the content of the file with JSZip
            var zip = new JSZip(e.target.result);
            var dateAfter = new Date();

            $title.append($("<span>", {
              text:" (parsed in " + (dateAfter - dateBefore) + "ms)"
            }));

            // that, or a good ol' for(var entryName in zip.files)
            $.each(zip.files, function (index, zipEntry) {

                var checkName = zipEntry.name;

                // this is key for parsing and storing files.
                if(checkName == 'sdl-common/project.json') {

                    // HERE EDIT
                    // launchBuild(zipEntry.asText());
                    var zipJson = JSON.parse(zipEntry.asText());

                    launchBuild(zipJson);
                    // console.log(zipJson);
                    // console.log(JSON.parse(zipEntry.asText()));
                    // $fileContent.append($("<li>", {
                    //   text : zipEntry.asText()
                    // }));
                }
                // test.indexOf('sdl-common/') >= 0
                // // if(zipEntry.name console.log(zipEntry.asText());

                // $fileContent.append($("<li>", {
                //   text : zipEntry.name
                // }));
                // // the content is here : zipEntry.asText()
            });
            // end of the magic !

          } catch(e) {
            $fileContent = $("<div>", {
              "class" : "alert alert-danger",
              text : "Error reading " + theFile.name + " : " + e.message
            });
          }
          $result.append($fileContent);
        }
      })(f);

      // read the file !
      // readAsArrayBuffer and readAsBinaryString both produce valid content for JSZip.
      reader.readAsArrayBuffer(f);
      // reader.readAsBinaryString(f);
    }
  });
})();


$(window).load(function(){
    $('#introModal').modal({
      backdrop: 'static',
      keyboard: false,
      show: true,
    });
});

$('#changeFile').click(function() {
    $('#introModal').modal({
      backdrop: 'static',
      keyboard: false,
      //show: true,
    });
});

$('#loadFromFile').click(function() {
    $('#zipinput_test').click();
});

$('#loadExample').click(function() {
    launchBuild(example_json);
});

function launchBuild(json) {

    emptyVariables();
    // add loading feature 
    $('#introModalContent').append("<div class='loading-modal'><div class='row'><img src='img/umi-loading.gif'></div><div class='row' style='padding-top:20px;'><span class='btn btn-default disabled'>LOADING SIMULATION DATA</span></div></div>");

    // 
    setTimeout(function() {
        // -----------Tariq--------------
        BuildList2(json);
        // ------------------------------
    }, 500);
   
    // $('#introModal').modal('hide');
}

function listReady() {
    // BuildList(json);
    $('#introModal').modal('hide');
    $('.loading-modal').remove();
}

function emptyVariables() {
    buildings = [];
    project = [];
    headers = [];

    array_bname = [];
    array_wwr = [];
    array_area = [];
    array_bid = [];

    array_oe = [];
    array_oe_norm = [];

    array_mo_walk = [];
    array_mo_bike = [];

    array_oc = [];

    array_da = [];

    array_lc_en = [];
    array_lc_ca = [];

    array_temp_dup = [];
    array_temp = [];
    array_temp_oe = [];
    array_temp_oe_co = [];
    array_temp_oe_he = [];
    array_temp_oe_el = [];
    array_temp_oe_eq = [];
    array_single_value_measures = [];

    array_temp_oe_norm = [];
    array_temp_oe_co_norm = [];
    array_temp_oe_he_norm = [];
    array_temp_oe_el_norm = [];
    array_temp_oe_eq_norm = [];

    series_obj = [];

    comp_level = [];
}

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {

    // Great success! All the File APIs are supported.
    // $('body').html('GREAT!');
  
    JsonObj = null 
  
    function handleFileSelect(evt) {
      
        var files = evt.target.files; // FileList object
        f = files[0];
        var reader = new FileReader();
    
        // Closure to capture the file information.
        reader.onload = (function(theFile) {
          
            return function(e) {
                // Render thumbnail.
                JsonObj = JSON.parse(e.target.result);
                // console.log(JSON.stringify(JsonObj));
                // $('#introModal').modal('hide');
                launchBuild(JsonObj)
                // BuildList(JsonObj);
            };
    
        })(f);
  
        // Read in the image file as a data URL.
        reader.readAsText(f);
         
    }
  
    //document.getElementById('files').addEventListener('change', handleFileSelect, false); 

} else {

    alert('The File APIs are not fully supported in this browser.');

}

/* Main unzip function */
            // function unzip(zip){
            //     model.getEntries(zip, function(entries) {
            //         entries.forEach(function(entry) {
            //             model.getEntryFile(entry, "Blob");
            //         });
            //     });
            // }

            // /* Drag'n drop stuff */
            // var drag = document.getElementById("drag");
            
            // drag.ondragover = function(e){
            //     e.preventDefault()
            // };


            // drag.ondrop = function(e) {
            //     e.preventDefault();
                  
            //       var length = e.dataTransfer.items.length;
            //       for (var i = 0; i < length; i++) {
            //         var entry = e.dataTransfer.items[i].webkitGetAsEntry();
            //         var file = e.dataTransfer.files[i];
            //         var zip = file.name.match(/\.zip/);
            //         if (entry.isFile) {
            //             if(zip){
            //                 unzip(file);
            //             } else if(rar){
            //                 unrar(file);
            //             } else {  
            //               output.innerHTML = "This is not a zip or rar file.";        
            //             }

            //             if(i==length-1){
            //                 show(tablearr);
            //             }

            //         } else {
            //          output.innerHTML = "Please drag and drop a zip or rar file."; 
            //         }


            //       }
            // }



            // var zipinput = document.getElementById("zipinput");
            // // var zbutton = document.getElementById("zbutton");


            // //process archive
            // zipinput.addEventListener('change', function() {
            //     var name = zipinput.files[0].name;
            //     var type = name.substr(name.length-3,3);
            //     if(type == "zip"){
            //         unzip(zipinput.files[0]);
            //     } else if(type == "rar"){
            //         unrar(zipinput.files[0]);
            //     } else {
            //         output.innerHTML = "This is not a zip or rar archive."; 
            //     }
                
            // }, false);


            // zbutton.addEventListener("click", function() {
            //     document.getElementById('zipinput').click()
            // }, false);





var count = 0;
var entries;

function callback(a,b){

    if(a){
        output.innerHTML = a; //errors
    } else {
        count++;

        filearr.push(b);

        tablearr.push({
            "name":entries[count-1].name,
            "type":b.type,
            "size":b.size,
            "view":"<button onclick='goopen("+Number(count-1)+")'>open</button>"
        });

        if(count==entries.length){
            //console.log("done");
            show(tablearr);
        }
    }
}


            //https://github.com/43081j/rar.js
            function unrar(rar){

                count=0;

                RarArchive(rar, function(err) {
                    self = this;
                    if(err) {
                        console.log(err);
                        return;
                    }
                    this.entries.forEach(function(file) {
                        self.get(file,callback);
                    });

                    entries = this.entries;
                });

            }




            //model for zip.js
            //https://github.com/gildas-lormeau/zip.js

            var model = (function() {

                var URL = window.URL || window.mozURL || window.URL;
                var acount = 0;
                var bcount = 0;

                //compile a list of file extensions and content types
                //http://webdesign.about.com/od/multimedia/a/mime-types-by-content-type.htm
                var mapping = {
                    "pdf":"application/pdf",
                    "zip":"application/zip",
                    "rar":"application/rar",
                    "json":"application/json",
                    "mid":"audio/mid",
                    "mp3":"audio/mpeg",
                    "bmp":"image/bmp",
                    "gif":"image/gif",
                    "png":"image/png",
                    "jpg":"image/jpeg",
                    "jpeg":"image/jpeg",
                    "svg":"image/svg+xml",
                    "xml":"text/xml"
                }


                return {
                    getEntries : function(file, onend) {

                        zip.createReader(new zip.BlobReader(file), function(zipReader) {
                            zipReader.getEntries(onend);
                        }, onerror);
                    },
                    getEntryFile : function(entry, creationMethod, onend, onprogress) {

                        acount++;

                        var writer, zipFileEntry;

                        function getData() {
                            entry.getData(writer, function(blob) {

                                bcount++;


                                filearr.push(blob);

                                tablearr.push({
                                    "name":entry.filename,
                                    "type":blob.type,
                                    "size":blob.size,
                                    "view":"<button onclick='goopen("+Number(bcount-1)+")'>open</button>"
                                });
                                

                                if(acount == bcount){
                                    show(tablearr);
                                }
                         
                            }, onprogress);
                        }
                            
                            //console.log(entry);
                            var extension = entry.filename.substring(entry.filename.indexOf(".")+1);
                            var mime = mapping[extension] || 'text/plain';
                            //console.log(mime);

                            writer = new zip.BlobWriter(mime);
                            getData();
                    }
                };
            })();

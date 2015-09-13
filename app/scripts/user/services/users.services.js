//var users_api = "http://localhost:8080/mbg-api-gateway/v1/users";
'use strict';

var appservices = app.factory('User' , function($resource){
    var fileuploadserviceURL = '';
   /* console.log(appconfig.MBG_API_URL); 
    
    if(appconfig.MBG_API_URL){
        fileuploadserviceURL = appconfig.MBG_API_URL+"v1/users";
    }else{*/
        fileuploadserviceURL = "http://localhost:8080/mbg-api-gateway/v1/users"
    //}
        
    
    return $resource(fileuploadserviceURL, {}, {});

});
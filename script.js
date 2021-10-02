$(document).ready(function() {


    // <!--- FIELD INPUT / HIDE & SHOW --->
$("select").change(function(){
    if ($(this).val() === "residential") {               
        $("#number-of-apartments").show(0700,);
        $("#number-of-floors").show(0700,);
        $("#number-of-companies").hide(0700,);
        $("#number-of-basements").show(0700,);
        $("#number-of-parking-spots").hide(0700,);
        $("#number-of-elevators").hide(0700,);
        $("#number-of-corporations").hide(0700,);
        $("#maximum-occupancy").hide(0700,);
        $("#business-hourss").hide(0700,);         
    }
});



$("select").change(function(){
    if ($(this).val() === "commercial") {               
        $("#number-of-apartments").hide(0700,);
        $("#number-of-floors").show(0700,);
        $("#number-of-companies").show(0700,);
        $("#number-of-basements").show(0700,);
        $("#number-of-parking-spots").show(0700,);
        $("#number-of-elevators").show(0700,);
        $("#number-of-corporations").hide(0700,);
        $("#maximum-occupancy").hide(0700,);
        $("#business-hours").hide(0700,);         
    }
});


 
$("select").change(function(){
    if ($(this).val() === "corporate") {               
        $("#number-of-apartments").hide(0700,);
        $("number-of-floors").show(0700,);
        $("#number-of-companies").hide(0700,);
        $("#number-of-basements").show(0700,);
        $("#number-of-parking-spots").show(0700,);
        $("#number-of-elevators").hide(0700,);
        $("#number-of-corporations").show(0700,);
        $("#maximum-occupancy").show(0700,);
        $("#business-hours").hide(0700,);         
    }
});



$("select").change(function(){
    if ($(this).val() === "hybrid") {               
        $("#number-of-apartments").hide(0700,);
        $("#number-of-floors").show(0700,);
        $("#number-of-companies").show(0700,);
        $("#number-of-basements").show(0700,);
        $("#number-of-parking-spots").show(0700,);
        $("#number-of-elevators").hide(0700,);
        $("#number-of-corporations").hide(0700,);
        $("#maximum-occupancy").show(0700,);
        $("#business-hours").show(0700,);         
    }
});



// let numberofappart = document.querySelector('#no-apartments');
// let nooffloor = document.querySelector('#no-of-floors');
// let numberobasements = document.querySelector('#no-of-basements');
// let noofcompanies = document.querySelector('#no-of-companies');
// let noparkingspot = document.querySelector('#no-of-parking-spots');
// let nocorporation = document.querySelector('#no-of-corporations');
// let mxoccupancy = document.querySelector('#max-occupancy');
// let nohours = document.querySelector('#b-hours');
// let numberofelevators = document.querySelector('#no-of-elevators');


// <!--- PRODUCT LINE --->
$("#standard").click(function(){

   $('.elevator-unit').val(7565) ;
   $('.installation-price').val(($('.total-price').val() * 0.10));
   $('.total-price').val();
   
});

$("#premium").click(function(){

    $('.elevator-unit').val(12345) ;
    $('.installation-price').val(($('.total-price').val() * 0.13));
    $('.total-price').val();
 });

 $("#excelium").click(function(){

    $('.elevator-unit').val(15400) ;
    $('.installation-price').val(($('.total-price').val() * 0.16));
    $('.total-price').val();
    
 });



// <!--- COMMERCIAL --->

$("#number-of-floors, #number-of-companies, #number-of-basements, #number-of-parking-spots, #number-of-elevators").change(function(){
    let commercialElevatorCages = $('#no-of-elevators').val();    
    let commercialTotalPrice = commercialElevatorCages * 7565;    
    let commercialInstallation = $('.installation-price').val();
                    
                $('.elevator-amount-res').val(parseFloat(commercialElevatorCages));                
                $('.total-price').val(parseFloat(commercialTotalPrice)) ;
                $('.installation-price').val(parseFloat(commercialInstallation));
                $('.final-cost').val(parseFloat(commercialInstallation + commercialTotalPrice));     
     
});


// <!--- CORPORATE   --->
       
$("#number-of-floors, #no-of-corporations, #number-of-basements, #number-of-parking-spots, #maximum-occupancy").change(function(){
            let corporateOccupants = ($('#no-of-floors').val() + $('#no-of-basements').val()) * $('#max-occupancy').val();
            let corporateElevatorRequired = Math.ceil(corporateOccupants / 1000);
            let corporateColumsRequired = ($('#no-of-floors').val() + $('#no-of-basements').val()) / 20;  
            let corporateElevatorPerColumn = corporateElevatorRequired / corporateColumsRequired;
            let corporateTotalPrice = corporateElevatorRequired * 7565;    
            let corporateInstallation = ((corporateElevatorRequired*7565)*0.10);                                              
                             
                $('.elevator-amount-res').val(parseFloat(corporateElevatorRequired));                
                $('.total-price').val(parseFloat(corporateTotalPrice)) ;
                $('.installation-price').val(parseFloat(corporateInstallation));
                $('.final-cost').val(parseFloat(corporateInstallation + corporateTotalPrice));     
        
            });

// <!--- HYBRID   --->
       
    $("#number-of-floors, #number-of-companies, #number-of-basements, #number-of-parking-spots, #maximum-occupancy, #business-hours").change(function(){
        let hybridOccupants = ($('#no-of-floors').val() + $('#no-of-basements').val()) * $('#max-occupancy').val();
        let hybridElevatorRequired = Math.ceil(hybridOccupants / 1000);
        let hybridColumsRequired = ($('#no-of-floors').val() + $('#no-of-basements').val()) / 20;  
        let chybridElevatorPerColumn = hybridElevatorRequired / hybridColumsRequired;
        let hybridTotalPrice = hybridElevatorRequired * 7565;    
        let hybridInstallation = ((hybridElevatorRequired*7565)*0.10);                                              
                         
            $('.elevator-amount-res').val(parseFloat(corporateElevatorRequired));                
            $('.total-price').val(parseFloat(corporateTotalPrice)) ;
            $('.installation-price').val(parseFloat(corporateInstallation));
            $('.final-cost').val(parseFloat(corporateInstallation + corporateTotalPrice));     
  
        });  



 // <!--- RESIDENTIAL   --->
             
$("#no-apartments, #number-of-floors, #number-of-companies,number-of-basements").change(function(){
    let residaverageDrFloor = $('#no-apartments').val() / $('#number-of-floors').val() ;
    let residentialElevatorshaft = Math.ceil(residaverageDrFloor/6) ;
    let residentialElevatorRequired =  residentialElevatorshaft * Math.ceil($('#number-of-floors').val()/20);
  
    let residTotalPrice = residentialElevatorRequired * 7565;    
    let residInstallation = ((residentialElevatorRequired*7565)*0.10);                                              
                     
        $('.elevator-amount-res').val(parseFloat(residentialElevatorRequired));                
        $('.total-price').val(parseFloat(residTotalPrice)) ;
        $('.installation-price').val(parseFloat(residInstallation));
        $('.final-cost').val(parseFloat(residInstallation + residTotalPrice));     

    });
});  

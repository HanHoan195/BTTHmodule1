function ElectricLamp(status){
    this.status = status;
    this.getStatus = function(){
        return this.status;        
    }
    // this.lampOff = function(){
    //     this.lamp.status = false;
    //     return this.status = "Bóng đèn tắt";
    // }
    // this.lampOn = function(){
    //     this.lamp.status = true;
    //     return this.status = "Bóng đèn bật";
    // }
    
}

function SwitchButton(lamp, status){
    this.lamp = lamp;
    this.status = status;

    this.getLamp = function(){
        return this.lamp;
    }
    this.setLamp = function(lamp){
        this.lamp = lamp;
    }
    this.connectToLamp = function(ElectricLamp){
        this.lamp = ElectricLamp;
    }
    this.switchOff = function(){
        this.lamp.status = false;
        return this.status = "Công tắt: tắt";
    }
    this.switchOn = function(){
        this.lamp.status = true;
        return this.status = "Công tắt: bật";
    }
 }

 let lamp = new ElectricLamp(false);
 let switchBut = new SwitchButton(lamp, false);


 document.write(switchBut.switchOn() + "<br>");
 document.write(lamp.getStatus() + "Bóng đèn bật <br>"); 
 document.write(switchBut.switchOff() + "<br>");
 document.write(lamp.getStatus() + " Bóng đèn tắt <br>");
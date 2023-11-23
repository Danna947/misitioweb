window.onload = () =>{
    const ContImgBox ={
        Element : document.getElementById("ContImgBox"),
        topPosition :0,
        leftPosition:0,
        translate:(5),
        move: function(direction){
            switch(direction){
                case "ArrowUp":
                   this.topPosition = this.topPosition - this.translate;
                   this.Element.style.top = this.topPosition + "%";

                    break;
                    case "ArrowDown":
                        this.topPosition = this.topPosition + this.translate;
                        this.Element.style.top = this.topPosition + "%";
                         break;
                    case "ArrowRight":
                                this.leftPosition = this.leftPosition + this.translate;
                                this.Element.style.left = this.leftPosition + "%";
                                break;
                    case "ArrowLeft":
                                    this.leftPosition = this.leftPosition - this.translate;
                                    this.Element.style.left = this.leftPosition + "%";
                                    break;
                default:
                
            
                    break;
            }
        }
    };

    onkeydown = (key)=>{
        ContImgBox.move(key.code);
    }

};




    
   





// Revealing module pattern

var stock = (function(){
    var stockCounter = 0;

    return {
        addStock:function(){
            console.log("The stockCounter value is :"+ stockCounter);
            return stockCounter++;
            
        },
        removeStock:function(){
            console.log("The stockCounter value is :"+ stockCounter);
            return stockCounter--;         
        }
    };

})();

// Revealing module
for (i=0;i<10;i++)
{
    stock.addStock();
}

stock.removeStock();
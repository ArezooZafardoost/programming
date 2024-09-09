function typer(honey) {

    for (let i=0; i<honey.length; i++) {
        console.log(typeof honey[i]);
    }

}

typer(['arezoo',1,2,5,true,"a",'string',function(){}]);


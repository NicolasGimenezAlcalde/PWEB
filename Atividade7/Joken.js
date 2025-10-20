function escolha(){

    let escolhauser = document.getElementById("opcao");
    let escolhaComp;
    let escolhaCompVal;


    escolhaCompVal = Math.random();

    if (escolhaCompVal <= 0.33){
        escolhaComp = "Pedra";
    }

    else if (escolhaCompVal < 0.67){
        escolhaComp = "Tesoura";
    }

    else if (escolhaCompVal > 0.66){
        escolhaComp = "Papel";
    }

    if (escolhaComp == escolhauser.value){
        alert("Empate, o pc escolheu "  + escolhaComp);
    }
        else if (escolhaComp == "Papel" && escolhauser.value == "Tesoura"){
            alert("Você Ganhou, o pc escolheu " + escolhaComp);
        }
            else if (escolhaComp == "Papel" && escolhauser.value == "Pedra"){
                alert("Você Perdeu, o pc escolheu " + escolhaComp);
            }
                else if (escolhaComp == "Pedra" && escolhauser.value == "Tesoura"){
                    alert("Você Perdeu, o pc escolheu " + escolhaComp);
                }
                    else if (escolhaComp == "Tesoura" && escolhauser.value == "Papel"){
                        alert("Você Perdeu, o pc escolheu " + escolhaComp);
                    }
                        else if (escolhaComp == "Pedra" && escolhauser.value == "Papel"){
                            alert("Você Ganhou, o pc escolheu " + escolhaComp);
                        }
                            else if (escolhaComp == "Tesoura" && escolhauser.value == "Pedra"){
                                alert("Você Ganhou, o pc escolheu " + escolhaComp);
                            }
}
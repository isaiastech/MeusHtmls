function confere(){
    let produtos = new Array()
        produtos [0] = "Água de coco"
        produtos[1] = "Água com gas"
        produtos[2] = "Água sem gas"
        produtos[3] = "Batata Strike"
        produtos[4] = "Cerveja Heineken"
        produtos[5] = "Lacta 5 Star"
        produtos[6] = "Diamante negro"
        produtos[7] = "Prestigio"
        produtos[8] = "Nescau prontinho"
        produtos[9] = "Coca cola"
        produtos[10] = "Guarána Antartica"
        produtos[11] = "Copo de vidro"
    let conferir = document.getElementById('res')
            let contar = Number(window.prompt('01-Água de coco'))

            if (contar >= 1) {
                conferir.innerHTML += `<li>${contar}- ${produtos[0]} </li>`
            }
            let gas = document.getElementById('res')
            let gas1 = Number(window.prompt('02-Água com gas'))
            if (gas1 >= 1) {
                gas.innerHTML+= `<li>${gas1}- ${produtos[1]}</li>`
            }
            let sgas = document.getElementById('res')
            let sgas1 = Number(window.prompt('04-Água com gas'))
            if (sgas1 >= 1) {
                sgas.innerHTML+= `<li>${sgas1}- ${produtos[2]}</li>`
            }
            let bat = document.getElementById('res')
            let bat1 = Number(window.prompt('02-Batata Strike'))
            if (bat1 >= 1) {
                gas.innerHTML+= `<li>${bat1}- ${produtos[3]}</li>`
            }
            let cerv = document.getElementById('res')
            let cerv1 = Number(window.prompt('02-Cerveja Heineken'))
            if (cerv1 >= 1) {
                cerv.innerHTML+= `<li>${cerv1}- ${produtos[4]}</li>`
            }
            let lacta = document.getElementById('res')
            let lacta1 = Number(window.prompt('02-Lacta 5 star'))
            if (lacta1 >= 1) {
                lacta.innerHTML+= `<li>${lacta1}- ${produtos[5]}</li>`
            }
            let diamante = document.getElementById('res')
            let diamante1 = Number(window.prompt('02-Diamante negro'))
            if (diamante1 >= 1) {
                diamante.innerHTML+= `<li>${diamante1}- ${produtos[6]}</li>`
            }
            let prestigio = document.getElementById('res')
            let prestigio1 = Number(window.prompt('02-Prestigio'))
            if (prestigio1 >= 1) {
                prestigio.innerHTML+= `<li>${prestigio1}- ${produtos[7]}</li>`
            }
            let nescau = document.getElementById('res')
            let nescau1 = Number(window.prompt('01-Nescau prontinho 200 ml'))
            if (nescau1 >= 1) {
                nescau.innerHTML+= `<li>${nescau1}- ${produtos[8]}</li>`
            }
            let coca = document.getElementById('res')
            let coca1 = Number(window.prompt('02-Coca-cola 350 ml'))
            if (coca1 >= 1) {
                coca.innerHTML+= `<li>${coca1}- ${produtos[9]}</li>`
            }
            let guarana = document.getElementById('res')
            let guarana1 = Number(window.prompt('01-Guarána Antartica'))
            if (guarana1 >= 1) {
                guarana.innerHTML+= `<li>${guarana1}- ${produtos[10]}</li>`
            }
            let copo = document.getElementById('res')
            let copo1 = Number(window.prompt('02-Copo de Vidro'))
            if (copo1 >= 1) {
                copo.innerHTML+= `<li>${copo1}- ${produtos[11]}</li>`
            }

        }

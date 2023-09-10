var saldo = 100.5; //Variavel Global
		var saudacao = prompt("informe seu nome por favor")

		alert("Ola " + saudacao + " é um prazer ter você por aqui ")

		function inicio() {

			switch (escolha = parseInt(prompt(` Selecione uma opção
1.) Saldo
2.) Extrato
3.) Saque
4.) Deposito
5.) Tranferencia
6.) Sair `))) {

				case 1:
					ver_saldo();
					break;
				case 2:
					extrato();
					break;
				case 2:
					fazer_deposito();
					break;
				case 3:
					fazer_saque();
					break;
				case 4:
					fazer_deposito();
					break;
				case 5:
					tranferencia()
					break;
				case 6:
					sair();
					break;
				default:
					erro();
			}
		}


		function ver_saldo() {
			var senha = parseInt(prompt("digite a senha "))
			if (senha != 3589) {
				alert("Senha incorreta")
				ver_saldo;
			}
			else {
				alert('Seu saldo atual é: ' + saldo);
				inicio();
			}
		}

		function fazer_deposito() {

			var deposito = parseFloat(prompt('Qual o valor para depósito?'));


			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número.');
				fazer_deposito();
			}
			else if (deposito <= 0) {
				alert("operação não autorizada")
				fazer_deposito();
			}
			else {
				saldo += deposito;

				ver_saldo();
			}
		}



		function fazer_saque() {
			var senha = parseInt(prompt("digite a senha "))
			if (senha != 3589)
				alert("Senha incorreta")
			else {

				var saque = parseFloat(prompt('Qual o valor para saque?'));
			}



			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número.');
				fazer_saque();
			}
			else if (saque > saldo) {
				alert("Operação não autorizada ")
				fazer_saque()
			}
			else if (saque <= 0) {
				alert("operação não autorizada")
			}

			else {
				saldo -= saque;
				//saldo = saldo - saque;


				ver_saldo();
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6.');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(saudacao + " obrigado por usar nossos serviços foi um prazer ter você por aqui!")
				window.close();
			} else {
				inicio();
			}
		}
		function tranferencia() {
			var tranferencia = (parseInt(prompt("Digite os numeros da conta ")))

			if (isNaN(tranferencia) || tranferencia === '') {
				alert('Por favor, informe um número.');
				tranferencia()
			}

			else {
				tranferencia_2()

			}
			function tranferencia_2() {
				var senha = parseInt(prompt("digite a senha "))
				if (senha != 3589) {
					alert("Senha incorreta")
				}
				else {
					var valor_da_transferencia = parseFloat(prompt("Digite o valor "));
				}
				if (isNaN(valor_da_transferencia) || valor_da_transferencia === '') {
					alert("operação invalida.")
					tranferencia_2()
				}
				else if (saldo < valor_da_transferencia) {
					alert("operação ivalida ")
				}
				else {
					saldo -= valor_da_transferencia
					alert(`sua operação foi feita com sucesso 
valor transferido: ${valor_da_transferencia}`)
					inicio();
				}
			}
		}

		function extrato() {
			var senha = parseInt(prompt("digite a senha "))
			if (senha != 3589) {
				alert("Senha incorreta")
				extrato()
			}
			else {
				alert(`miguel depositou 100$ 
compra na loja da plastation 50,00$
mercado extra 50,00$
game pass 100,00`)
				inicio()
			}
		}

		inicio();
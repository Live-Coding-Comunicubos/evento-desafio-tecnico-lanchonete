#  CAIXA DA LANCHONETE
  
  
##  COMO BAIXAR O CÓDIGO E SUBMETER MINHA SOLUÇÃO?
  
Para completar a etapa do desafio você terá que baixar a estrutura do código aqui na Azure, resolver o desafio e entregá-lo no repositório no seu github.
  
###  BAIXANDO A ESTRUTURA
  
Para baixar a estrutura no formato zip, basta clicar neste [link](https://dev.azure.com/db-tecnologia/371ab069-cd1e-4ede-8ae5-fa54dd981c56/_apis/git/repositories/a3a8fe92-b324-4d6b-abbd-1953e46fb075/items?path=/&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=main&resolveLfs=true&%24format=zip&api-version=5.0&download=true ).
  
  
###  ENTREGANDO O DESAFIO
  
Após resolver o desafio e validá-lo com os testes (mais detalhes nos tópicos abaixo), você terá que criar um repositório no [Github](https://github.com/ ) com o nome de `desafio-<img src="https://latex.codecogs.com/gif.latex?seunome-"/>sobrenome` (substitua os nomes com <img src="https://latex.codecogs.com/gif.latex?pelo%20seu%20próprio%20nome%20e%20sobrenome).%20Deṕos%20disso,%20você%20pode%20enviar%20o%20link%20do%20seu%20repositório%20para%20que%20possamos%20validá-lo%20para%20o%20e-mail:%20`start@dbserver.com.br`Se%20você%20ainda%20não%20teve%20contato%20com%20essas%20ferramentas,%20não%20tem%20problema,%20separamos%20um%20material%20para%20lhe%20ajudar%20nessa%20etapa:%20[Como%20usar%20Git%20e%20Github%20na%20prática](https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=UBAX-13g8OM%20).##%20%20O%20DESAFIOOlá!%20Você%20foi%20contratado%20para%20automatizar%20o%20caixa%20da%20Lanchonete%20da%20DB.Sua%20missão%20será%20construir%20a%20lógica%20que%20calcula%20o%20valor%20de%20uma%20compra%20de%20acordo%20com%20o%20cardápio,%20regras%20e%20descontos%20da%20Lanchonete.###%20%20CARDÁPIO%20%20|%20codigo%20%20%20%20|%20descrição%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20|%20valor%20%20%20|%20%20|-----------|-----------------------------|---------|%20%20|%20cafe%20%20%20%20%20%20|%20Café%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20|%20R"/> 3,00 |
  | chantily  | Chantily (extra do Café)    | R<img src="https://latex.codecogs.com/gif.latex?1,50%20|%20%20|%20suco%20%20%20%20%20%20|%20Suco%20Natural%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20|%20R"/> 6,20 |
  | sanduiche | Sanduíche                   | R<img src="https://latex.codecogs.com/gif.latex?6,50%20|%20%20|%20queijo%20%20%20%20|%20Queijo%20(extra%20do%20Sanduíche)%20|%20R"/> 2,00 |
  | salgado   | Salgado                     | R<img src="https://latex.codecogs.com/gif.latex?7,25%20|%20%20|%20combo1%20%20%20%20|%201%20Suco%20e%201%20Sanduíche%20%20%20%20%20%20%20%20|%20R"/> 9,50 |
  | combo2    | 1 Café e 1 Sanduíche        | R<img src="https://latex.codecogs.com/gif.latex?7,50%20|###%20%20FORMAS%20DE%20PAGAMENTOAtualmente%20a%20Lanchonete%20aceita%20as%20seguintes%20formas%20de%20pagamento:%20-%20dinheiro%20-%20debito%20-%20creditoO%20sistema%20deve%20receber%20essa%20informação%20como%20string,%20utilizando%20a%20grafia%20exatamente%20igual%20aos%20exemplos%20acima.###%20%20DESCONTOS%20E%20TAXAS%20-%20Pagamento%20em%20dinheiro%20tem%205%%20de%20desconto%20-%20Pagamento%20a%20crédito%20tem%20acréscimo%20de%203%%20no%20valor%20total###%20%20OUTRAS%20REGRAS-%20Caso%20item%20extra%20seja%20informado%20num%20pedido%20que%20não%20tenha%20o%20respectivo%20item%20principal,%20apresentar%20mensagem%20&quot;Item%20extra%20não%20pode%20ser%20pedido%20sem%20o%20principal&quot;.-%20Combos%20não%20são%20considerados%20como%20item%20principal.-%20É%20possível%20pedir%20mais%20de%20um%20item%20extra%20sem%20precisar%20de%20mais%20de%20um%20principal.-%20Se%20não%20forem%20pedidos%20itens,%20apresentar%20mensagem%20&quot;Não%20há%20itens%20no%20carrinho%20de%20compra!&quot;-%20Se%20a%20quantidade%20de%20itens%20for%20zero,%20apresentar%20mensagem%20&quot;Quantidade%20inválida!&quot;.-%20Se%20o%20código%20do%20item%20não%20existir,%20apresentar%20mensagem%20&quot;Item%20inválido!&quot;-%20Se%20a%20forma%20de%20pagamento%20não%20existir,%20apresentar%20mensagem%20&quot;Forma%20de%20pagamento%20inválida!&quot;###%20%20O%20CÓDIGOVocê%20está%20recebendo%20uma%20estrutura%20básica%20para%20desenvolver%20a%20lógica%20do%20caixa.%20O%20arquivo%20principal%20está%20localizado%20dentro%20da%20pasta%20`src`%20e%20se%20chama%20`caixa-da-lanchonete.js`.%20Você%20pode%20desenvolver%20a%20sua%20lógica%20criando%20outros%20arquivos,%20métodos%20e%20até%20mesmo%20outras%20classes,%20porém%20o%20resultado%20deve%20poder%20ser%20obtido%20através%20do%20método%20`calcularValorDaCompra`.&gt;%20ALERTA:&gt;%20É%20importante%20que%20a%20estrutura%20básica%20descrita%20acima%20não%20seja%20alterada,%20incluindo%20nome%20e%20parâmetros%20do%20método.%20Iremos%20validar%20sua%20solução%20através%20destes,%20assim%20como%20você%20pode%20validar%20através%20dos%20cenários%20de%20testes%20já%20implementados%20em%20`src&#x2F;caixa-da-lanchonete.test.js`.###%20%20INSTALANDO%20E%20RODANDO%20NA%20SUA%20MÁQUINA1.%20Instalar%20o%20[Node](https:&#x2F;&#x2F;nodejs.org&#x2F;en&#x2F;%20)2.%20Instalar%20dependencias%20do%20projeto%20com%20o%20seguinte%20comando:```bashnpm%20install```###%20%20VALIDANDO%20A%20SOLUÇÃOJunto%20com%20a%20estrutura%20básica%20você%20está%20recebendo%20alguns%20cenários%20de%20testes%20para%20auxiliar%20na%20validação%20da%20sua%20solução.%20Recomendamos%20que%20você%20crie%20mais%20casos%20de%20teste%20para%20aumentar%20a%20confiabilidade%20da%20sua%20solução.Para%20testar%20sua%20solução%20com%20os%20cenários%20já%20criados,%20basta%20rodar%20o%20seguinte%20comando:```bashnpm%20test```Para%20saber%20mais%20consulte%20a%20[Documentação%20do%20Jest](https:&#x2F;&#x2F;jestjs.io&#x2F;pt-BR&#x2F;docs&#x2F;getting-started%20).###%20%20INPUTSO%20método%20`calcularValorDaCompra`%20recebe%20dois%20parâmetros,%20`formaDePagamento`%20e%20`itens`,%20sendo%20o%20primeiro%20uma%20string%20com%20os%20possíveis%20valores%20válidos:%20`debito`,%20`credito`%20e%20`dinheiro`.%20O%20segundo%20parâmetro%20contém%20uma%20array%20dos%20itens%20que%20serão%20comprados.%20Cada%20item%20é%20uma%20string%20contendo%20o%20código%20do%20item%20e%20a%20quantidade%20do%20mesmo%20separados%20por%20uma%20vírgula.EXEMPLO:```js[&#x27;cafe,1&#x27;,&#x27;chantily,1&#x27;]```###%20%20OUPUTSO%20retorno%20do%20método%20`calcularValorDaCompra`%20deve%20ser%20sempre%20uma%20string%20e%20conteúdo%20dela%20pode%20ser%20ou%20o%20valor%20total%20da%20compra%20ou%20uma%20mensagem%20de%20erro%20conforme%20as%20regras%20descritas%20anteriormente.%20O%20valor%20da%20compra%20deve%20ser%20formatado%20com%20`R"/>` e decimais separados por vírgula.
  
Para padronizar a quantidade de decimais, utilize o método `toFixed` do JavaScript. Esse método serve o propósito deste desafio, porém na vida real a regra de arredondamento deve ser conferida! Para saber mais consulte a [Documentação do Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed ).
EXEMPLO:
```js
// exemplo de saída do valor da compra
"R$ 6,00"
  
// exemplo de saída de erro
"Forma de pagamento inválida!"
```
  
###  EXEMPLOS
  
  
EXEMPLO 1: Compra de chantily sem café.
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['chantily,1']);
```
O resultado esperado deve ser:
```
"Item extra não pode ser pedido sem o principal"
```
  
<br/>
  
EXEMPLO 2: Compra de café com chantily.
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['cafe,1','chantily,1']);
```
O resultado esperado deve ser:
```
"R$ 4,50"
```
  
<br/>
  
EXEMPLO 3: Compra de combo e dois cafés
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('credito', ['combo1,1','cafe,2']);
```
O resultado esperado deve ser:
```
"R$ 15,96"
```
  
# Desafio-Voltz

O objetivo deste projeto é realizar o desafio de refatoração Gilded Rose Refactoring Kata. 
Você pode encontrar o código original junto com as regras de negócio neste link: https://github.com/emilybache/GildedRose-Refactoring-Kata


Notas pessoais

Realizar esta tarefa foi um grande desafio para mim. Ao analisar o código pela primeira vez percebi que a missão mais árdua seria resolver o 'nesting'
do método 'updateQuality()' da classe 'shop'. Para tal pesquisei diferentes estratégias de refatoração e o caminho que escolhi foi utilizar a orientação
ao objeto. Minha ideia foi usar o polimorfismo das classes em javaScript para armazenar a regra de negócio de cada produto em uma respectiva classe, o que tornaria mais fácil 
a manutenção e expansão do código. Executar essa ideia foi bem difícil pois eu nunca tinha feito até então nada parecido. 

Links de artigos que usei

https://refactoring.guru/design-patterns/strategy
https://dev.to/alexandreruban/lessons-from-the-gilded-rose-refactoring-kata-pgh
https://www.chaijs.com/api/bdd/

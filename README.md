# Desafio-Voltz

O objetivo deste projeto é realizar o desafio de refatoração Gilded Rose Refactoring Kata. 
Você pode encontrar o código original junto com as regras de negócio neste link: https://github.com/emilybache/GildedRose-Refactoring-Kata


Notas pessoais

Realizar esta tarefa foi um grande desafio para mim. Ao analisar o código pela primeira vez percebi que a missão mais árdua seria resolver o 'nesting'
do método 'updateQuality()' da classe 'shop'. Para tal pesquisei diferentes estratégias de refatoração e o caminho que escolhi foi ultizar a orientação
ao objeto. Minha ideia foi usar o polimorfismo das classes em javaScript para armazenar a regra de negócio de cada produto em uma respectiva classe, o que tornaria mais fácil 
a manutenção e expanção do código. Executar essa ideia foi bem difícil pois eu nunca tinha feito até então nada parecido. O desafio também inclui a implementação de testes unitários.
Entretanto, ainda não tenho conhecimentos sobre a aplicação desta ferramenta e me ative neste primeiro momento a apenas refatorar a lógica do projeto. Mas no futuro pretendo retornar 
a este projeto para aplicar os testes unitários. 

Links de artigos que usei

https://refactoring.guru/design-patterns/strategy
https://dev.to/alexandreruban/lessons-from-the-gilded-rose-refactoring-kata-pgh

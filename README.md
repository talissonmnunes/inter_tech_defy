# inter_tech_defy
Desafio técnico INTER

## Sobre

Projeto para validação técnica de conhecimento em automação de testes de api.

Projeto utiliza [JEST](https://jestjs.io/) e [Supertest](https://www.npmjs.com/package/supertest) para execução dos cenários de teste e validação.

Projeto utiliza o [jest-html-report](https://www.npmjs.com/package/jest-html-reporter) para geração de relatório de execução de testes.

## Inicialização do projeto

Para inicializar o projeto, basta realizar clonagem do projeto na maquina e em seguida executar o comando *npm install*, para instalar todas as dependëncias do projeto.

Após instalação inicial, para execução dos testes basta rodar o comando *npm test*.

## Mapeamento de Cenários e Casos de testes

### Cenário 01 - Retornar fato aleatório sobre gatos
*Caso de teste 01.01*
  - Retornar fato aleatório com sucesso.
    - Retorno de fato com sucesso ao executar endpoint devidamente.
> Teste executado com sucesso.

*Caso de teste 01.02*
  - Retornar um fato aleatório dentro do tamanho máximo informado.
    - Ao informar um valor máximo para o limite de tamanho do fato, deve ser retornado somente fatos que tenham o tamanho igual ou menor que o limite informado.
> Teste executado com sucesso.

*Caso de teste 01.03*
  - Retornar falha ao informar tamanho máximo negativo no campo de max_length.
    - Ao informar valor negativo para o limite de tamanho do fato, deve ser retornado erro informando que o tamanho do fato não pode ser menor que zero.
> Teste executado com falha devido a response code inválido para o teste.

*Caso de teste 01.04*
  - Retornar falha ao informar texto no parâmetro de tamanho máximo. 
    - Ao informar valor em texto para o limite de tamanho do fato, deve ser retornado erro informando que o tamanho do fato deve ser um número.
> Teste executado com falha devido a response code inválido para o teste.

*Caso de teste 01.05*
  - Retornar vazio ao informar zero no parâmetro de tamanho máximo.
    - Ao informar valor zero para o limite de tamanho do fato, deve ser retornado erro informando não foi possível encontrar um fato para o valor informado.
> Teste executado com falha devido a response code inválido para o teste.


### Cenário 02 - Retornar lista de fatos sobre gatos
*Caso de teste 02.01*
  - Retornar lista de fatos com sucesso.
    - Retorno de lista de fatos com sucesso ao executar endpoint devidamente.
> Teste executado com sucesso.

*Caso de teste 02.02*
  - Retornar lista de fato dentro do limite informado.
    - Ao informar um valor limite de listagem de fato, deve ser retornado somente a quantidade de fatos dentro do limite informado.
> Teste executado com sucesso.

*Caso de teste 02.03*
  - Retornar lista de fato dentro do tamanho máximo informado.
    - Ao informar um valor de tamanho máximo do fato, deve ser retornado somente fatos com o tamanho máximo dentro do tamanho informado.
> Teste executado com sucesso.

*Caso de teste 02.04*
  - Retornar lista de fato dentro do limite e do tamanho máximo informado.
    - Ao informar um valor de tamanho máximo do fato e um limite de listagem de fato, deve ser retornado somente fatos com o tamanho máximo dentro do tamanho informado e limitado à quantidade limite de lisgatem.
> Teste executado com sucesso.

*Caso de teste 02.05*
  - Retornar falha ao informar tamanho máximo negativo no campo de max_length.
    - Ao informar valor negativo para o limite de tamanho do fato, deve ser retornado erro informando que o tamanho do fato não pode ser menor que zero.
> Teste executado com falha devido a response code inválido para o teste.

*Caso de teste 02.06*
  - Retornar falha ao informar limite de listagem negativo no campo de limit.
    - Ao informar valor negativo para o limite de tamanho do fato, deve ser retornado erro informando que o limite de listagem não pode ser menor que zero.
> Teste executado com falha devido a response code inválido para o teste.

*Caso de teste 02.07*
  - Retornar falha ao informar texto no parâmetro de tamanho máximo. 
    - Ao informar valor em texto para o limite de tamanho do fato, deve ser retornado erro informando que o tamanho do fato deve ser um número.
> Teste executado com falha devido a response code inválido para o teste.

*Caso de teste 02.08*
  - Retornar falha ao informar texto no parâmetro de limite de listagem. 
    - Ao informar valor em texto para o limite listagem de fatos, deve ser retornado erro informando que o limite de listagem deve ser um número.
> Teste executado com falha devido a response code inválido para o teste.

*Caso de teste 02.09*
  - Retornar vazio ao informar zero no parâmetro de tamanho máximo.
    - Ao informar valor zero para o limite de tamanho do fato, deve ser retornado erro informando não foi possível encontrar um fato para o valor informado.
> Teste executado com falha devido a response code inválido para o teste.

*Caso de teste 02.10*
  - Retornar vazio ao informar zero no parâmetro de limite de listagem.
    - Ao informar valor zero para o limite de listagem de fatos, deve ser retornado erro informando não foi possível encontrar um fato para o valor informado.
> Teste executado com falha devido a response code inválido para o teste.
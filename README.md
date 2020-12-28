# TestAngular

A Avivatec foi contratada pelos Guardiões do Universo para criar um sistema de gestão das tropas dos lanternas verdes e seus setores. É de conhecimento comum que o universo foi dividido em 3600 setores e estes divididos entre todos os lanternas verdes. O sistema deve ter permitir o cadastro de um lanterna (nome, idade e planeta natal) e vincula-lo a um ou mais setores.

Tela 1 - Grid com todos os lanternas verdes (com paginação) e seu respectivo setor;
Tela 2 - Ao clica em um card do grid, o sistema deve exibir o formulário com o nome, idade, planeta natal e setor a qual ele é responsável. Também será possível salvar as alterações;
Tela 3 - Essa tela é extra e opcional, na tela 1 adicionar botão "cadastrar lanterna" ao clica-lo deve abrir a tela 2 sem nenhum campo preenchido. Essa tela deve permitir o cadastro de um lanterna novo.


TIPS: 

- O uso de foto para identificação de um lanterna, seu setor e planeta são opcionais
- Use reactforms
- Use Sass
- Use Angular material

# Minhas declarações sobre o teste

- Foi utilizado a lib material para o angular,
- Feito mobile first e também utilizado (BEM) para as escritas css e sass.
- O projeto está com tslint e prettier.  
- Tratameto de perfomance com infinite scroll no select para definição dos setores.
- Estratégia de tratamento de erro, através de instanciar um modelo base e injetar suas ações e comunicação com o usuário.

# Melhorias

- Em alguns locais houve um pouco de repetição daria para melhorar e criar uma extensão mudando as extensões, acho que no css foi um pouco mais comum, na parte de outras definições como variaveis de cor e tipografia.
- RxJs / Observable na parte de exibir a pre-visualização de edição ou criação, porém não havia uma necessidade maior, por se tratar de uma caso mais simples.

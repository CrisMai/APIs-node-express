
------------ Node.js com Express ---------

Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google 
e que permite a execução de códigos JavaScript fora de um navegador web.
Neste projeto foi utilizado o Node.js em conjunto com o framework Express, um dos mais usados
para desenvolvimento de APIs.

Abaixo a descrição de alguns tópicos importantes para conhecimento e leitura:

HTTP: é um protocolo que define as regras de comunicação entre cliente e servidor na internet.

REST: Representational State Transfer, que significa Transferência Representacional de Estado => é um modelo 
de arquitetura que fornece diretrizes para que os sistemas distribuídos se comuniquem diretamente 
usando os princípios e protocolos existentes da Web sem a necessidade de SOAP ou outro protocolo sofisticado.
Esta arquitetura usa várias representações de recursos para representar seu tipo, como XML, JSON, Texto, 
Imagens e assim por diante.

Métodos HTTP: Em aplicação REST, os métodos mais utilizados são:

O método GET é o método mais comum, geralmente é usado para solicitar que um servidor envie um recurso;
O método POST foi projetado para enviar dados de entrada para o servidor. Na prática, é frequentemente usado 
para suportar formulários HTML;
O método PUT edita e atualiza documentos em um servidor;
O método DELETE que como o próprio nome já diz, deleta certo dado ou coleção do servidor.


Códigos de Respostas: Cada resposta que a aplicação REST retorna, é enviado um código 
definindo o status da requisição. Por exemplo:

200 (OK), requisição atendida com sucesso;
201 (CREATED), objeto ou recurso criado com sucesso;
204 (NO CONTENT), objeto ou recurso deletado com sucesso;
400 (BAD REQUEST), ocorreu algum erro na requisição (podem existir inumeras causas);
404 (NOT FOUND), rota ou coleção não encontrada;
500 (INTERNAL SERVER ERROR), ocorreu algum erro no servidor.


Banco de Dados MongoDB: O MongoDB é um banco de dados orientado a documentos, isso significa 
que seus dados são armazenados dentro de documentos semelhantes a JSON, na prática usamos 
uma versão binária chamado BSON(Binary Json). O MongoDB suporta uma variada lista de tipos de dados 
para os documentos no formato binário BSON, vejamos alguns exemplos:

String: É o tipo que contém uma sequência de texto;
Integer (32 bit e 64-bit): É o tipo para armazenar um valor numérico;
Boolean: Usamos para armazenar valores True ou False;
Double: Usamos para armazenar valores de ponto flutuantes;
Min/Max Keys: É o tipo usado para comparar um valor contra o menor e maior elementos do BSON mais elevados respectivamente;
Array: É usado para armazenar matrizes ou lista de valores múltiplos em uma única chave;
TimeStamp: Este tipo é utilizado quando armazenamos uma data e hora;
Object: Usamos para armazenar documentos incorporados;
Null: É tipo para valores nulos;
Symbol: É o tipo para valor string, que utiliza algum caractere ou símbolo especial, geralmente de outros idiomas;
Date: Usamos para armazenar a data ou a hora atual;
ObjectID: É o tipo que armazena o identificador do documento (ID);
Binary Data: Usamos para armazenar um conjunto de dados binários;
Regular Expression: Utilizado para expressões regulares, representadas por caracteres específicos previsto em ordem alfabética;
Code: Utilizado para armazenar códigos em JavaScript dentro do documento.


Mongoose: Mongoose é uma biblioteca do Node.js que fornece uma solução baseada em esquemas para modelagem de dados 
em bancos de dados NoSQL, especificamente o MongoDB. Ele permite definir esquemas de dados, criar modelos 
e executar operações de banco de dados, como inserção, busca, atualização e remoção de dados. 
Com o Mongoose, é possível estabelecer relações entre os dados e definir validações para garantir 
a integridade dos dados.


.Dotenv: É um pacote que serve para gerenciar as variáveis de ambiente dentro de um projeto Node.js. 
Essa ferramenta armazena a configuração dessas variáveis em um ambiente separado do código da aplicação.


ESLint: Ajuda a manter a padronização de formatação de arquivos. Além disso, a extensão 
ESLint alerta sobre erros de código que normalmente não seriam alertados, auxiliando nosso desenvolvimento.


Middleware: É um termo técnico utilizado para essas funções especiais que passamos para esse método do app.use.
Os middlewares são funções que, basicamente, interceptam alguma ação; mais especificamente, interceptam 
alguma requisição feita para a nossa API. A palavra "middle" significa "meio" em inglês. 
É como se essa função entrasse no meio de uma ação e a interceptasse de alguma forma. 
Middleware de manipulador de erros é caracterizado por receber quatro parâmetros q
ue chamamos de: erro, req, res e next.


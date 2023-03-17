HTTP: é um protocolo que define as regras de comunicação entre cliente e servidor na internet.

REST: Representational State Transfer, que significa Transferência Representacional de Estado => é um modelo 
de arquitetura que fornece diretrizes para que os sistemas distribuídos se comuniquem diretamente 
usando os princípios e protocolos existentes da Web sem a necessidade de SOAP ou outro protocolo sofisticado.
Esta arquitetura usa várias representações de recursos para representar seu tipo, como XML, JSON, Texto, 
Imagens e assim por diante.

Métodos HTTP
Em aplicação REST, os métodos mais utilizados são:

O método GET é o método mais comum, geralmente é usado para solicitar que um servidor envie um recurso;
O método POST foi projetado para enviar dados de entrada para o servidor. Na prática, é frequentemente usado 
para suportar formulários HTML;
O método PUT edita e atualiza documentos em um servidor;
O método DELETE que como o próprio nome já diz, deleta certo dado ou coleção do servidor.


Códigos de Respostas
Cada resposta que a aplicação REST retorna, é enviado um código definindo o status da requisição. 
Por exemplo:

200 (OK), requisição atendida com sucesso;
201 (CREATED), objeto ou recurso criado com sucesso;
204 (NO CONTENT), objeto ou recurso deletado com sucesso;
400 (BAD REQUEST), ocorreu algum erro na requisição (podem existir inumeras causas);
404 (NOT FOUND), rota ou coleção não encontrada;
500 (INTERNAL SERVER ERROR), ocorreu algum erro no servidor.


Banco de Dados MongoDB

O MongoDB é um banco de dados orientado a documentos, isso significa que seus dados 
são armazenados dentro de documentos semelhantes a JSON, na prática usamos uma versão 
binária chamado BSON(Binary Json). O MongoDB suporta uma variada lista de tipos de dados 
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




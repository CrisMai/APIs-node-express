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



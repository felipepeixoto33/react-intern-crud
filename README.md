# Iniciando o App

1) Realize o download do projeto e o coloque em alguma pasta em um diretório de sua escolha.
2) Certifique-se que você possui o Node.js devidamente instalado em seu PC.
3) Abra o terminal (Linux/MACOS) ou cmd (Windows) dentro do diretório em que foi instalado o projeto.
4) Utilize o comando 'npm install' no terminal ou cmd para instalar os módulos necessários para o funcionamento do projeto.
5) Após a instalação dos módulos estar concluída, utilize o comando 'npm start' para iniciar o projeto.
6) Normalmente, seu navegador abrirá uma página automaticamente com o projeto. Caso isso não tenha acontecido, acesse o link: http://localhost:3000

# Maiores Dificuldades

1) **Converter os códigos existentes ao template Typescript:** Os eventos, que eram originados dos componentes do Material-UI, utilizados nas funções para aplicar as devidas modificações precisavam ser tipados e, em alguns casos, foi difícil determinar qual o tipo específico de evento vindo destes componentes, e, pelo fato de, com o typescript, o projeto não poder ser inicializado sem que todos elementos estejam devidamente tipados, isso me levou a não utilizá-lo no projeto.
2) **Implementar o Redux com o React:** Foi difícil realizar a passagem de dados com a utilização do Redux entre os componentes do React, o que o fez ser utlizado apenas para trocar o conteúdo presente na tela, como abrir o dialog para a inserção de novas tarefas.
3) **Responsividade das Páginas:** Essa dificuldade tem relação com a adaptabilidade das páginas do App às diferentes resoluções, os componentes ficam se comportando de forma estranha quando determinadas resoluções eram impostas às páginas.

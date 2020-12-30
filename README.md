# MotDuJour

_Uma nova palavra em francês aleatória por dia_

![Version](https://img.shields.io/badge/version-pre--alpha-red)



Obtenha uma palavra nova em francês todos os dias sem distrações e direto ao ponto.


A aplicação é totalmente desenvolvida em _Javascript_ rodando diretamente no seu navegador. E está disponível livremente através do GitHub Pages, neste link: https://thethales.github.io/MotDuJour/


# Como funciona

As palavras são obtidas por meio do [Wiktionary](https://fr.wiktionary.org/wiki/Wiktionnaire:Page_d%E2%80%99accueil) versão francesa, através de sua [API](https://en.wiktionary.org/w/api.php).
Após uma chamada ao recurso de palavras randomicas, uma segunda chamada é realizada para obter a definição do termo.

Atualmente, por limitações da API e forma como os _Wikicionários_ operam, palavras de qualquer idioma podem ser retornadas. Isso se dá, pois o Wikicionário é multilinguístico[¹](https://en.wikipedia.org/wiki/Wiktionary) e objetiva incluir todos os termos possíveis em qualquer uma de suas versões.

Para contornar essa caracteristica a definição do termo é verificada de modo a validar se contém o marcador da lingua francesa, caso contrário uma nova palavra é gerada. Esse comportamento causa um efeito visual interessante de mudança contínua das palavras em tela, que foi mantido por questões visuais.

![Efeito Sequencial](docs/img/word-sequence.gif)




### Esclarecimentos

Todo o conteúdo exibido é de uso livre, tendo sido criado por usuários da Wikimedia, portanto, _não há garantias do conteúdo exposto_. Consulte os termos de uso da Wikimedia Foundation (disponível [aqui](https://foundation.wikimedia.org/wiki/Terms_of_Use/en) em inglês para quaisquer dúvidas sobre uso e licença de contúdo) 


# Dependências

- [jscreole](https://github.com/scottt/jscreole) - Uma biblioteca simples de transcrição da linguagem de marcação [Creole](http://www.wikicreole.org/) em HTML
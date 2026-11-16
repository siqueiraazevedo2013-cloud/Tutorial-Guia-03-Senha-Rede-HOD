# Manual do Sistema / Procedimento — Delog

Este repositório contém a documentação técnica e o manual operacional elaborados para publicação via **MkDocs** (tema *Read the Docs*).

## Estrutura do Projeto

* `.readthedocs.yaml`: Configurações de build e ambiente no Read the Docs.
* `mkdocs.yml`: Arquivo principal de configuração, navegação (`nav`), extensões Markdown e scripts.
* `docs/`: Diretório raiz do conteúdo publicado:
  * `index.md`: Página inicial e apresentação do manual.
  * `01-...md`: Capítulos sequenciais do procedimento.
  * `manual-completo.md`: Versão unificada otimizada para impressão/PDF.
  * `css/`: Folhas de estilo personalizadas (`extra.css`).
  * `js/`: Scripts de interatividade e acessibilidade (`custom.js` e `font-size.js`).

## Publicação

As atualizações enviadas para a branch principal (`main`) são compiladas e publicadas automaticamente pelo Read the Docs.

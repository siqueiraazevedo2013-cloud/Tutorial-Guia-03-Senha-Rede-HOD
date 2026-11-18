<div class="toolbar-acessibilidade">
  <span class="toolbar-label">Tamanho do texto:</span>
  <button class="btn-acessibilidade" onclick="alterarFonte('diminuir')" title="Diminuir fonte">A-</button>
  <button class="btn-acessibilidade" onclick="alterarFonte('resetar')" title="Tamanho padrão">A</button>
  <button class="btn-acessibilidade" onclick="alterarFonte('aumentar')" title="Aumentar fonte">A+</button>
  <button class="btn-acessibilidade btn-imprimir" onclick="window.print()" title="Imprimir ou baixar esta página">🖨️ Imprimir ou baixar esta página</button>
</div>

# GUIA 03 — SENHA-REDE E HOD (TELA PRETA)

**Encontre sua situação. Veja a orientação. Faça a ação indicada.**

<div class="bloco-publico-alvo" markdown="1">
<span class="titulo-publico">PÚBLICO-ALVO:</span>

* Cadastradores Gerais, Parciais e Locais
* Responsáveis institucionais pela gestão de acessos
* Equipe da Central de Atendimento
</div>

### Finalidade e Contexto

O **Senha-Rede** integra o controle de acesso às aplicações disponibilizadas pela Rede Serpro. O **HOD** (*Host On Demand*) permite acessar os sistemas conhecidos como “tela-preta” pelo navegador, sendo esse acesso controlado pelo Senha-Rede.

Esta cartilha explica os procedimentos mais comuns para cadastrar usuários e cuidar dos acessos com segurança. A gestão adequada de cadastros e habilitações contribui para a segurança dos acessos, o registro de quem fez cada operação e a continuidade dos serviços.

### Responsabilidades Essenciais

* **Usuário:** manter seus dados de acesso em segredo e informar problemas ao cadastrador responsável.
* **Chefia ou unidade autorizadora:** registrar o pedido de acesso e indicar os perfis necessários às atividades do usuário.
* **Cadastrador:** cadastrar usuários, liberar, atualizar e retirar acessos apenas nos sistemas e nas unidades pelos quais está autorizado a atuar.
* **Central de Atendimento:** atuar em problemas do sistema ou casos que não foram resolvidos. Os procedimentos de cadastro e acesso continuam sob responsabilidade do cadastrador.

### Como Usar Esta Cartilha

Encontre na tabela abaixo o pedido que você recebeu, confira a primeira ação indicada e vá diretamente para a seção correspondente. Esta cartilha trata das situações mais recorrentes de cadastro, habilitação e manutenção de acessos no Senha-Rede e no HOD.

!!! warning "Regra de Ouro"
    **Atenção:** Nunca solicite a senha atual do usuário e nunca registre credenciais em chamado, e-mail, ata ou captura de tela.

---

## Sumário de Navegação

### Entenda em um Minuto: Cadastro e Habilitação são Coisas Diferentes

Cadastrar uma pessoa e liberar seu acesso a um sistema são etapas distintas. Primeiro a pessoa é cadastrada no **Senha-Rede**; depois é habilitada no sistema (por exemplo, o **SIASG**), com os perfis, a UASG e o nível autorizados.

**Fluxo operacional:**  
<div class="fluxograma-etapas">
  <div class="fluxo-card">
    <strong>1. Autorização</strong>
    <span>Confirme a competência</span>
  </div>
  <div class="fluxo-seta">➔</div>
  <div class="fluxo-card">
    <strong>2. Cadastro</strong>
    <span>Senha-Rede (INCUSU)</span>
  </div>
  <div class="fluxo-seta">➔</div>
  <div class="fluxo-card">
    <strong>3. Habilitação</strong>
    <span>SIASG (HABUSUSIS)</span>
  </div>
  <div class="fluxo-seta">➔</div>
  <div class="fluxo-card">
    <strong>4. Primeiro acesso</strong>
    <span>Troca da senha provisória</span>
  </div>
</div>


!!! note "Nota"
    **Nota:** Usuário cadastrado, mas sem habilitação no SIASG, não vê o sistema no menu. Nesse caso, não faça nova inclusão: falta apenas habilitar.

### Encontre a Demanda Recebida

| Nº | Demanda Recebida | Primeira Ação | Onde Consultar |
| :---: | :--- | :--- | :--- |
| **01** | O usuário já possui acesso a outro sistema | Verifique a habilitação. | [Capítulo 1 — Seção 1](01-cadastro-e-habilitacao.md#1-o-cadastro-ja-existe) |
| **02** | O usuário ainda não está cadastrado | Inclua no Senha-Rede. | [Capítulo 1 — Seção 2](01-cadastro-e-habilitacao.md#2-o-usuario-ainda-nao-esta-cadastrado) |
| **03** | O usuário não consegue acessar o SIASG | Confira sistema, perfil, UASG e nível. | [Capítulo 1 — Seção 3](01-cadastro-e-habilitacao.md#3-o-usuario-esta-cadastrado-mas-nao-acessa-o-siasg) |
| **04** | A mensagem informa habilitação revogada | Troque a senha. | [Capítulo 2 — Seção 4](02-senhas-e-desbloqueios.md#4-a-habilitacao-esta-revogada) |
| **05** | O usuário esqueceu a senha | Gere senha provisória. | [Capítulo 2 — Seção 5](02-senhas-e-desbloqueios.md#5-o-usuario-esqueceu-a-senha) |
| **06** | A mensagem informa usuário inativo | Reative o cadastro. | [Capítulo 2 — Seção 6](02-senhas-e-desbloqueios.md#6-o-usuario-esta-inativo) |
| **07** | A mensagem informa usuário bloqueado | Libere o bloqueio. | [Capítulo 2 — Seção 7](02-senhas-e-desbloqueios.md#7-o-usuario-esta-bloqueado) |
| **08** | A mensagem informa usuário em uso ou contexto preso | Libere a sessão. | [Capítulo 2 — Seção 8](02-senhas-e-desbloqueios.md#8-o-usuario-nao-consegue-entrar-porque-a-sessao-anterior-continua-aberta) |
| **09** | É necessário alterar perfil, UASG ou nível | Atualize a habilitação. | [Capítulo 3 — Seção 9](03-alteracoes-exclusoes-e-cadastradores.md#9-preciso-alterar-perfil-uasg-ou-nivel) |
| **10** | É necessário retirar o acesso ao SIASG | Exclua apenas do sistema. | [Capítulo 3 — Seção 10](03-alteracoes-exclusoes-e-cadastradores.md#10-preciso-retirar-o-acesso-ao-siasg) |
| **11** | É necessário excluir o cadastro da Senha-Rede | Avalie o impacto antes da exclusão física. | [Capítulo 3 — Seção 11](03-alteracoes-exclusoes-e-cadastradores.md#11-preciso-excluir-o-usuario-da-senha-rede) |
| **12** | É necessário habilitar outro cadastrador | Confirme nível e escopo antes da habilitação. | [Capítulo 3 — Seção 12](03-alteracoes-exclusoes-e-cadastradores.md#12-preciso-habilitar-outro-cadastrador) |

### Tabela de Decisão: Mensagem, Causa e Rotina

| Mensagem do Sistema | Causa | Rotina | Não Confundir Com |
| :--- | :--- | :--- | :--- |
| **Habilitação revogada** | Acesso revogado | `TROCSEN` (troca de senha) | Nova inclusão |
| **Usuário inativo** | Mais de 45 dias sem efetuar a troca da senha | `INRUSU` (reativação) | Bloqueio ou revogação |
| **Usuário bloqueado** | Tentativas consecutivas com senha incorreta | `LIBUSUBLOQ` (liberação) | Inativação. Se a senha foi esquecida, use `TROCSEN` |
| **Usuário em uso / contexto preso** | Sessão anterior não encerrada | `LIBUSUCON` (liberação de contexto) | Bloqueio por senha |

### Onde Fica Cada Rotina

Mapa esquemático das rotinas citadas nesta cartilha dentro do módulo **`ADMUSU · Administra Usuário (Senha-Rede)`**:

| `ATZUSU` · Atualiza Usuário | `HABUSU` · Habilita Usuário | `HABCAD` · Habilita Cadastrador |
| :--- | :--- | :--- |
| **• `INCUSU`**: incluir usuário<br>**• `TROCSEN`**: trocar senha (gera provisória)<br>**• `INRUSU`**: reativar usuário inativo<br>**• `LIBUSUBLOQ`**: liberar usuário bloqueado<br>**• `LIBUSUCON`**: liberar contexto (sessão)<br>**• `EXCUSU`**: excluir usuário (exclusão física) | **• `HABUSUSIS`**: habilitar em sistema (SIASG)<br>**• `EXCUSUSIS`**: excluir habilitação em sistema<br>**• `IALPAHUSU`**: alterar UASG ou nível, quando aplicável | **• `HABCAD`**: habilitar outro cadastrador, no nível e no escopo autorizados |

!!! tip "Dica"
    **Dica:** Em tela, a rotina é acessada seguindo o caminho hierárquico indicado em cada seção (por exemplo: `ADMUSU > ATZUSU > TROCSEN`).

<div class="toolbar-rodape">
  <button class="btn-acessibilidade btn-imprimir" onclick="window.print()" title="Imprimir ou baixar esta página">🖨️ Imprimir ou baixar esta página</button>
</div>

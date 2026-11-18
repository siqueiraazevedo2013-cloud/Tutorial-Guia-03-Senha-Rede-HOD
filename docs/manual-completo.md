<div class="toolbar-acessibilidade">
  <div>
    <button class="btn-acessibilidade" onclick="alterarFonte('diminuir')" title="Diminuir fonte">A-</button>
    <button class="btn-acessibilidade" onclick="alterarFonte('resetar')" title="Tamanho padrão">A</button>
    <button class="btn-acessibilidade" onclick="alterarFonte('aumentar')" title="Aumentar fonte">A+</button>
  </div>
  <div>
    <button class="btn-acessibilidade btn-imprimir" onclick="window.print()" title="Imprimir ou Salvar PDF">🖨️ Imprimir / PDF</button>
  </div>
</div>

# Guia 03 — Senha-Rede e HOD (Tela Preta)

**Gestão de acessos para cadastradores**  
*Cadastro • Habilitação • Senhas • Perfis • Exclusões*

> **Encontre sua situação. Veja a orientação. Faça a ação indicada.**

---

## Público

Cadastradores Gerais, Parciais e Locais, responsáveis institucionais pela gestão de acessos e equipe da Central de Atendimento.

## Finalidade e Contexto

O **Senha-Rede** integra o controle de acesso às aplicações disponibilizadas pela Rede Serpro. O **HOD** (*Host On Demand*) permite acessar os sistemas conhecidos como “tela-preta” pelo navegador, sendo esse acesso controlado pelo Senha-Rede.

Esta cartilha explica os procedimentos mais comuns para cadastrar usuários e cuidar dos acessos com segurança. A gestão adequada de cadastros e habilitações contribui para a segurança dos acessos, o registro de quem fez cada operação e a continuidade dos serviços.

## Responsabilidades Essenciais

* **Usuário:** manter seus dados de acesso em segredo e informar problemas ao cadastrador responsável.
* **Chefia ou unidade autorizadora:** registrar o pedido de acesso e indicar os perfis necessários às atividades do usuário.
* **Cadastrador:** cadastrar usuários, liberar, atualizar e retirar acessos apenas nos sistemas e nas unidades pelos quais está autorizado a atuar.
* **Central de Atendimento:** atuar em problemas do sistema ou casos que não foram resolvidos. Os procedimentos de cadastro e acesso continuam sob responsabilidade do cadastrador.

## Como Usar Esta Cartilha

Encontre na tabela abaixo o pedido que você recebeu, confira a primeira ação indicada e vá diretamente para a seção correspondente. Esta cartilha trata das situações mais recorrentes de cadastro, habilitação e manutenção de acessos no Senha-Rede e no HOD.

!!! warning "Regra de Ouro"
    **Atenção:** Nunca solicite a senha atual do usuário e nunca registre credenciais em chamado, e-mail, ata ou captura de tela.

---

## Entenda em um Minuto: Cadastro e Habilitação são Coisas Diferentes

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

---

## Encontre a Demanda Recebida

| Nº | Demanda Recebida | Primeira Ação | Onde Consultar |
| :---: | :--- | :--- | :--- |
| **01** | O usuário já possui acesso a outro sistema | Verifique a habilitação. | [Seção 1 — O cadastro já existe](#1-o-cadastro-ja-existe) |
| **02** | O usuário ainda não está cadastrado | Inclua no Senha-Rede. | [Seção 2 — O usuário ainda não está cadastrado](#2-o-usuario-ainda-nao-esta-cadastrado) |
| **03** | O usuário não consegue acessar o SIASG | Confira sistema, perfil, UASG e nível. | [Seção 3 — O usuário está cadastrado, mas não acessa o SIASG](#3-o-usuario-esta-cadastrado-mas-nao-acessa-o-siasg) |
| **04** | A mensagem informa habilitação revogada | Troque a senha. | [Seção 4 — A habilitação está revogada](#4-a-habilitacao-esta-revogada) |
| **05** | O usuário esqueceu a senha | Gere senha provisória. | [Seção 5 — O usuário esqueceu a senha](#5-o-usuario-esqueceu-a-senha) |
| **06** | A mensagem informa usuário inativo | Reative o cadastro. | [Seção 6 — O usuário está inativo](#6-o-usuario-esta-inativo) |
| **07** | A mensagem informa usuário bloqueado | Libere o bloqueio. | [Seção 7 — O usuário está bloqueado](#7-o-usuario-esta-bloqueado) |
| **08** | A mensagem informa usuário em uso ou contexto preso | Libere a sessão. | [Seção 8 — Sessão anterior continua aberta](#8-o-usuario-nao-consegue-entrar-porque-a-sessao-anterior-continua-aberta) |
| **09** | É necessário alterar perfil, UASG ou nível | Atualize a habilitação. | [Seção 9 — Preciso alterar perfil, UASG ou nível](#9-preciso-alterar-perfil-uasg-ou-nivel) |
| **10** | É necessário retirar o acesso ao SIASG | Exclua apenas do sistema. | [Seção 10 — Preciso retirar o acesso ao SIASG](#10-preciso-retirar-o-acesso-ao-siasg) |
| **11** | É necessário excluir o cadastro da Senha-Rede | Avalie o impacto antes da exclusão física. | [Seção 11 — Preciso excluir o usuário da Senha-Rede](#11-preciso-excluir-o-usuario-da-senha-rede) |
| **12** | É necessário habilitar outro cadastrador | Confirme nível e escopo antes da habilitação. | [Seção 12 — Preciso habilitar outro cadastrador](#12-preciso-habilitar-outro-cadastrador) |

---

## Tabela de Decisão: Mensagem, Causa e Rotina

| Mensagem do Sistema | Causa | Rotina | Não Confundir Com |
| :--- | :--- | :--- | :--- |
| **Habilitação revogada** | Acesso revogado | `TROCSEN` (troca de senha) | Nova inclusão |
| **Usuário inativo** | Mais de 45 dias sem efetuar a troca da senha | `INRUSU` (reativação) | Bloqueio ou revogação |
| **Usuário bloqueado** | Tentativas consecutivas com senha incorreta | `LIBUSUBLOQ` (liberação) | Inativação. Se a senha foi esquecida, use `TROCSEN` |
| **Usuário em uso / contexto preso** | Sessão anterior não encerrada | `LIBUSUCON` (liberação de contexto) | Bloqueio por senha |

---

## Onde Fica Cada Rotina

Mapa esquemático das rotinas citadas nesta cartilha dentro do módulo **`ADMUSU · Administra Usuário (Senha-Rede)`**:

| `ATZUSU` · Atualiza Usuário | `HABUSU` · Habilita Usuário | `HABCAD` · Habilita Cadastrador |
| :--- | :--- | :--- |
| **• `INCUSU`**: incluir usuário<br>**• `TROCSEN`**: trocar senha (gera provisória)<br>**• `INRUSU`**: reativar usuário inativo<br>**• `LIBUSUBLOQ`**: liberar usuário bloqueado<br>**• `LIBUSUCON`**: liberar contexto (sessão)<br>**• `EXCUSU`**: excluir usuário (exclusão física) | **• `HABUSUSIS`**: habilitar em sistema (SIASG)<br>**• `EXCUSUSIS`**: excluir habilitação em sistema<br>**• `IALPAHUSU`**: alterar UASG ou nível, quando aplicável | **• `HABCAD`**: habilitar outro cadastrador, no nível e no escopo autorizados |

!!! tip "Dica"
    **Dica:** Em tela, a rotina é acessada seguindo o caminho hierárquico indicado em cada seção (por exemplo: `ADMUSU > ATZUSU > TROCSEN`).

---

# Capítulo 1 — Cadastro e Habilitação Inicial

Este capítulo reúne os procedimentos iniciais para verificar se um usuário já possui registro no **Senha-Rede**, realizar uma nova inclusão ou liberar o acesso específico ao **SIASG**.

## 1. O cadastro já existe

> **Assuntos relacionados:** [O usuário não consegue acessar o SIASG](#3-o-usuario-esta-cadastrado-mas-nao-acessa-o-siasg)

!!! tip "Resposta Rápida"
    **Dica:** Confira se falta liberar o acesso ao SIASG. Se o usuário já está cadastrado, não o cadastre novamente.

### Passo a passo

1. **Consulte o CPF:** Pesquise o usuário pelo CPF no Senha-Rede.
2. **Confira os sistemas vinculados:** Veja em quais sistemas o usuário já está habilitado.
3. **Siga para a habilitação:** Se o SIASG não estiver habilitado, vá para a rotina de habilitação ([Seção 3](#3-o-usuario-esta-cadastrado-mas-nao-acessa-o-siasg)).

!!! warning "Não Faça"
    **Atenção:** Não faça uma nova inclusão para quem já está cadastrado.

!!! note "Resultado Esperado"
    **Nota:** Cadastro encontrado e próxima etapa de habilitação iniciada.

## 2. O usuário ainda não está cadastrado

> **Assuntos relacionados:** [O usuário não consegue acessar o SIASG](#3-o-usuario-esta-cadastrado-mas-nao-acessa-o-siasg)

!!! tip "Resposta Rápida"
    **Dica:** Antes de cadastrar o usuário, confirme se o pedido foi autorizado e se você pode realizar esse cadastro.

### Passo a passo

1. **Acesse a rotina:** Navegue até `ADMUSU > ATZUSU > INCUSU`.
2. **Preencha os dados autorizados:** Preencha apenas os dados informados no pedido formal.
3. **Revise e confirme:** Confira todos os dados antes de concluir.
4. **Oriente a troca da senha provisória:** A senha provisória deve ser alterada pelo usuário no primeiro acesso.

!!! warning "Não Faça"
    **Atenção:** Não inclua o usuário sem confirmar a autorização formal e a sua competência como cadastrador.

!!! note "Resultado Esperado"
    **Nota:** Usuário cadastrado no Senha-Rede e pronto para receber acesso aos sistemas autorizados.

## 3. O usuário está cadastrado, mas não acessa o SIASG

> **Assuntos relacionados:** [O usuário já possui acesso a outro sistema](#1-o-cadastro-ja-existe) | [É necessário alterar perfil, UASG ou nível](#9-preciso-alterar-perfil-uasg-ou-nivel)

!!! tip "Resposta Rápida"
    **Dica:** Cadastro e habilitação são etapas diferentes. Confira o sistema, os perfis, a UASG, a base e o nível de acesso.

### Passo a passo

1. **Acesse a rotina:** Navegue até `ADMUSU > HABUSU > HABUSUSIS`.
2. **Informe sistema, CPF e base:** Selecione `SIASG` e informe o CPF do usuário e a base correspondente.
3. **Selecione os perfis autorizados:** Marque apenas os perfis indicados no pedido autorizado.
4. **Inclua UASG e nível:** Quando aplicável, informe a UASG e o nível de acesso.

!!! warning "Não Faça"
    **Atenção:** Não selecione perfis além dos autorizados. Antes de copiar os dados de acesso de outro usuário, confira se eles correspondem ao pedido autorizado.

!!! note "Resultado Esperado"
    **Nota:** SIASG disponível no menu conforme os perfis e parâmetros autorizados.

---

# Capítulo 2 — Senhas, Inatividade e Desbloqueios

Este capítulo apresenta os procedimentos corretos para tratar falhas de autenticação, revogação, inatividade por tempo sem troca de senha, bloqueios por tentativas inválidas e liberação de sessões presas no **Senha-Rede**.

## 4. A habilitação está revogada

> **Assuntos relacionados:** [O usuário esqueceu a senha](#5-o-usuario-esqueceu-a-senha)

!!! tip "Resposta Rápida"
    **Dica:** Use a troca de senha. Não faça nova inclusão.

### Passo a passo

1. **Acesse a rotina:** Navegue até `ADMUSU > ATZUSU > TROCSEN`.
2. **Gere a senha provisória:** Confirme a operação no sistema.
3. **Oriente a criação de nova senha:** No próximo acesso, o usuário deve trocar a senha provisória por uma senha pessoal.

!!! warning "Não Faça"
    **Atenção:** Não faça nova inclusão do usuário.

!!! note "Resultado Esperado"
    **Nota:** Acesso liberado novamente após a criação da nova senha.

## 5. O usuário esqueceu a senha

> **Assuntos relacionados:** [A mensagem informa habilitação revogada](#4-a-habilitacao-esta-revogada) | [A mensagem informa usuário bloqueado](#7-o-usuario-esta-bloqueado)

!!! tip "Resposta Rápida"
    **Dica:** Confirme se você é responsável por esse cadastro. Depois, gere uma senha provisória.

### Passo a passo

1. **Acesse a rotina:** Navegue até `ADMUSU > ATZUSU > TROCSEN`.
2. **Gere a senha provisória:** Nunca peça a senha anterior.
3. **Envie pelo canal definido pelo órgão:** Não registre a senha em chamado, e-mail ou ata.
4. **Oriente a alteração imediata:** Peça ao usuário que troque a senha no primeiro acesso.

!!! warning "Não Faça"
    **Atenção:** Não solicite a senha anterior e não transmita a senha provisória por canal não institucional.

!!! note "Resultado Esperado"
    **Nota:** Senha provisória gerada e substituída por senha pessoal no próximo acesso.

## 6. O usuário está inativo

> **Assuntos relacionados:** [A mensagem informa usuário bloqueado](#7-o-usuario-esta-bloqueado)

!!! tip "Resposta Rápida"
    **Dica:** Reative o usuário. O cadastro fica inativo quando o usuário passa mais de 45 dias sem trocar a senha.

### Passo a passo

1. **Acesse a rotina:** Navegue até `ADMUSU > ATZUSU > INRUSU`.
2. **Selecione a opção de reativação:** Identifique o usuário e escolha reativar.
3. **Conclua e oriente novo acesso:** Finalize a rotina e avise o usuário que ele pode tentar acessar novamente.

!!! warning "Não Faça"
    **Atenção:** Não confunda inatividade com bloqueio: cada situação exige um procedimento diferente.

!!! note "Resultado Esperado"
    **Nota:** Cadastro reativado e disponível para novo acesso.

## 7. O usuário está bloqueado

> **Assuntos relacionados:** [O usuário esqueceu a senha](#5-o-usuario-esqueceu-a-senha) | [A mensagem informa usuário inativo](#6-o-usuario-esta-inativo)

!!! tip "Resposta Rápida"
    **Dica:** Libere o bloqueio. O bloqueio ocorre após tentativas consecutivas de entrada com senhas inválidas.

### Passo a passo

1. **Acesse a rotina:** Navegue até `ADMUSU > ATZUSU > LIBUSUBLOQ`.
2. **Informe o usuário:** Informe os dados do usuário que precisa ser desbloqueado.
3. **Confirme a liberação:** Conclua a operação no sistema.
4. **Oriente nova tentativa:** Se o usuário não lembrar a senha, use a troca de senha ([Seção 5](#5-o-usuario-esqueceu-a-senha)).

!!! warning "Não Faça"
    **Atenção:** Não faça inclusão nem reativação se a condição for somente bloqueio.

!!! note "Resultado Esperado"
    **Nota:** Bloqueio removido. Se o usuário não lembrar a senha, gere uma senha provisória.

## 8. O usuário não consegue entrar porque a sessão anterior continua aberta

> **Assuntos relacionados:** [A mensagem informa usuário bloqueado](#7-o-usuario-esta-bloqueado)

!!! tip "Resposta Rápida"
    **Dica:** Libere a sessão anterior. Depois, peça ao usuário que tente entrar novamente.

### Passo a passo

1. **Acesse a rotina:** Navegue até `ADMUSU > ATZUSU > LIBUSUCON`.
2. **Informe o usuário:** Informe os dados do usuário com sessão aberta.
3. **Confirme a liberação:** Conclua a operação.
4. **Aguarde a mensagem de conclusão:** Só então oriente o usuário a acessar novamente.

!!! note "Resultado Esperado"
    **Nota:** Sessão anterior liberada e novo acesso permitido.

---

# Capítulo 3 — Alterações, Exclusões e Cadastradores

Este capítulo reúne as rotinas de atualização de parâmetros de acesso (perfil, UASG e nível), desligamento parcial (exclusão de habilitação no sistema) ou total (exclusão física no Senha-Rede), além da habilitação de novos cadastradores.

## 9. Preciso alterar perfil, UASG ou nível

> **Assuntos relacionados:** [O usuário não consegue acessar o SIASG](#3-o-usuario-esta-cadastrado-mas-nao-acessa-o-siasg) | [É necessário retirar o acesso ao SIASG](#10-preciso-retirar-o-acesso-ao-siasg)

!!! tip "Resposta Rápida"
    **Dica:** Altere apenas os perfis, a UASG ou o nível indicados no pedido autorizado.

### Passo a passo

1. **Confirme a solicitação formal:** Confira exatamente o que foi autorizado e se você possui competência para fazer a alteração.
2. **Para perfil, use a habilitação:** Utilize a rotina de habilitação (`ADMUSU > HABUSU > HABUSUSIS`).
3. **Para UASG ou nível, use `IALPAHUSU`:** Utilize esta rotina quando aplicável.
4. **Revise antes de concluir:** Confira todos os parâmetros antes de confirmar a operação.

!!! warning "Não Faça"
    **Atenção:** Não altere parâmetros que não constem da solicitação autorizada.

!!! note "Resultado Esperado"
    **Nota:** Acesso atualizado conforme a função, a UASG e o nível aprovados.

## 10. Preciso retirar o acesso ao SIASG

> **Assuntos relacionados:** [É necessário excluir o cadastro da Senha-Rede](#11-preciso-excluir-o-usuario-da-senha-rede)

!!! tip "Resposta Rápida"
    **Dica:** Exclua a habilitação do SIASG. Não exclua fisicamente o cadastro.

### Passo a passo

1. **Exclua primeiro os perfis do SIASG:** Retire os perfis vinculados ao sistema.
2. **Acesse a rotina:** Navegue até `ADMUSU > HABUSU > EXCUSUSIS`.
3. **Confirme SIASG e CPF:** Confira cuidadosamente os dados antes de confirmar.
4. **Conclua e registre:** Registre o que foi feito, sem incluir senhas ou outros dados de autenticação.

!!! warning "Não Faça"
    **Atenção:** Não use a exclusão física (`EXCUSU`) quando o objetivo for apenas retirar o acesso ao SIASG.

!!! note "Resultado Esperado"
    **Nota:** Acesso ao SIASG retirado. O cadastro continua disponível para os outros sistemas autorizados.

## 11. Preciso excluir o usuário da Senha-Rede

> **Assuntos relacionados:** [É necessário retirar o acesso ao SIASG](#10-preciso-retirar-o-acesso-ao-siasg)

!!! tip "Resposta Rápida"
    **Dica:** Antes de excluir o cadastro, confirme se a exclusão é necessária, se foi autorizada e se você pode realizá-la. A operação remove também todas as habilitações vinculadas.

### Passo a passo

1. **Verifique sistemas, perfis e habilitações:** Confira a quais sistemas o usuário perderá acesso se o cadastro for excluído.
2. **Confirme autorização e competência:** Confira se você tem autorização formal para excluir esse cadastro.
3. **Acesse a rotina:** Navegue até `ADMUSU > ATZUSU > EXCUSU`.
4. **Registre o resultado:** Anote o procedimento realizado sem incluir credenciais.

!!! warning "Não Faça"
    **Atenção:** Não exclua sem avaliar o impacto: a operação remove todas as habilitações vinculadas.

!!! note "Resultado Esperado"
    **Nota:** Cadastro removido. Um novo acesso exigirá novo cadastramento e novas habilitações.

## 12. Preciso habilitar outro cadastrador

!!! tip "Resposta Rápida"
    **Dica:** Antes de habilitar o cadastrador, confira em qual nível, órgão, sistemas e unidades ele poderá atuar.

### Passo a passo

1. **Confirme a designação formal:** Confira o documento que indica formalmente o novo cadastrador.
2. **Verifique sua competência:** Confirme se você pode habilitar o novo cadastrador com o perfil solicitado.
3. **Acesse a rotina:** Navegue até `ADMUSU > HABCAD`.
4. **Atribua somente o escopo autorizado:** Defina nível, órgão e sistemas conforme a designação.

!!! warning "Não Faça"
    **Atenção:** Não atribua escopo maior do que o autorizado. Libere apenas os sistemas e as unidades indicados.

!!! note "Resultado Esperado"
    **Nota:** Cadastrador habilitado no nível e no escopo autorizados.

---

# Capítulo 4 — Suporte, Boas Práticas e Glossário

Este capítulo orienta sobre o acionamento da Central de Atendimento, apresenta os erros mais recorrentes na gestão de acessos e disponibiliza o checklist de verificação, o glossário de termos e as referências oficiais.

## Quando Encaminhar à Central de Atendimento

Encaminhe a ocorrência à Central de Atendimento quando:

* A rotina descrita nesta cartilha não resolver o problema;
* O sistema estiver fora do ar ou apresentar erro técnico inesperado;
* A mensagem exibida não estiver explicada nesta cartilha ou no material de orientação oficial.

### O que cabe à Central

A Central de Atendimento orienta, registra e encaminha ocorrências sistêmicas ou não resolvidas. Procedimentos de **cadastro, habilitação, perfil, UASG, senha, bloqueio, inatividade e liberação de contexto** continuam sob responsabilidade exclusiva do cadastrador autorizado.

!!! note "Sou usuário, não cadastrador"
    **Nota:** Se você é usuário (não cadastrador) e precisa reativar seu cadastro, desbloquear o acesso ou trocar a senha, procure o cadastrador do seu órgão. A Central orienta, mas não executa essas rotinas.

### O que informar à Central

Ao registrar um chamado, inclua sempre:

* CPF com parte dos números ocultos, conforme as regras de proteção de dados do órgão;
* Mensagem copiada exatamente como aparece na tela do sistema;
* Data e horário da ocorrência;
* Etapa e código da rotina em que o problema aconteceu (ex.: `ADMUSU > ATZUSU > INRUSU`);
* Sistema, base, órgão e UASG envolvidos;
* Captura de tela com dados sensíveis devidamente ocultados;
* Procedimentos já executados pelo cadastrador e o resultado obtido.

!!! warning "Não Encaminhe"
    **Atenção:** Nunca encaminhe senha atual, senha provisória, certificado digital, token, resposta de segurança nem captura de tela com dados pessoais ou de segurança visíveis.

### Canais e Horário de Atendimento

* **Canal oficial:** Central de Atendimento do SIASG/HOD
* **Telefone:** `0800 978 9001`
* **Horário de funcionamento:** Dias úteis, das **8h30 às 21h30** (horário de Brasília), conforme informado nas perguntas frequentes do Portal de Compras.

## Erros Mais Comuns e Como Evitá-los

| Erro Frequente | Consequência | Como Evitar |
| :--- | :--- | :--- |
| Fazer nova inclusão para quem já está cadastrado | Duplicidade e retrabalho | Consultar o CPF antes de qualquer inclusão ([Seção 1](#1-o-cadastro-ja-existe)). |
| Tratar falta de habilitação como falta de cadastro | Usuário continua sem ver o SIASG no menu | Verificar `HABUSUSIS` e os parâmetros ([Seção 3](#3-o-usuario-esta-cadastrado-mas-nao-acessa-o-siasg)). |
| Reativar quando a condição é bloqueio (ou o contrário) | Problema não resolvido | Usar a tabela de decisão pela mensagem exibida na tela. |
| Excluir fisicamente o cadastro para retirar só o SIASG | Perda de acesso a outros sistemas da Rede Serpro | Excluir apenas a habilitação ([Seção 10](#10-preciso-retirar-o-acesso-ao-siasg)). |
| Pedir ou registrar senha em chamado ou e-mail | Risco de segurança e exposição de credencial | Gerar senha provisória e transmitir pelo canal institucional. |
| Atribuir perfis, UASG ou nível além do autorizado | Acesso indevido e falha de conformidade | Conferir a solicitação formal antes de habilitar. |

## Antes de Concluir Qualquer Rotina, Confira

Utilize esta lista de verificação ao final de cada atendimento:

- [ ] Recebi um pedido formal e tenho autorização para realizar o procedimento;
- [ ] Verifiquei se o usuário já existe ou não (consulta prévia por CPF);
- [ ] Identifiquei corretamente a situação do usuário (bloqueado, inativo, revogado ou contexto preso);
- [ ] Conferi se perfil, UASG e nível correspondem exatamente ao autorizado;
- [ ] Nenhuma senha foi solicitada ou registrada em chamados, e-mails ou atas;
- [ ] O resultado da operação foi registrado sem credenciais.

## Glossário

| Termo | Significado |
| :--- | :--- |
| **Base** | Ambiente ou base de dados selecionada para execução da rotina no sistema. |
| **Cadastrador** | Responsável por cadastrar usuários e habilitá-los nos sistemas, nos níveis Geral, Parcial ou Local. O escopo de cada um decorre da designação formal. |
| **Exclusão de habilitação** | Retira o acesso a um sistema específico (ex.: SIASG) e preserva o cadastro no Senha-Rede. |
| **Exclusão física** | Remove definitivamente o cadastro do Senha-Rede e todas as habilitações vinculadas. |
| **Habilitação** | Liberação do usuário cadastrado para um sistema, com perfis, UASG e nível definidos. |
| **HOD** | *Host On Demand*: acesso aos sistemas pela rede Serpro via navegador, conhecido como “tela preta”. |
| **Perfil** | Conjunto de permissões atribuído ao usuário de acordo com a solicitação formal e a função exercida. |
| **Senha provisória** | Senha gerada pelo cadastrador, que deve ser obrigatoriamente trocada pelo usuário no primeiro acesso. |
| **Senha-Rede** | Sistema de controle de acesso utilizado na rede Serpro, no qual o usuário é identificado pelo CPF. |
| **SIASG** | Sistema Integrado de Administração de Serviços Gerais. |
| **UASG** | Unidade Administrativa de Serviços Gerais. |

## Mensagem Final

A correta gestão de acessos fortalece a segurança da informação, reduz retrabalho e favorece a continuidade dos serviços públicos. Antes de concluir qualquer rotina, confirme sempre se o pedido foi formalmente autorizado, se você possui competência para atendê-lo e quais acessos o usuário realmente precisa.

## Referências

* BRASIL. Ministério do Planejamento, Orçamento e Gestão. **Manual de orientação para cadastramento e habilitação de usuário no Sistema Integrado de Administração de Serviços Gerais – SIASG: manual do usuário**. Brasília, DF: Ministério do Planejamento, Orçamento e Gestão, 2006.
* BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. **SIASG (HOD)**. Brasília, DF: Portal de Compras do Governo Federal, [s.d.]. Disponível em: <https://www.gov.br/compras/pt-br/sistemas/conheca-o-compras/siasg-hod/siasg-hod>. Acesso em: 25 set. 2026.
* SERVIÇO FEDERAL DE PROCESSAMENTO DE DADOS (SERPRO). **Perfil Cadastrador (CADEXT)**. Brasília, DF: Central de Ajuda Serpro, [s.d.]. Disponível em: <https://centraldeajuda.serpro.gov.br/acessohod/faqs/perfilcadastrador/>. Acesso em: 25 set. 2026.
* BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. **Manuais**. Brasília, DF: Portal de Compras do Governo Federal, [s.d.]. Disponível em: <https://www.gov.br/compras/pt-br/acesso-a-informacao/manuais>. Acesso em: 25 set. 2026.
* BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. **Perguntas frequentes: SIASG**. Brasília, DF: Portal de Compras do Governo Federal, [s.d.]. Disponível em: <https://www.gov.br/compras/pt-br/acesso-a-informacao/perguntas-frequentes/siasg>. Acesso em: 6 out. 2026.

<div class="toolbar-rodape">
  <button class="btn-acessibilidade btn-imprimir" onclick="window.print()" title="Imprimir ou Salvar PDF">🖨️ Imprimir / PDF</button>
</div>****

<div class="toolbar-acessibilidade">
  <span class="toolbar-label">Tamanho do texto:</span>
  <button class="btn-acessibilidade" onclick="alterarFonte('diminuir')" title="Diminuir fonte">A-</button>
  <button class="btn-acessibilidade" onclick="alterarFonte('resetar')" title="Tamanho padrão">A</button>
  <button class="btn-acessibilidade" onclick="alterarFonte('aumentar')" title="Aumentar fonte">A+</button>
  <button class="btn-acessibilidade btn-imprimir" onclick="window.print()" title="Imprimir ou baixar esta página">🖨️ Imprimir ou baixar esta página</button>
</div>

# Capítulo 4. Suporte, Boas Práticas e Glossário

Este capítulo orienta sobre o acionamento da Central de Atendimento, apresenta os erros mais recorrentes na gestão de acessos e disponibiliza o checklist de verificação, o glossário de termos e as referências oficiais.

---

## Seção 13. Quando Encaminhar à Central de Atendimento

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

---

## Seção 14. Erros Mais Comuns e Como Evitá-los

| Erro Frequente | Consequência | Como Evitar |
| :--- | :--- | :--- |
| Fazer nova inclusão para quem já está cadastrado | Duplicidade e retrabalho | Consultar o CPF antes de qualquer inclusão ([Capítulo 1 — Seção 1](01-cadastro-e-habilitacao.md#secao-1-o-cadastro-ja-existe)). |
| Tratar falta de habilitação como falta de cadastro | Usuário continua sem ver o SIASG no menu | Verificar `HABUSUSIS` e os parâmetros ([Capítulo 1 — Seção 3](01-cadastro-e-habilitacao.md#secao-3-o-usuario-esta-cadastrado-mas-nao-acessa-o-siasg)). |
| Reativar quando a condição é bloqueio (ou o contrário) | Problema não resolvido | Usar a tabela de decisão pela mensagem exibida na tela. |
| Excluir fisicamente o cadastro para retirar só o SIASG | Perda de acesso a outros sistemas da Rede Serpro | Excluir apenas a habilitação ([Capítulo 3 — Seção 10](03-alteracoes-exclusoes-e-cadastradores.md#secao-10-preciso-retirar-o-acesso-ao-siasg)). |
| Pedir ou registrar senha em chamado ou e-mail | Risco de segurança e exposição de credencial | Gerar senha provisória e transmitir pelo canal institucional. |
| Atribuir perfis, UASG ou nível além do autorizado | Acesso indevido e falha de conformidade | Conferir a solicitação formal antes de habilitar. |

---

## Seção 15. Antes de Concluir Qualquer Rotina, Confira

Utilize esta lista de verificação ao final de cada atendimento:

▪ Recebi um pedido formal e tenho autorização para realizar o procedimento;

▪ Verifiquei se o usuário já existe ou não (consulta prévia por CPF);

▪ Identifiquei corretamente a situação do usuário (bloqueado, inativo, revogado ou contexto preso);

▪ Conferi se perfil, UASG e nível correspondem exatamente ao autorizado;

▪ Nenhuma senha foi solicitada ou registrada em chamados, e-mails ou atas;

▪ O resultado da operação foi registrado sem credenciais.

---

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

---

## Mensagem Final

A correta gestão de acessos fortalece a segurança da informação, reduz retrabalho e favorece a continuidade dos serviços públicos. Antes de concluir qualquer rotina, confirme sempre se o pedido foi formalmente autorizado, se você possui competência para atendê-lo e quais acessos o usuário realmente precisa.

---

## Referências

* BRASIL. Ministério do Planejamento, Orçamento e Gestão. **Manual de orientação para cadastramento e habilitação de usuário no Sistema Integrado de Administração de Serviços Gerais – SIASG: manual do usuário**. Brasília, DF: Ministério do Planejamento, Orçamento e Gestão, 2006.
* BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. **SIASG (HOD)**. Brasília, DF: Portal de Compras do Governo Federal, [s.d.]. Disponível em: <https://www.gov.br/compras/pt-br/sistemas/conheca-o-compras/siasg-hod/siasg-hod>. Acesso em: 25 set. 2026.
* SERVIÇO FEDERAL DE PROCESSAMENTO DE DADOS (SERPRO). **Perfil Cadastrador (CADEXT)**. Brasília, DF: Central de Ajuda Serpro, [s.d.]. Disponível em: <https://centraldeajuda.serpro.gov.br/acessohod/faqs/perfilcadastrador/>. Acesso em: 25 set. 2026.
* BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. **Manuais**. Brasília, DF: Portal de Compras do Governo Federal, [s.d.]. Disponível em: <https://www.gov.br/compras/pt-br/acesso-a-informacao/manuais>. Acesso em: 25 set. 2026.
* BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. **Perguntas frequentes: SIASG**. Brasília, DF: Portal de Compras do Governo Federal, [s.d.]. Disponível em: <https://www.gov.br/compras/pt-br/acesso-a-informacao/perguntas-frequentes/siasg>. Acesso em: 6 out. 2026.

<div class="toolbar-rodape">
  <button class="btn-acessibilidade btn-imprimir" onclick="window.print()" title="Imprimir ou baixar esta página">🖨️ Imprimir ou baixar esta página</button>
</div>

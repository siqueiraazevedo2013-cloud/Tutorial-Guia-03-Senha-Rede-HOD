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

# 3. Alterações, Exclusões e Cadastradores

Este capítulo reúne as rotinas de atualização de parâmetros de acesso (perfil, UASG e nível), desligamento parcial (exclusão de habilitação no sistema) ou total (exclusão física no Senha-Rede), além da habilitação de novos cadastradores.

---

## 9. Preciso alterar perfil, UASG ou nível

> **Assuntos relacionados:** [O usuário não consegue acessar o SIASG](01-cadastro-e-habilitacao.md#3-o-usuario-esta-cadastrado-mas-nao-acessa-o-siasg) | [É necessário retirar o acesso ao SIASG](#10-preciso-retirar-o-acesso-ao-siasg)

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

---

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

---

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

---

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

<div class="toolbar-rodape">
  <button class="btn-acessibilidade btn-imprimir" onclick="window.print()" title="Imprimir ou Salvar PDF">🖨️ Imprimir / PDF</button>
</div>

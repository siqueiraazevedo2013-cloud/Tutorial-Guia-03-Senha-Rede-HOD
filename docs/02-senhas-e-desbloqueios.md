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

# 2. Senhas, Inatividade e Desbloqueios

Este capítulo apresenta os procedimentos corretos para tratar falhas de autenticação, revogação, inatividade por tempo sem troca de senha, bloqueios por tentativas inválidas e liberação de sessões presas no **Senha-Rede**.

---

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

---

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

---

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

---

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

---

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

<div class="toolbar-rodape">
  <button class="btn-acessibilidade btn-imprimir" onclick="window.print()" title="Imprimir ou Salvar PDF">🖨️ Imprimir / PDF</button>
</div>

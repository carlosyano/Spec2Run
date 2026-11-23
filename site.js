const T={en:{
slogan:"From spec to production",nav_goal:"Purpose",go_h:"What Spec2Run is for",
go_p:"To let one person, or a small team, deliver secure, traceable software at the pace of AI, without building a full corporate engineering team for every new demand.",
go1h:"Speed with control",go1p:"AI agents do the specification, tests, code and review, so work moves faster, but never outside the rules.",
go2h:"Security and quality by design",go2p:"Tests come first, checks cannot be switched off, and every approval is recorded.",
go3h:"Few people, clear decisions",go3p:"People keep the decisions that matter, at four defined points, instead of managing every step.",
go4h:"Freedom to choose providers",go4p:"Each role can use a different AI provider and model, balancing quality, cost and the risk of depending on a single vendor. Cost is a controlled variable; no saving is promised.",
go_note:"TO VALIDATE: purpose wording is a draft based on the process documents; Carlos to confirm.",
explore_h:"Explore",nav_contact:"Contact",nav_author:"About the author",tz_author:"Who created Spec2Run AI.",nav_adopt:"How to adopt",tz_adopt:"From first look to your first task.",more:"Full detail",
tz_purpose:"What Spec2Run is for.",tz_how:"The eleven steps, with checks and approvals.",tz_roles:"Five roles, kept apart.",tz_gains:"What we expect, stated as hypotheses.",tz_theory:"The software engineering ideas behind it.",tz_deep:"Lifecycle, providers, orchestration and safeguards.",
ad_h:"How to adopt it in your projects",ad_p:"Liked the process? Here is how to start.",
ad_steps:[["Get the overview","Read this site: purpose, how it works, roles and safeguards."],["Check the prerequisites","See the list below and confirm your project fits."],["Ask for the full process","Send us an e-mail. We reply with the complete process documents."],["Prepare your environment","Follow the installation and operation guide that comes with it."],["Start with one small task","Run a single small slice end to end before scaling."]],
ad_pre_h:"Prerequisites",ad_pre:["A repository on GitHub with Actions enabled and a protected main branch","One accountable person who approves at the four decision points","AI provider accounts, each with a spending cap","A software engineer to define the stack in the first project"],
ad_get_h:"What you receive",ad_get:"The complete process documents, the installation and operation guide and the decision log.",
ad_cta:"Request the full process",ad_mail_s:"Spec2Run AI: request for the full process",ad_mail_b:"Hello, I would like to receive the full Spec2Run AI process.%0D%0A%0D%0AName:%0D%0ACompany and role:%0D%0AType of project:",
ad_note:"TO VALIDATE: what is sent, to whom, and under which terms (license or confidentiality) are Carlos's decisions.",
au_h:"About the author",au_role:"IT executive · Software engineering, mission-critical platforms, payments and governed AI adoption",
au_sum:"IT executive with more than 25 years leading mission-critical platforms, mostly in payments. I led the technical delivery of Elo's new card authorizer: a COBOL legacy platform replaced by Java 21 on an active/active AWS and Azure architecture, with 100+ professionals, in 22 months, cutting transaction processing cost by 50%. I connect strategy, engineering and governance. Spec2Run AI is the process I created to bring that discipline to software built with AI.",
au_hl_h:"Selected results",au_hl:[["Cartão Elo", "Led the technical delivery of the New Elo Authorizer: 100+ professionals, 126 thousand hours, 22 months, within schedule and budget, with 50% lower transaction processing cost and 59% fewer incidents. Our squad was the first at Elo to adopt AI in software development."], ["ACI Worldwide", "Led strategic projects in fraud prevention, authorization and switching for payments, with 100% availability of the services under management."], ["TecBan (Banco24Horas)", "Led the whole technology chain of Banco24Horas for ten years: 100+ professionals, ATM capture, authorization, switching, a Testing Center of Excellence, a contingency data center and 24x7 operation."], ["Produban (Santander)", "Led the corporate team of project managers delivering a monthly portfolio of 80 infrastructure initiatives at Banco Santander Brasil, with 97% delivered on time."], ["GS1 Brasil", "Led corporate IT and information security, and structured the governed adoption of AI tools, including Microsoft Copilot and Claude."], ["EAI Brasil", "As IT consultant and delivery manager, delivered contracted projects and services for strategic clients such as NET Serviços, SKY and Fraport Brasil: R$ 1.9 million lower annual cost in NET's production and planning operation, 150% more service capacity and 65% shorter demand lead time."], ["JCN Sistemas", "Ran IT and operations of the RecargaFácil online top-up product: delivery time cut from 8 minutes to 54 seconds, availability raised from 85% to 99% and 75% fewer incidents with ITIL processes."]],
au_ct_h:"Contact",au_mail:"E-mail",au_li:"LinkedIn",au_li_t:"linkedin.com/in/carlosyano",
au_note:"TO VALIDATE: summary text and contact e-mail (will move to the spec2run.com.br address). Figures come from the LinkedIn profile.",
nav_how:"How it works",nav_roles:"Roles",nav_gains:"Expected gains",nav_theory:"Foundations",nav_deep:"Deep dive",
tag:"Version 1.1 · Specification-first delivery with AI agents",
h1:"AI agents build and review. <em>Deterministic code governs.</em> People&nbsp;decide.",
lead:"Spec2Run is a lightweight process in which AI agents specify, test, build and review software in small, traceable slices. Plain code, not an AI, controls the flow and stops it when a rule is broken.",
cta1:"See how it works",cta2:"Get in touch",cta3:"Go deeper",
pr_h:"Three ideas behind it",pr_p:"Each one answers a risk of using AI to write software.",
pr1h:"AI does the work",pr1p:"Five specialised AI roles specify, design, test, build and review, each with a clear input and output.",
pr2h:"Code governs",pr2p:"The orchestrator is ordinary, deterministic code. No AI decides the next step, and no AI can switch off a check.",
pr3h:"People approve",pr3p:"A person approves at four defined points: spec and design, the tests, the code, and the deployment.",
how_h:"How a task flows",how_p:"Each request becomes a small slice that moves through eleven steps. Every step has automated checks, and four have a human approval.",
bar:"Automated checks run at every step, from the first document to deployment.",
lg_a:"Automated check",lg_h:"Human approval",
todo_how:"TO VALIDATE: step names and checks against Spec2Run Light 1.1.",
ro_h:"Five roles, kept apart",ro_p:"Whoever writes does not review. The roles never mix authorship and review.",
ro_div:"The author of the spec or the code is never from the same AI provider as the reviewer. Software checks this before a task starts.",
g_h:"Expected gains",g_p:"These are hypotheses, not measured results.",
g1h:"Less dedicated headcount per demand",g1p:"A new demand would not need its own software engineer, tester and architect.",
g2h:"Reusable stack",g2p:"A software engineer defines the stack once, in the first project. Later projects reuse it.",
g3h:"Traceability by default",g3p:"Requirements, tests and code stay linked in every slice.",
g4h:"Controlled spend",g4p:"A spending cap is defined for each AI provider key.",
g_note:"HYPOTHESES: no figures are claimed. Real data will come from real use, with a source.",
t_h:"Theoretical foundations",t_p:"Spec2Run combines established software engineering ideas.",
t1:"<b>Test-driven development</b>: tests written first and proven to fail before code exists (Beck).",
t2:"<b>Requirements traceability</b>: every test and change traces to a requirement.",
t3:"<b>Separation of duties</b>: the author does not review their own work.",
t4:"<b>Delivery performance research</b>: small batches and fast feedback (Forsgren, Humble, Kim: <i>Accelerate</i>).",
t_note:"TO VALIDATE: references and wording to be checked against sources before publishing.",
d_h:"Deep dive",d_p:"The second level: how the process works in detail.",
tabs:["Lifecycle","Roles and providers","Orchestration","Safeguards","Glossary"],
d0h:"Lifecycle of a task",d0p:"Eleven steps, with who acts and what the machine checks.",
lchead:["#","Step","Who acts","What the machine checks"],
lc:[["Specify","Specifier (AI)","Format; every MUST has a criterion; no open questions; IDs exist in the source of truth"],
["Review the spec","Reviewer (AI)","Verdict consistent with findings; blocked goes back to step 1"],
["Design","Architect (AI)","Every non-functional MUST is covered by a decision record; elevated level requires a threat section"],
["Approval 1","Person","Spec and design are hashed; any later change locks the task"],
["Write tests","Test designer (AI)","Every MUST criterion appears in a test; no test disabled or deleted"],
["Tests must fail (RED)","Machine","New tests fail for the right reason, not by syntax error"],
["Approval 2","Person","Approved tests are hashed and checked again at merge"],
["Write code","Builder (AI)","Did not touch tests, configuration or rules"],
["All checks (GREEN)","Machine","Build, lint, types, tests, security scan, secrets, dependencies, mutation testing; tests unchanged"],
["Review the code","Reviewer (AI)","Blocked goes back to step 8; a diff too large to read stops and asks a person"],
["Approval 3 and 4","Person","Code approved and merged; deployment approved, with smoke test and automatic rollback"]],
cmd_h:"Commands",cmd_p:"People act by commenting short commands on the task.",
cmd:[["approve","Approve spec and design"],["approve tests","Approve the tests after they fail as expected"],["approve code","Approve the code and enable the merge"],["reject <reason>","Send back to the previous role with a reason"],["resume","Unlock a blocked task after the cause is fixed"]],
d1h:"Roles and providers",d1p:"Five roles. Providers are examples; they are configurable.",
rthead:["Role","What it does","Delivers","Example provider"],
rt:[["Specifier","Turns the request into requirements and acceptance criteria","Specification","e.g. DeepSeek"],
["Reviewer","Reviews the spec, then the code","Two reviews","e.g. Claude"],
["Architect","Defines design and decisions, with alternatives","Design","e.g. Claude"],
["Test designer","Writes tests before code","Tests","e.g. Qwen"],
["Builder","Writes the smallest code that passes","Code","e.g. DeepSeek"]],
sim_h:"Try the diversity rule",sim_p:"Pick a provider for each role. The software blocks a reviewer that shares a provider with the specifier or the builder.",
simroles:["Specifier","Test designer","Builder","Reviewer"],simprov:["Provider A","Provider B","Provider C","Provider D"],
sim_ok:"Valid configuration.",sim_bad:"Blocked: the reviewer shares a provider with the specifier or the builder.",sim_adv:"Warning: test designer and builder are the same provider; allowed, but tests and code share blind spots.",
d2h:"Orchestration",d2p:"Plain code runs one step at a time, recalculates the state from the task record and never lets an AI choose the next step.",
lane:[["Human input","A task and short commands on the issue"],["Orchestrator","Deterministic code. No secrets, never runs agent code"],["Agent job","Reads the task, has one provider key, no write access"],["Machine job","Runs tests and scans. No secrets"],["Audit record","Hash-chained log in the task folder"]],
ch_h:"Tamper-evident record",ch_p:"Each event stores the hash of the previous one. Change anything approved and the chain breaks, and the task locks.",
blk:["Spec approved","Tests approved","Checks passed","Code approved","Merged"],tamper:"Tamper with tests",restore:"Restore",chok:"Chain intact.",chbad:"Chain broken at “Tests approved”: the task is locked.",
d3h:"Safeguards",d3p:"What the machine refuses without depending on the AI.",
safe:[["Least privilege","Agents get no write token; the job that runs agent code sees no secrets."],["Protected areas","Agents cannot change tests, rules or configuration outside their role."],["Treat input as data","Agent input is delimited text, never instructions."],["Stops and asks","After repeated refusals the task stops and asks a person."],["Spending cap","A cap exists for each provider key."]],
sd_h:"Sensitive data",sd_p:"Stronger controls when an application handles sensitive data.",
sens:[["Elevated level","No AI can classify data as ordinary to skip threat review."],["Explicit data handling","Requirements state where data lives, who accesses it, and whether it leaves."],["Synthetic data only","Agents work on code and synthetic data, never real personal data."]],
rem:"Some risks remain with people. That is why a person reads and approves the code before merge.",
d4h:"Glossary",gloss:[["Specification","The written requirements and acceptance criteria of a task."],["RED","The tests are written first and must fail before the code exists."],["GREEN","All automated checks pass after the code is written."],["Diff","The set of changes in a proposal to the code."],["Mutation testing","Deliberately breaking code to confirm tests catch it."],["Decision record","A short note explaining a design choice and its alternatives."]],
d_note:"TO VALIDATE: all detail pages follow Spec2Run Light 1.1; confirm what is public.",
c_h:"Get in touch",c_p:"Interested in the process or in adopting it?",c_note:"TO VALIDATE: contact e-mail (will move to the spec2run.com.br address).",
foot:"© Spec2Run AI. Created by Carlos Yano. Prototype, content provisional."},
pt:{
slogan:"Da especificação à produção",nav_goal:"Objetivo",go_h:"Para que serve o Spec2Run",
go_p:"Permitir que uma pessoa, ou uma equipe pequena, entregue software seguro e rastreável no ritmo da IA, sem montar uma equipe corporativa de engenharia para cada nova demanda.",
go1h:"Velocidade com controle",go1p:"Agentes de IA fazem especificação, testes, código e revisão, então o trabalho anda mais rápido, mas nunca fora das regras.",
go2h:"Segurança e qualidade desde o desenho",go2p:"Os testes vêm primeiro, as verificações não podem ser desligadas e toda aprovação fica registrada.",
go3h:"Poucas pessoas, decisões claras",go3p:"As pessoas ficam com as decisões que importam, em quatro pontos definidos, em vez de gerir cada etapa.",
go4h:"Liberdade de escolher fornecedores",go4p:"Cada papel pode usar um fornecedor e um modelo de IA diferentes, equilibrando qualidade, custo e o risco de depender de um único fornecedor. O custo é uma variável controlada; nenhuma economia é prometida.",
go_note:"VALIDAR: a redação do objetivo é um rascunho baseado nos documentos do processo; Carlos confirma.",
explore_h:"Explore",nav_contact:"Contato",nav_author:"Sobre o autor",tz_author:"Quem criou o Spec2Run AI.",nav_adopt:"Como adotar",tz_adopt:"Da primeira leitura à sua primeira tarefa.",more:"Ver detalhe",
tz_purpose:"Para que serve o Spec2Run.",tz_how:"As onze etapas, com verificações e aprovações.",tz_roles:"Cinco papéis, separados.",tz_gains:"O que esperamos, declarado como hipótese.",tz_theory:"As ideias de Engenharia de Software por trás.",tz_deep:"Ciclo, fornecedores, orquestração e salvaguardas.",
ad_h:"Como adotar em seus projetos",ad_p:"Gostou do processo? Veja como começar.",
ad_steps:[["Veja a visão geral","Leia este site: objetivo, como funciona, papéis e salvaguardas."],["Confira os pré-requisitos","Veja a lista abaixo e confirme se o seu projeto se encaixa."],["Peça o processo completo","Envie um e-mail. Respondemos com os documentos completos do processo."],["Prepare o ambiente","Siga o guia de instalação e operação que acompanha o material."],["Comece por uma tarefa pequena","Rode uma única fatia pequena do início ao fim antes de ampliar."]],
ad_pre_h:"Pré-requisitos",ad_pre:["Repositório no GitHub com Actions ativo e branch principal protegida","Uma pessoa responsável que aprova nos quatro pontos de decisão","Contas de fornecedores de IA, cada uma com teto de gasto","Um engenheiro de software para definir a stack no primeiro projeto"],
ad_get_h:"O que você recebe",ad_get:"Os documentos completos do processo, o guia de instalação e operação e o registro de decisões.",
ad_cta:"Pedir o processo completo",ad_mail_s:"Spec2Run AI: pedido do processo completo",ad_mail_b:"Olá, gostaria de receber o processo completo do Spec2Run AI.%0D%0A%0D%0ANome:%0D%0AEmpresa e cargo:%0D%0ATipo de projeto:",
ad_note:"VALIDAR: o que é enviado, para quem e sob quais termos (licença ou confidencialidade) são decisões do Carlos.",
au_h:"Sobre o autor",au_role:"Executivo de TI · Engenharia de software, plataformas de missão crítica, meios de pagamento e adoção governada de IA",
au_sum:"Executivo de TI com mais de 25 anos liderando plataformas de missão crítica, principalmente em meios de pagamento. Liderei tecnicamente o novo autorizador de cartões da Elo: uma plataforma legada em COBOL substituída por Java 21 em arquitetura ativa/ativa na AWS e na Azure, com mais de 100 profissionais, em 22 meses, reduzindo em 50% o custo de processamento transacional. Conecto estratégia, engenharia e governança. O Spec2Run AI é o processo que criei para levar essa disciplina ao software construído com IA.",
au_hl_h:"Resultados selecionados",au_hl:[["Cartão Elo", "Liderei tecnicamente o Novo Autorizador Elo: mais de 100 profissionais, 126 mil horas, 22 meses, dentro do prazo e do orçamento, com 50% menos custo de processamento transacional e 59% menos incidentes. Nossa squad foi a primeira da Elo a adotar IA no desenvolvimento de software."], ["ACI Worldwide", "Liderei projetos estratégicos de prevenção a fraudes, autorização e switching de pagamentos, com 100% de disponibilidade dos serviços sob gestão."], ["TecBan (Banco24Horas)", "Liderei por dez anos toda a cadeia tecnológica do Banco24Horas: mais de 100 profissionais, captura em ATMs, autorização, switching, Centro de Excelência em Testes, datacenter de contingência e operação 24x7."], ["Produban (Santander)", "Liderei o time corporativo de gerentes de projetos que entregava um portfólio mensal de 80 iniciativas de infraestrutura no Banco Santander Brasil, com 97% de entregas no prazo."], ["GS1 Brasil", "Liderei a TI corporativa e a segurança da informação e estruturei a adoção governada de ferramentas de IA, incluindo Microsoft Copilot e Claude."], ["EAI Brasil", "Como consultor de TI e delivery manager, entreguei projetos e serviços contratados para clientes estratégicos como NET Serviços, SKY e Fraport Brasil: redução anual de R$ 1,9 milhão na operação de produção e PCP da NET, 150% mais capacidade de atendimento e 65% menos lead time das demandas."], ["JCN Sistemas", "Conduzi a TI e a operação do produto RecargaFácil, de recarga online: tempo de entrega reduzido de 8 minutos para 54 segundos, disponibilidade de 85% para 99% e 75% menos incidentes com processos ITIL."]],
au_ct_h:"Contato",au_mail:"E-mail",au_li:"LinkedIn",au_li_t:"linkedin.com/in/carlosyano",
au_note:"VALIDAR: texto do resumo e e-mail de contato (passará ao endereço do spec2run.com.br). Os números vêm do perfil do LinkedIn.",
nav_how:"Como funciona",nav_roles:"Papéis",nav_gains:"Ganhos esperados",nav_theory:"Fundamentos",nav_deep:"Aprofundamento",
tag:"Versão 1.1 · Entrega orientada por especificação, com agentes de IA",
h1:"Agentes de IA constroem e revisam. <em>Código determinístico governa.</em> Pessoas&nbsp;decidem.",
lead:"Spec2Run é um processo leve em que agentes de IA especificam, testam, constroem e revisam software em fatias pequenas e rastreáveis. Código comum, e não uma IA, controla o fluxo e o interrompe quando uma regra é violada.",
cta1:"Veja como funciona",cta2:"Fale conosco",cta3:"Aprofunde",
pr_h:"Três ideias por trás",pr_p:"Cada uma responde a um risco de usar IA para escrever software.",
pr1h:"A IA faz o trabalho",pr1p:"Cinco papéis de IA especializados especificam, desenham, testam, constroem e revisam, cada um com entrada e saída claras.",
pr2h:"O código governa",pr2p:"O orquestrador é código comum e determinístico. Nenhuma IA decide o próximo passo, e nenhuma IA desliga uma verificação.",
pr3h:"Pessoas aprovam",pr3p:"Uma pessoa aprova em quatro pontos definidos: spec e desenho, os testes, o código e a implantação.",
how_h:"Como uma tarefa flui",how_p:"Cada pedido vira uma fatia pequena que passa por onze etapas. Toda etapa tem verificações automáticas, e quatro têm aprovação humana.",
bar:"Verificações automáticas rodam em todas as etapas, do primeiro documento à implantação.",
lg_a:"Verificação automática",lg_h:"Aprovação humana",
todo_how:"VALIDAR: nomes das etapas e verificações contra o Spec2Run Light 1.1.",
ro_h:"Cinco papéis, separados",ro_p:"Quem escreve não revisa. Os papéis nunca misturam autoria e revisão.",
ro_div:"Quem escreve a spec ou o código nunca é do mesmo fornecedor de IA de quem revisa. O software confere isso antes de a tarefa começar.",
g_h:"Ganhos esperados",g_p:"São hipóteses, não resultados medidos.",
g1h:"Menos pessoas dedicadas por demanda",g1p:"Uma nova demanda não precisaria de engenheiro, testador e arquiteto próprios.",
g2h:"Stack reaproveitável",g2p:"Um engenheiro de software define a stack uma vez, no primeiro projeto. Os próximos a reaproveitam.",
g3h:"Rastreabilidade por padrão",g3p:"Requisitos, testes e código ficam ligados em cada fatia.",
g4h:"Gasto controlado",g4p:"Há um teto de gasto definido para cada chave de fornecedor de IA.",
g_note:"HIPÓTESES: nenhum número é afirmado. Dados reais virão do uso real, com fonte.",
t_h:"Fundamentação teórica",t_p:"O Spec2Run combina ideias consolidadas de Engenharia de Software.",
t1:"<b>Desenvolvimento guiado por testes</b>: testes escritos primeiro e provados falhando antes de o código existir (Beck).",
t2:"<b>Rastreabilidade de requisitos</b>: cada teste e mudança remete a um requisito.",
t3:"<b>Segregação de funções</b>: quem escreve não revisa o próprio trabalho.",
t4:"<b>Pesquisa de desempenho de entrega</b>: lotes pequenos e feedback rápido (Forsgren, Humble, Kim: <i>Accelerate</i>).",
t_note:"VALIDAR: referências e redação a conferir nas fontes antes de publicar.",
d_h:"Aprofundamento",d_p:"O segundo nível: como o processo funciona em detalhe.",
tabs:["Ciclo da tarefa","Papéis e fornecedores","Orquestração","Salvaguardas","Glossário"],
d0h:"Ciclo de uma tarefa",d0p:"Onze etapas, com quem age e o que a máquina confere.",
lchead:["#","Etapa","Quem age","O que a máquina confere"],
lc:[["Especificar","Specifier (IA)","Formato; todo MUST tem critério; nenhuma pergunta aberta; IDs existem na fonte normativa"],
["Revisar a spec","Reviewer (IA)","Veredito coerente com os achados; bloqueado volta à etapa 1"],
["Desenhar","Architect (IA)","Todo MUST não funcional é atendido por uma ADR; nível elevado exige seção de ameaças"],
["Aprovação 1","Pessoa","Spec e desenho recebem hash; qualquer mudança depois trava a tarefa"],
["Escrever testes","Test designer (IA)","Todo critério MUST aparece num teste; nenhum teste desligado ou apagado"],
["Testes precisam falhar (RED)","Máquina","Testes novos falham pelo motivo certo, não por erro de sintaxe"],
["Aprovação 2","Pessoa","Testes aprovados recebem hash e são conferidos de novo no merge"],
["Escrever código","Builder (IA)","Não tocou em testes, configuração nem regras"],
["Todas as verificações (GREEN)","Máquina","Build, lint, tipos, testes, varredura de segurança, segredos, dependências, mutação; testes inalterados"],
["Revisar o código","Reviewer (IA)","Bloqueado volta à etapa 8; diff grande demais para ler trava e pede uma pessoa"],
["Aprovação 3 e 4","Pessoa","Código aprovado e integrado; implantação aprovada, com teste de fumaça e rollback automático"]],
cmd_h:"Comandos",cmd_p:"As pessoas agem comentando comandos curtos na tarefa.",
cmd:[["aprovar","Aprova spec e desenho"],["aprovar testes","Aprova os testes depois de falharem como esperado"],["aprovar codigo","Aprova o código e ativa o merge"],["rejeitar <motivo>","Devolve ao papel anterior, com o motivo"],["retomar","Destrava uma tarefa bloqueada depois de corrigida a causa"]],
d1h:"Papéis e fornecedores",d1p:"Cinco papéis. Os fornecedores são exemplos e são configuráveis.",
rthead:["Papel","O que faz","Entrega","Fornecedor (exemplo)"],
rt:[["Specifier","Transforma o pedido em requisitos e critérios de aceite","Especificação","ex.: DeepSeek"],
["Reviewer","Revisa a spec e, depois, o código","Duas revisões","ex.: Claude"],
["Architect","Define o desenho e as decisões, com alternativas","Desenho","ex.: Claude"],
["Test designer","Escreve os testes antes do código","Testes","ex.: Qwen"],
["Builder","Escreve o menor código que passa","Código","ex.: DeepSeek"]],
sim_h:"Teste a regra de diversidade",sim_p:"Escolha um fornecedor para cada papel. O software bloqueia revisor que divide fornecedor com o especificador ou o construtor.",
simroles:["Specifier","Test designer","Builder","Reviewer"],simprov:["Fornecedor A","Fornecedor B","Fornecedor C","Fornecedor D"],
sim_ok:"Configuração válida.",sim_bad:"Bloqueado: o revisor divide fornecedor com o especificador ou o construtor.",sim_adv:"Aviso: test designer e builder são o mesmo fornecedor; permitido, mas testes e código compartilham pontos cegos.",
d2h:"Orquestração",d2p:"Código comum executa uma etapa por vez, recalcula o estado pelo registro da tarefa e nunca deixa uma IA escolher o próximo passo.",
lane:[["Entrada humana","Uma tarefa e comandos curtos na issue"],["Orquestrador","Código determinístico. Sem segredos, nunca roda código do agente"],["Job do agente","Lê a tarefa, tem uma chave de fornecedor, sem escrita"],["Job da máquina","Roda testes e varreduras. Sem segredos"],["Registro de auditoria","Log encadeado por hash na pasta da tarefa"]],
ch_h:"Registro à prova de adulteração",ch_p:"Cada evento guarda o hash do anterior. Mude algo aprovado e a cadeia quebra, e a tarefa trava.",
blk:["Spec aprovada","Testes aprovados","Verificações ok","Código aprovado","Integrado"],tamper:"Adulterar os testes",restore:"Restaurar",chok:"Cadeia íntegra.",chbad:"Cadeia quebrada em “Testes aprovados”: a tarefa está travada.",
d3h:"Salvaguardas",d3p:"O que a máquina recusa sem depender da IA.",
safe:[["Menor privilégio","Agentes não recebem token de escrita; o job que roda código do agente não vê segredos."],["Áreas protegidas","Agentes não alteram testes, regras ou configuração fora do seu papel."],["Entrada é dado","O que o agente recebe é texto delimitado, nunca instrução."],["Para e pergunta","Após recusas repetidas, a tarefa para e pede uma pessoa."],["Teto de gasto","Existe um teto para cada chave de fornecedor."]],
sd_h:"Dados sensíveis",sd_p:"Controles mais fortes quando a aplicação trata dados sensíveis.",
sens:[["Nível elevado","Nenhuma IA pode classificar o dado como comum para escapar da revisão de ameaças."],["Tratamento explícito","Requisitos dizem onde o dado fica, quem acessa e se sai para terceiros."],["Só dados sintéticos","Agentes trabalham com código e dados sintéticos, nunca dados pessoais reais."]],
rem:"Alguns riscos continuam com as pessoas. Por isso uma pessoa lê e aprova o código antes do merge.",
d4h:"Glossário",gloss:[["Especificação","Os requisitos e critérios de aceite escritos de uma tarefa."],["RED","Os testes são escritos primeiro e precisam falhar antes de o código existir."],["GREEN","Todas as verificações automáticas passam depois de o código ser escrito."],["Diff","O conjunto de mudanças de uma proposta de alteração do código."],["Teste de mutação","Quebrar o código de propósito para confirmar que os testes percebem."],["ADR","Nota curta que explica uma escolha de desenho e suas alternativas."]],
d_note:"VALIDAR: as páginas de detalhe seguem o Spec2Run Light 1.1; confirmar o que é público.",
c_h:"Fale conosco",c_p:"Interesse no processo ou em adotá-lo?",c_note:"VALIDAR: e-mail de contato (passará ao endereço do spec2run.com.br).",
foot:"© Spec2Run AI. Criado por Carlos Yano. Protótipo, conteúdo provisório."}};
let L="en",simSel=[0,1,2,3],tam=false;const $=id=>document.getElementById(id);
const H=(id,h)=>{const e=$(id);if(e)e.innerHTML=h};
try{const q=new URLSearchParams(location.search).get("lang");if(q==="pt"||q==="en")L=q;else{const v=localStorage.getItem("s2r_lang");if(v==="pt"||v==="en")L=v}}catch(e){}
const PAGES=[["purpose","nav_goal","tz_purpose"],["how","nav_how","tz_how"],["roles","nav_roles","tz_roles"],["gains","nav_gains","tz_gains"],["foundations","nav_theory","tz_theory"],["deep","nav_deep","tz_deep"],["adopt","nav_adopt","tz_adopt"],["author","nav_author","tz_author"]];
const DEEP=[["deep-lifecycle","d0h","d0p"],["deep-providers","d1h","d1p"],["deep-orchestration","d2h","d2p"],["deep-safeguards","d3h","d3p"],["deep-glossary","d4h",null]];
const cur=document.body.dataset.page;
function chrome(){const t=T[L];
$("hdr").innerHTML=`<div class="wrap"><nav><a class="logo" href="index.html"><span>Spec2Run</span> <b class="ai">AI</b><small>${t.slogan}</small></a><span style="flex:1"></span>${PAGES.map(p=>`<a href="${p[0]}.html" class="${cur===p[0]||cur.startsWith(p[0]+"-")?"on":""}">${t[p[1]]}</a>`).join("")}<button id="lang">${L==="en"?"PT":"EN"}</button><button id="theme" aria-label="Theme">◐</button></nav></div>`;
$("ftr").innerHTML=`<div class="wrap"><span>${t.foot}</span></div>`;
$("lang").onclick=()=>{L=L==="en"?"pt":"en";try{localStorage.setItem("s2r_lang",L)}catch(e){}render()};
$("theme").onclick=()=>{const r=document.documentElement;const d=r.dataset.theme==="dark"||(!r.dataset.theme&&matchMedia("(prefers-color-scheme:dark)").matches);r.dataset.theme=d?"light":"dark"}}
function render(){const t=T[L];document.documentElement.lang=L==="pt"?"pt-BR":"en";
chrome();
document.querySelectorAll("[data-i]").forEach(e=>{const v=t[e.dataset.i];if(v==null)return;e.hasAttribute("data-html")?e.innerHTML=v:e.textContent=v});
const tk=document.body.dataset.title;document.title="Spec2Run AI"+(tk?" · "+t[tk]:" · "+t.slogan);
const hg={en:["Person approves spec and design","Person approves the tests","Person approves code, then deployment"],pt:["Pessoa aprova spec e desenho","Pessoa aprova os testes","Pessoa aprova o código e, depois, a implantação"]}[L];
const hmap={3:0,6:1,10:2};
H("flow",t.lc.map((r,i)=>`<div class="step"><b>${r[0]}</b><span>${r[1]}</span><u>${r[2]}</u>${i in hmap?`<em class="hg">${hg[hmap[i]]}</em>`:""}</div>`).join(""));
const order=["Specifier","Architect","Test designer","Builder","Reviewer"];
H("rolecards",t.rt.slice().sort((a,b)=>order.indexOf(a[0])-order.indexOf(b[0])).map(r=>`<div class="card"><h3>${r[0]}</h3><p>${r[1]}</p></div>`).join(""));
H("explore",PAGES.map(p=>`<a class="card" href="${p[0]}.html"><h3>${t[p[1]]}</h3><p>${t[p[2]]}</p></a>`).join(""));
H("deepcards",DEEP.map(p=>`<a class="card" href="${p[0]}.html"><h3>${t[p[1]]}</h3>${p[2]?`<p>${t[p[2]]}</p>`:""}</a>`).join(""));
H("adsteps",t.ad_steps.map((r,i)=>`<div class="step"><b>${r[0]}</b><span>${r[1]}</span></div>`).join(""));
H("adpre",t.ad_pre.map(x=>`<li>${x}</li>`).join(""));
const mb=$("admail");if(mb)mb.href="mailto:carlosyano@yahoo.com.br?subject="+encodeURIComponent(t.ad_mail_s)+"&body="+t.ad_mail_b;
H("auhl",t.au_hl.map(r=>`<div class="card"><h3>${r[0]}</h3><p>${r[1]}</p></div>`).join(""));
H("lchead",t.lchead.map(x=>`<th>${x}</th>`).join(""));
H("lcbody",t.lc.map((r,i)=>`<tr><td>${i+1}</td><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join(""));
H("cmdbody",t.cmd.map(r=>`<tr><td><code>/s2r ${r[0]}</code></td><td>${r[1]}</td></tr>`).join(""));
H("rthead",t.rthead.map(x=>`<th>${x}</th>`).join(""));
H("rtbody",t.rt.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join(""));
H("sim",t.simroles.map((r,i)=>`<div><label>${r}</label><select data-s="${i}">${t.simprov.map((p,j)=>`<option value="${j}" ${simSel[i]===j?"selected":""}>${p}</option>`).join("")}</select></div>`).join(""));
document.querySelectorAll("#sim select").forEach(s=>s.onchange=()=>{simSel[+s.dataset.s]=+s.value;simCheck()});if($("simres"))simCheck();
H("lane",t.lane.map(r=>`<div class="card"><b>${r[0]}</b><span>${r[1]}</span></div>`).join(""));
if($("tamper")){$("tamper").textContent=t.tamper;$("restore").textContent=t.restore;$("tamper").onclick=()=>{tam=true;chain()};$("restore").onclick=()=>{tam=false;chain()};chain()}
H("safe",t.safe.map(r=>`<div class="card"><h3>${r[0]}</h3><p>${r[1]}</p></div>`).join(""));
H("sens",t.sens.map(r=>`<div class="card"><h3>${r[0]}</h3><p>${r[1]}</p></div>`).join(""));
H("gloss",t.gloss.map(r=>`<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join(""));
document.querySelectorAll('a[href$=".html"]').forEach(a=>{const h=a.getAttribute("href").split("?")[0];a.setAttribute("href",L==="pt"?h+"?lang=pt":h)})}
function simCheck(){const [sp,td,bu,rv]=simSel,t=T[L],r=$("simres");
if(rv===sp||rv===bu){r.className="res bad";r.textContent=t.sim_bad}else if(td===bu){r.className="res adv";r.textContent=t.sim_adv}else{r.className="res ok";r.textContent=t.sim_ok}}
function chain(){const t=T[L];H("chain",t.blk.map((b,i)=>`<div class="blk ${tam&&i>=1?"bad":""}"><b>${b}</b><br>${tam&&i>=1?"hash ≠":"hash ✓"}</div>`).join(""));
const r=$("chres");r.className="res "+(tam?"bad":"ok");r.textContent=tam?t.chbad:t.chok}
render();

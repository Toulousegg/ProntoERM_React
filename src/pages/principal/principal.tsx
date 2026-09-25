import './principal.css'

export function Principal(){
    return(
//         <!DOCTYPE html>
// <html lang="pt-BR">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>ProntoERP | Gestão Inteligente para Marcenarias</title>

//     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
//         rel="stylesheet">

//     <link rel="stylesheet" href="../../static/home.css?v=999">
// </head>
<body>

    <header className="navbar">

        <div className="logo">
            ProntoERP
        </div>

        <nav>
            <a href="/home/login" className="nav-link">Entrar</a>
            <a href="/home/signup" className="btn-primary">Começar Agora</a>
        </nav>

    </header>

    <section className="hero">

        <div className="hero-left">

            <span className="tag">
                ERP especializado para marcenarias e fábricas de móveis
            </span>

            <h1>
                Controle sua fábrica sem virar escravo da operação
            </h1>

            <p>
                Produção, estoque, projetos, financeiro e clientes organizados em um único sistema.
                Reduza erros, acompanhe pedidos em tempo real e tenha clareza total sobre o lucro da sua empresa.
            </p>

            <div className="hero-buttons">
                <a href="/home/signup" className="btn-primary">
                    Testar Agora
                </a>

                <a href="/home/login" className="btn-secondary">
                    Entrar
                </a>
            </div>

            <div className="hero-info">

                <div>
                    <h3>+ Organização</h3>
                    <span>menos caos na operação</span>
                </div>

                <div>
                    <h3>+ Controle</h3>
                    <span>produção e financeiro em tempo real</span>
                </div>

                <div>
                    <h3>+ Transparência</h3>
                    <span>clientes acompanhando pedidos online</span>
                </div>

            </div>

        </div>

        <div className="hero-right">

            <div className="dashboard-card">

                <div className="dashboard-top">
                    <span className="status online"></span>
                    Sistema Operacional
                </div>

                <div className="dashboard-content">

                    <div className="dashboard-box">
                        <h4>Pedidos em Produção</h4>
                        <strong>18</strong>
                    </div>

                    <div className="dashboard-box">
                        <h4>Lucro do Mês</h4>
                        <strong>R$ 42.580</strong>
                    </div>

                    <div className="dashboard-box full">
                        <h4>Projeto Acompanhado pelo Cliente</h4>
                        <p>
                            Cliente visualizando produção, montagem e entrega em tempo real.
                        </p>
                    </div>

                </div>

            </div>

        </div>

    </section>

    <section className="features">

        <div className="section-title">
            <span>O QUE O PRONTOERP RESOLVE</span>
            <h2>
                Sua empresa cresce quando a operação para de depender da memória
            </h2>
        </div>

        <div className="features-grid">

            <div className="feature-card">
                <span className="number">1</span>

                <h3>
                    PRODUÇÃO ORGANIZADA, NÃO CONFUSÃO DE WHATSAPP
                </h3>

                <p>
                    Controle cada etapa da fábrica, acompanhe status de produção e saiba exatamente o que está atrasado,
                    em andamento ou pronto para entrega.
                </p>
            </div>

            <div className="feature-card">
                <span className="number">2</span>

                <h3>
                    ESTOQUE SOB CONTROLE E SEM PREJUÍZO ESCONDIDO
                </h3>

                <p>
                    Gerencie chapas, ferragens, materiais e produtos em tempo real.
                    Evite desperdícios, falta de material e compras desnecessárias.
                </p>
            </div>

            <div className="feature-card">
                <span className="number">3</span>

                <h3>
                    CLIENTE ACOMPANHANDO O PEDIDO SEM PRECISAR TE COBRAR
                </h3>

                <p>
                    Compartilhe um link exclusivo para arquitetos e clientes acompanharem o andamento do projeto em tempo real.
                </p>
            </div>

            <div className="feature-card">
                <span className="number">4</span>

                <h3>
                    FINANCEIRO QUE MOSTRA O LUCRO REAL DA EMPRESA
                </h3>

                <p>
                    Visualize entradas, gastos, lucros e indicadores financeiros com gráficos inteligentes e relatórios organizados.
                </p>
            </div>

            <div className="feature-card">
                <span className="number">5</span>

                <h3>
                    PROJETOS ORGANIZADOS POR CLIENTE E AMBIENTE
                </h3>

                <p>
                    Separe cozinhas, quartos, escritórios e ambientes em projetos estruturados, evitando perda de informação e retrabalho.
                </p>
            </div>

            <div className="feature-card">
                <span className="number">6</span>

                <h3>
                    IA INTEGRADA PARA AJUDAR SUA EQUIPE
                </h3>

                <p>
                    Utilize um agente IA integrado para responder dúvidas, executar tarefas e acelerar processos internos da empresa.
                </p>
            </div>

        </div>

    </section>

    <section className="benefits">

        <div className="benefit-left">

            <span className="tag">
                Gestão moderna para empresas modernas
            </span>

            <h2>
                Pare de perder tempo apagando incêndio operacional
            </h2>

            <p>
                O ProntoERP foi desenvolvido para marcenarias e fábricas que precisam crescer sem aumentar o caos interno.
                Centralize sua operação, melhore a comunicação da equipe e tenha dados reais para tomar decisões.
            </p>

        </div>

        <div className="benefit-right">

            <div className="benefit-card">
                <strong>✔ Produção mais previsível</strong>
            </div>

            <div className="benefit-card">
                <strong>✔ Menos erros humanos</strong>
            </div>

            <div className="benefit-card">
                <strong>✔ Comunicação centralizada</strong>
            </div>

            <div className="benefit-card">
                <strong>✔ Notificações em tempo real</strong>
            </div>

            <div className="benefit-card">
                <strong>✔ Multiusuário e multiempresa</strong>
            </div>

            <div className="benefit-card">
                <strong>✔ Mais tempo para focar no trabalho real</strong>
            </div>

        </div>

    </section>

    <section className="cta">

        <h2>
            Sua marcenaria precisa de gestão profissional, não de improviso
        </h2>

        <p>
            Organize estoque, produção, financeiro e clientes em um único sistema.
        </p>

        <a href="/home/signup" className="btn-primary big">
            Criar Conta
        </a>

    </section>

    <footer>

        <div className="footer-logo">
            ProntoERP
        </div>

        <p>
            © 2026 ProntoERP. Todos os direitos reservados.
        </p>

    </footer>

</body>
    )
}

export default Principal;
export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TULEGO — Aide à l'interprétation clinique du WISC-V</title>
  <meta name="description" content="Divisez par 3 le temps de rédaction de vos bilans WISC-V. La rigueur clinique préservée. La charge cognitive allégée.">
  <meta http-equiv="Content-Security-Policy"
    content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; frame-ancestors 'none';">
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">

  <script>
    const CONTENT = {
      header: {
        logo: "TULEGO",
        cta: "Essayer gratuitement",
      },
      hero: {
        badge: "✦ Outil d'aide à l'interprétation clinique du WISC-V",
        h1: "Divisez par 3 le temps de rédaction de vos bilans WISC-V",
        subtitle: "La rigueur clinique préservée. La charge cognitive allégée.",
        body: "TULEGO sécurise et accélère la formulation de vos hypothèses cliniques pour vous libérer du temps de rédaction.",
        cta_primary: "Démarrer ma 1ère analyse",
        cta_secondary: "Voir les tarifs ↓",
        trust: "✓ Conforme RGPD — vos données patient ne quittent pas votre poste",
      },
      features: {
        title: "Le constat — Ce que vous vivez à chaque nouveau test",
        intro: "Ce temps existe. Il n'est pas reconnu. Et la tentation de le combler sans filet clinique est réelle.",
        cards: [
          {
            title: "Du temps rendu",
            text: "Interpréter, vérifier, rédiger : 1h30 à 3h par bilan, au minimum. En cabinet, ce temps récupéré c'est un patient de plus, un bilan supplémentaire. En institution, c'est simplement du temps rendu — et c'est déjà considérable.",
          },
          {
            title: "Charge cognitive maximale",
            text: "Croiser mentalement 10 subtests, 5 indices, des intervalles de confiance, un motif de consultation, une anamnèse — simultanément. Avec en filigrane la crainte de passer à côté de quelque chose, ou pire, de commettre une erreur d'interprétation aux conséquences réelles sur l'avenir d'un enfant.",
          },
          {
            title: "La tentation des LLM grand public",
            text: "Utiliser une IA généraliste sans cadre psychométrique, c'est exposer des données patient sensibles et obtenir une analyse décontextualisée. TULEGO est conçu spécifiquement pour l'interprétation clinique du WISC-V — avec le cadre théorique qui va avec.",
          },
        ],
      },
      identity: {
        title_what: "Ce que TULEGO est",
        subtitle_what: "Un amplificateur d'inférences cliniques",
        body_what_1: "TULEGO détecte les patterns que la lecture linéaire néglige. Il croise systématiquement les constructs cognitifs par paires et par trios, relie les données aux manifestations concrètes de la vie de l'enfant, et propose des hypothèses hiérarchisées. Votre capacité de mémorisation a des limites. TULEGO n'en a pas.",
        body_what_2: "TULEGO ne travaille pas dans le vide. Vous lui transmettez le motif de consultation, vos observations de passation, les éléments d'anamnèse pertinents. L'analyse intègre votre regard clinique — elle ne le remplace pas. C'est vous qui apportez le contexte. TULEGO amplifie ce que vous lui donnez.",
        tag_what: "◎ Croisement systématique des constructs",
        title_not: "Ce que TULEGO n'est pas",
        subtitle_not: "Pas un diagnostic automatique",
        body_not: "TULEGO n'est pas un chatbot généraliste. Ce n'est pas un outil de diagnostic. C'est un instrument analytique conçu pour soutenir votre jugement — pas le remplacer. Vous pouvez relire, modifier, rejeter chaque analyse générée. Le compte rendu final reste sous votre responsabilité exclusive.",
        tag_not: "Ψ Le praticien reste souverain",
      },

      methodologie: {
        surtitle: "Fondé sur le modèle Cattell-Horn-Carroll (CHC)",
        title: "Quatre temps structurés",
        subtitle: "La même rigueur que celle d'un clinicien expert — sans les contraintes cognitives de la mémorisation exhaustive.",
        steps: [
          {
            number: "1",
            title: "Restitution factuelle",
            text: "Analyse normative et ipsative. Chaque indice situé, chaque écart significatif identifié. Les intervalles de confiance ne sont pas décoratifs.",
          },
          {
            number: "2",
            title: "Hypothèses cliniques",
            text: "2 à 3 hypothèses hiérarchisées, avec les indicateurs qui les soutiennent ET ceux qui les nuancent. Toujours une hypothèse alternative.",
          },
          {
            number: "3",
            title: "Limites et précautions",
            text: "Ce que les données ne permettent pas de conclure. Facteurs confondants. Investigations complémentaires recommandées.",
          },
          {
            number: "4",
            title: "Pistes d'adaptation",
            text: "Aménagements scolaires, stratégies de compensation, recommandations concrètes pour l'enfant et son entourage.",
          },
        ],
      },

      niveaux: {
        surtitle: "Adaptable à chaque situation",
        title: "Trois niveaux d'analyse, une vulgarisation",
        subtitle: "TULEGO s'adapte à votre contexte clinique — pas l'inverse.",
        cards: [
          {
            name: "Rapide",
            credits: "1 crédit d'analyse",
            text: "Vue d'ensemble structurée. Points forts, vigilances, premières pistes. Idéal pour un premier regard ou un contexte contraint en temps.",
          },
          {
            name: "Standard",
            credits: "2 crédits d'analyse",
            text: "Analyse complète en quatre temps. Tous les indices principaux, hypothèses hiérarchisées, limites, pistes d'adaptation. Le cœur de TULEGO.",
          },
          {
            name: "Approfondie",
            credits: "3 crédits d'analyse",
            text: "Analyse approfondie : configurations inter/intra-subtests, dissociations inhabituelles, hypothèses différentielles, investigations complémentaires ciblées.",
          },
          {
            name: "Vulgarisation",
            credits: "1 crédit d'analyse",
            text: "Reformulation accessible pour les parents et enseignants, générée à partir de votre analyse experte. Sans jargon, sans hypothèse clinique brute.",
          },
        ],
        interface_title: "L'interface",
        interface_subtitle: "Simple par design",
        interface_text: "Trois onglets. Patient — Scores — Analyse. Rien de plus.",
      },

      pricing: {
        title: "Choisissez votre pack",
        subtitle: "Sans abonnement. Sans engagement. Vos crédits d'analyse n'expirent pas.",
        note: "1 crédit d'analyse = 1 compte-rendu complet généré. Les crédits n'expirent pas.",
        plans: [
          {
            name: "Découverte",
            price: "50€",
            credits: "15 crédits d'analyse",
            description: "Pour découvrir TULEGO sans engagement.",
            cta: "Commencer",
            featured: false,
          },
          {
            name: "Praticien",
            price: "110€",
            credits: "40 crédits d'analyse",
            description: "Pour un usage régulier en pratique courante.",
            cta: "Choisir Praticien",
            badge: "Le plus choisi",
            featured: true,
          },
          {
            name: "Expert",
            price: "220€",
            credits: "100 crédits d'analyse",
            description: "Pour les bilans intensifs ou les équipes de psychologues.",
            cta: "Choisir Expert",
            featured: false,
          },
        ],
      },
      faq: {
        title: "Nos réponses directes",
        items: [
          {
            q: "L'IA travaille à ma place ?",
            a: "Non. TULEGO vous assiste et structure vos analyses. Vous gardez le contrôle total sur le processus décisionnel. Il s'agit d'un outil, pas d'un remplaçant. Chaque compte-rendu généré peut être relu, modifié, rejeté.",
          },
          {
            q: "Qu'est-ce qui garantit la confidentialité des données patient ?",
            a: "Le PDF Q-Global n'est jamais transmis à nos serveurs — l'anonymisation s'effectue entièrement en local, sur votre machine. Vos données patient ne quittent pas votre poste. Conformité RGPD native, architecture pensée pour les professionnels de santé.",
          },
          {
            q: "Et si l'IA se trompe ?",
            a: "TULEGO formule des hypothèses, pas des certitudes. Chaque hypothèse est accompagnée des indicateurs qui la soutiennent ET de ceux qui la nuancent. L'interprétation finale vous appartient, toujours.",
          },
          {
            q: "C'est réservé aux experts du numérique ?",
            a: "Non. L'interface est conçue pour des cliniciens, pas des développeurs. Vous importez votre PDF Q-Global ou saisissez les scores manuellement — puis vous obtenez l'analyse. Sans configuration, sans apprentissage technique.",
          },
        ],
      },
      footer: {
        logo: "TULEGO",
        tagline: "L'Analyse Augmentée",
        links: [
          { label: "Mentions légales", href: "#" },
          { label: "Confidentialité", href: "#" },
          { label: "Contact", href: "#" },
        ],
        disclaimer: "TULEGO est un outil d'aide à la décision clinique. Il ne pose pas de diagnostic et ne remplace pas le jugement du praticien habilité.",
        copyright: "© 2026 TULEGO — Tous droits réservés.",
      },
    };
  </script>

  <style>
    :root {
      --bg: #f8fafc;
      --surface: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --accent: #059669;
      --accent-hover: #047857;
      --accent-light: #ecfdf5;
      --accent-border: #a7f3d0;
      --footer-bg: #0f172a;
      --serif: 'Playfair Display', Georgia, serif;
      --sans: 'DM Sans', system-ui, sans-serif;
      --radius: 12px;
      --max: 900px;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: var(--sans);
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* ─── HEADER ─── */
    #header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--surface);
      border-bottom: 1px solid #e2e8f0;
    }

    .header-inner {
      max-width: var(--max);
      margin: 0 auto;
      padding: 0 24px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header-logo {
      font-family: var(--serif);
      font-weight: 700;
      font-size: 1.4rem;
      color: var(--text);
      text-decoration: none;
    }

    .btn-header {
      border: 1.5px solid var(--accent);
      color: var(--accent);
      background: transparent;
      border-radius: 8px;
      padding: 10px 20px;
      font-family: var(--sans);
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s;
    }

    .btn-header:hover {
      background: var(--accent-light);
    }

    /* ─── HERO ─── */
    #hero {
      background: var(--bg);
      padding: 80px 24px;
      text-align: center;
    }

    .hero-inner {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-block;
      background: var(--accent-light);
      border: 1px solid var(--accent-border);
      color: var(--accent);
      font-size: 0.85rem;
      font-weight: 500;
      padding: 6px 16px;
      border-radius: 99px;
      margin-bottom: 28px;
    }

    .hero-h1 {
      font-family: var(--serif);
      font-size: 3rem;
      font-weight: 900;
      color: var(--text);
      line-height: 1.15;
      margin-bottom: 20px;
    }

    .hero-subtitle {
      color: var(--muted);
      font-size: 1.15rem;
      max-width: 600px;
      margin: 0 auto 16px;
    }

    .hero-body {
      color: var(--muted);
      font-size: 1rem;
      max-width: 540px;
      margin: 0 auto 36px;
      line-height: 1.75;
    }

    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      margin-bottom: 20px;
    }

    .btn-primary {
      background: var(--accent);
      color: #ffffff;
      border: none;
      border-radius: 10px;
      padding: 14px 28px;
      font-family: var(--sans);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s;
    }

    .btn-primary:hover {
      background: var(--accent-hover);
    }

    .btn-secondary {
      background: transparent;
      color: var(--text);
      border: 1.5px solid #cbd5e1;
      border-radius: 10px;
      padding: 14px 28px;
      font-family: var(--sans);
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s;
    }

    .btn-secondary:hover {
      background: #f8fafc;
    }

    .hero-trust {
      font-size: 0.85rem;
      color: var(--accent);
      text-align: center;
    }

    /* ─── FEATURES ─── */
    #features {
      background: var(--surface);
      padding: 64px 24px;
    }

    .section-title {
      font-family: var(--serif);
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text);
      text-align: center;
      margin-bottom: 40px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      max-width: var(--max);
      margin: 0 auto;
    }

    .feature-card {
      background: var(--bg);
      border: 1px solid #e2e8f0;
      border-radius: var(--radius);
      padding: 28px;
    }

    .feature-title {
      font-family: var(--sans);
      font-weight: 600;
      font-size: 1rem;
      color: var(--text);
      margin-bottom: 10px;
    }

    .feature-text {
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    /* ─── PRICING ─── */
    #pricing {
      background: var(--bg);
      padding: 64px 24px;
    }

    .section-subtitle {
      text-align: center;
      color: var(--muted);
      font-size: 1rem;
      margin-top: -24px;
      margin-bottom: 40px;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      max-width: 860px;
      margin: 0 auto 20px;
    }

    .pricing-card {
      background: var(--surface);
      border: 1px solid #e2e8f0;
      border-radius: var(--radius);
      padding: 32px;
      text-align: center;
      position: relative;
    }

    .pricing-card.featured {
      border: 2px solid var(--accent);
      box-shadow: 0 8px 24px rgba(5, 150, 105, 0.12);
    }

    .pricing-badge {
      display: inline-block;
      background: var(--accent);
      color: #ffffff;
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: 99px;
      padding: 4px 12px;
      margin-bottom: 16px;
    }

    .pricing-name {
      font-family: var(--sans);
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--text);
      margin-bottom: 12px;
    }

    .pricing-price {
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 6px;
    }

    .pricing-credits {
      color: var(--muted);
      font-size: 0.9rem;
      margin-bottom: 12px;
    }

    .pricing-description {
      color: var(--muted);
      font-size: 0.9rem;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .btn-plan-outline {
      display: block;
      width: 100%;
      border: 1.5px solid var(--accent);
      color: var(--accent);
      background: transparent;
      border-radius: 8px;
      padding: 12px 24px;
      font-family: var(--sans);
      font-size: 0.95rem;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s;
    }

    .btn-plan-outline:hover {
      background: var(--accent-light);
    }

    .btn-plan-filled {
      display: block;
      width: 100%;
      background: var(--accent);
      color: #ffffff;
      border: none;
      border-radius: 8px;
      padding: 12px 24px;
      font-family: var(--sans);
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s;
    }

    .btn-plan-filled:hover {
      background: var(--accent-hover);
    }

    .pricing-note {
      text-align: center;
      font-size: 0.8rem;
      color: #94a3b8;
    }

    /* ─── FAQ ─── */
    #faq {
      background: var(--surface);
      padding: 64px 24px;
    }

    .faq-list {
      max-width: 700px;
      margin: 0 auto;
    }

    .faq-list details {
      border-bottom: 1px solid #f1f5f9;
    }

    .faq-list details summary {
      font-weight: 600;
      color: var(--text);
      cursor: pointer;
      padding: 18px 0;
      list-style: none;
      font-size: 1rem;
    }

    .faq-list details summary::-webkit-details-marker {
      display: none;
    }

    .faq-list details summary::marker {
      display: none;
    }

    .faq-list details[open] summary {
      color: var(--accent);
    }

    .faq-answer {
      color: var(--muted);
      padding-bottom: 18px;
      line-height: 1.75;
      font-size: 0.95rem;
    }

    /* ─── FOOTER ─── */
    #footer {
      background: var(--footer-bg);
      padding: 48px 24px 32px;
    }

    .footer-inner {
      max-width: var(--max);
      margin: 0 auto;
    }

    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 24px;
    }

    .footer-logo {
      font-family: var(--serif);
      font-size: 1.3rem;
      font-weight: 700;
      color: #ffffff;
      display: block;
      margin-bottom: 4px;
    }

    .footer-tagline {
      color: #64748b;
      font-size: 0.85rem;
    }

    .footer-links {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
    }

    .footer-links a {
      color: #64748b;
      font-size: 0.85rem;
      text-decoration: none;
      transition: color 0.2s;
    }

    .footer-links a:hover {
      color: #ffffff;
    }

    .footer-divider {
      border: none;
      border-top: 1px solid #1e293b;
      margin: 32px 0;
    }

    .footer-disclaimer {
      text-align: center;
      font-size: 0.85rem;
      color: #64748b;
      line-height: 1.7;
      margin-bottom: 20px;
    }

    .footer-copyright {
      text-align: center;
      font-size: 0.78rem;
      color: #475569;
    }

    /* ─── IDENTITY ─── */
    #identity {
      background: var(--bg);
      padding: 64px 24px;
    }

    .identity-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      max-width: var(--max);
      margin: 0 auto;
    }

    .identity-card {
      background: var(--surface);
      border: 1px solid #e2e8f0;
      border-radius: var(--radius);
      padding: 36px;
    }

    .identity-card-title {
      font-family: var(--serif);
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 6px;
    }

    .identity-card-subtitle {
      font-size: 1rem;
      font-weight: 600;
      color: var(--accent);
      margin-bottom: 18px;
    }

    .identity-card-body {
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.75;
      margin-bottom: 14px;
    }

    .identity-tag {
      display: inline-block;
      background: var(--accent-light);
      border: 1px solid var(--accent-border);
      color: var(--accent);
      font-size: 0.85rem;
      font-weight: 500;
      padding: 6px 14px;
      border-radius: 99px;
      margin-top: 8px;
    }

    /* ─── METHODOLOGIE ─── */
    #methodologie {
      background: var(--surface);
      padding: 64px 24px;
    }

    .section-surtitle {
      text-align: center;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }

    .methodo-steps {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      max-width: var(--max);
      margin: 0 auto;
    }

    .methodo-step {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      background: var(--bg);
      border: 1px solid #e2e8f0;
      border-radius: var(--radius);
      padding: 28px;
    }

    .methodo-number {
      font-family: var(--serif);
      font-size: 2.5rem;
      font-weight: 900;
      color: var(--accent);
      line-height: 1;
      flex-shrink: 0;
    }

    .methodo-step-title {
      font-weight: 600;
      color: var(--text);
      margin-bottom: 6px;
      font-size: 1rem;
    }

    .methodo-step-text {
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.7;
    }

    /* ─── NIVEAUX ─── */
    #niveaux {
      background: var(--bg);
      padding: 64px 24px;
    }

    .niveaux-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      max-width: var(--max);
      margin: 0 auto 48px;
    }

    .niveau-card {
      background: var(--surface);
      border: 1px solid #e2e8f0;
      border-radius: var(--radius);
      padding: 24px;
    }

    .niveau-name {
      font-weight: 700;
      color: var(--text);
      font-size: 1rem;
      margin-bottom: 4px;
    }

    .niveau-credits {
      font-size: 0.8rem;
      color: var(--accent);
      font-weight: 500;
      margin-bottom: 12px;
    }

    .niveau-text {
      color: var(--muted);
      font-size: 0.88rem;
      line-height: 1.65;
    }

    .interface-block {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
      background: var(--surface);
      border: 1px solid #e2e8f0;
      border-radius: var(--radius);
      padding: 36px;
    }

    .interface-title {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }

    .interface-subtitle {
      font-family: var(--serif);
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 12px;
    }

    .interface-text {
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    /* ─── RESPONSIVE ─── */
    @media (max-width: 768px) {
      .hero-h1 {
        font-size: 2rem;
      }

      .features-grid,
      .pricing-grid {
        grid-template-columns: 1fr;
      }

      .footer-top {
        flex-direction: column;
      }

      .identity-grid,
      .methodo-steps {
        grid-template-columns: 1fr;
      }

      .niveaux-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 480px) {
      .niveaux-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- SECTION: HEADER -->
  <header id="header">
    <div class="header-inner">
      <span class="header-logo" id="header-logo"></span>
      <a href="#pricing" class="btn-header" id="header-cta"></a>
    </div>
  </header>
  <!-- /SECTION: HEADER -->

  <!-- SECTION: HERO -->
  <section id="hero">
    <div class="hero-inner">
      <div class="hero-badge" id="hero-badge"></div>
      <h1 class="hero-h1" id="hero-h1"></h1>
      <p class="hero-subtitle" id="hero-subtitle"></p>
      <p class="hero-body" id="hero-body"></p>
      <div class="hero-buttons">
        <a href="#pricing" class="btn-primary" id="hero-cta-primary"></a>
        <a href="#pricing" class="btn-secondary" id="hero-cta-secondary"></a>
      </div>
      <p class="hero-trust" id="hero-trust"></p>
    </div>
  </section>
  <!-- /SECTION: HERO -->

  <!-- SECTION: FEATURES -->
  <section id="features">
    <h2 class="section-title" id="features-title"></h2>
    <p class="section-subtitle" id="features-intro"></p>
    <div class="features-grid" id="features-grid"></div>
  </section>
  <!-- /SECTION: FEATURES -->

  <!-- SECTION: IDENTITY -->
  <section id="identity">
    <div class="identity-grid" id="identity-grid"></div>
  </section>
  <!-- /SECTION: IDENTITY -->

  <!-- SECTION: METHODOLOGIE -->
  <section id="methodologie">
    <p class="section-surtitle" id="methodo-surtitle"></p>
    <h2 class="section-title" id="methodo-title"></h2>
    <p class="section-subtitle" id="methodo-subtitle"></p>
    <div class="methodo-steps" id="methodo-steps"></div>
  </section>
  <!-- /SECTION: METHODOLOGIE -->

  <!-- SECTION: NIVEAUX -->
  <section id="niveaux">
    <p class="section-surtitle" id="niveaux-surtitle"></p>
    <h2 class="section-title" id="niveaux-title"></h2>
    <p class="section-subtitle" id="niveaux-subtitle"></p>
    <div class="niveaux-grid" id="niveaux-grid"></div>
    <div class="interface-block">
      <p class="interface-title" id="interface-title"></p>
      <p class="interface-subtitle" id="interface-subtitle"></p>
      <p class="interface-text" id="interface-text"></p>
    </div>
  </section>
  <!-- /SECTION: NIVEAUX -->

  <!-- SECTION: PRICING -->
  <section id="pricing">
    <h2 class="section-title" id="pricing-title"></h2>
    <p class="section-subtitle" id="pricing-subtitle"></p>
    <div class="pricing-grid" id="pricing-grid"></div>
    <p class="pricing-note" id="pricing-note"></p>
  </section>
  <!-- /SECTION: PRICING -->

  <!-- SECTION: FAQ -->
  <section id="faq">
    <h2 class="section-title" id="faq-title"></h2>
    <div class="faq-list" id="faq-list"></div>
  </section>
  <!-- /SECTION: FAQ -->

  <!-- SECTION: FOOTER -->
  <footer id="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <span class="footer-logo" id="footer-logo"></span>
          <span class="footer-tagline" id="footer-tagline"></span>
        </div>
        <nav class="footer-links" id="footer-links"></nav>
      </div>
      <hr class="footer-divider">
      <p class="footer-disclaimer" id="footer-disclaimer"></p>
      <p class="footer-copyright" id="footer-copyright"></p>
    </div>
  </footer>
  <!-- /SECTION: FOOTER -->

  <script>
    // ─── HEADER ───
    document.getElementById('header-logo').textContent = CONTENT.header.logo;
    document.getElementById('header-cta').textContent = CONTENT.header.cta;

    // ─── HERO ───
    document.getElementById('hero-badge').textContent = CONTENT.hero.badge;
    document.getElementById('hero-h1').textContent = CONTENT.hero.h1;
    document.getElementById('hero-subtitle').textContent = CONTENT.hero.subtitle;
    document.getElementById('hero-body').textContent = CONTENT.hero.body;
    document.getElementById('hero-cta-primary').textContent = CONTENT.hero.cta_primary;
    document.getElementById('hero-cta-secondary').textContent = CONTENT.hero.cta_secondary;
    document.getElementById('hero-trust').textContent = CONTENT.hero.trust;

    // ─── FEATURES ───
    document.getElementById('features-title').textContent = CONTENT.features.title;
    document.getElementById('features-intro').textContent = CONTENT.features.intro;
    const featuresGrid = document.getElementById('features-grid');
    CONTENT.features.cards.forEach(function(card) {
      const el = document.createElement('div');
      el.className = 'feature-card';
      const title = document.createElement('div');
      title.className = 'feature-title';
      title.textContent = card.title;
      const text = document.createElement('p');
      text.className = 'feature-text';
      text.textContent = card.text;
      el.appendChild(title);
      el.appendChild(text);
      featuresGrid.appendChild(el);
    });

    // ─── IDENTITY ───
    const identityGrid = document.getElementById('identity-grid');
    const cardWhat = document.createElement('div');
    cardWhat.className = 'identity-card';
    cardWhat.innerHTML = \`
      <div class="identity-card-title">\${CONTENT.identity.title_what}</div>
      <div class="identity-card-subtitle">\${CONTENT.identity.subtitle_what}</div>
      <p class="identity-card-body">\${CONTENT.identity.body_what_1}</p>
      <p class="identity-card-body">\${CONTENT.identity.body_what_2}</p>
      <span class="identity-tag">\${CONTENT.identity.tag_what}</span>
    \`;
    const cardNot = document.createElement('div');
    cardNot.className = 'identity-card';
    cardNot.innerHTML = \`
      <div class="identity-card-title">\${CONTENT.identity.title_not}</div>
      <div class="identity-card-subtitle">\${CONTENT.identity.subtitle_not}</div>
      <p class="identity-card-body">\${CONTENT.identity.body_not}</p>
      <span class="identity-tag">\${CONTENT.identity.tag_not}</span>
    \`;
    identityGrid.appendChild(cardWhat);
    identityGrid.appendChild(cardNot);

    // ─── METHODOLOGIE ───
    document.getElementById('methodo-surtitle').textContent = CONTENT.methodologie.surtitle;
    document.getElementById('methodo-title').textContent = CONTENT.methodologie.title;
    document.getElementById('methodo-subtitle').textContent = CONTENT.methodologie.subtitle;
    const methodoSteps = document.getElementById('methodo-steps');
    CONTENT.methodologie.steps.forEach(function(step) {
      const el = document.createElement('div');
      el.className = 'methodo-step';
      el.innerHTML = \`
        <div class="methodo-number">\${step.number}</div>
        <div>
          <div class="methodo-step-title">\${step.title}</div>
          <p class="methodo-step-text">\${step.text}</p>
        </div>
      \`;
      methodoSteps.appendChild(el);
    });

    // ─── NIVEAUX ───
    document.getElementById('niveaux-surtitle').textContent = CONTENT.niveaux.surtitle;
    document.getElementById('niveaux-title').textContent = CONTENT.niveaux.title;
    document.getElementById('niveaux-subtitle').textContent = CONTENT.niveaux.subtitle;
    const niveauxGrid = document.getElementById('niveaux-grid');
    CONTENT.niveaux.cards.forEach(function(card) {
      const el = document.createElement('div');
      el.className = 'niveau-card';
      el.innerHTML = \`
        <div class="niveau-name">\${card.name}</div>
        <div class="niveau-credits">\${card.credits}</div>
        <p class="niveau-text">\${card.text}</p>
      \`;
      niveauxGrid.appendChild(el);
    });
    document.getElementById('interface-title').textContent = CONTENT.niveaux.interface_title;
    document.getElementById('interface-subtitle').textContent = CONTENT.niveaux.interface_subtitle;
    document.getElementById('interface-text').textContent = CONTENT.niveaux.interface_text;

    // ─── PRICING ───
    document.getElementById('pricing-title').textContent = CONTENT.pricing.title;
    document.getElementById('pricing-subtitle').textContent = CONTENT.pricing.subtitle;
    document.getElementById('pricing-note').textContent = CONTENT.pricing.note;
    const pricingGrid = document.getElementById('pricing-grid');
    CONTENT.pricing.plans.forEach(function(plan) {
      const card = document.createElement('div');
      card.className = 'pricing-card' + (plan.featured ? ' featured' : '');

      if (plan.badge) {
        const badge = document.createElement('div');
        badge.className = 'pricing-badge';
        badge.textContent = plan.badge;
        card.appendChild(badge);
      }

      const name = document.createElement('div');
      name.className = 'pricing-name';
      name.textContent = plan.name;

      const price = document.createElement('div');
      price.className = 'pricing-price';
      price.textContent = plan.price;

      const credits = document.createElement('div');
      credits.className = 'pricing-credits';
      credits.textContent = plan.credits;

      const desc = document.createElement('p');
      desc.className = 'pricing-description';
      desc.textContent = plan.description;

      const cta = document.createElement('a');
      cta.href = '#';
      cta.rel = 'noopener noreferrer';
      cta.className = plan.featured ? 'btn-plan-filled' : 'btn-plan-outline';
      cta.textContent = plan.cta;

      card.appendChild(name);
      card.appendChild(price);
      card.appendChild(credits);
      card.appendChild(desc);
      card.appendChild(cta);
      pricingGrid.appendChild(card);
    });

    // ─── FAQ ───
    document.getElementById('faq-title').textContent = CONTENT.faq.title;
    const faqList = document.getElementById('faq-list');
    CONTENT.faq.items.forEach(function(item) {
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.textContent = item.q;
      const answer = document.createElement('p');
      answer.className = 'faq-answer';
      answer.textContent = item.a;
      details.appendChild(summary);
      details.appendChild(answer);
      faqList.appendChild(details);
    });

    // ─── FOOTER ───
    document.getElementById('footer-logo').textContent = CONTENT.footer.logo;
    document.getElementById('footer-tagline').textContent = CONTENT.footer.tagline;
    document.getElementById('footer-disclaimer').textContent = CONTENT.footer.disclaimer;
    document.getElementById('footer-copyright').textContent = CONTENT.footer.copyright;
    const footerLinks = document.getElementById('footer-links');
    CONTENT.footer.links.forEach(function(link) {
      const a = document.createElement('a');
      a.href = link.href;
      a.rel = 'noopener noreferrer';
      a.textContent = link.label;
      footerLinks.appendChild(a);
    });
  </script>

</body>
</html>
`;
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    });
  },
};

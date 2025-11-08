# Identifiants de Connexion - ELAGRO ACADEMY

## Accès au Dashboard

Pour accéder au tableau de bord et à toutes les fonctionnalités de la plateforme, utilisez les identifiants suivants :

### Email
```
marcherve-elagroci@gmail.com
```

### Mot de passe
```
nanashiuchiwa123
```

## Pages Accessibles après Connexion

Une fois connecté, vous aurez accès à :

- **Dashboard** (`/dashboard`) - Tableau de bord principal
- **Profil** (`/profile`) - Gestion du profil utilisateur
- **Apprentissage** (`/learn/[courseId]/[chapterId]`) - Espace de formation
- **Certificats** (`/certificates`) - Liste des certificats obtenus
- **Quiz** (`/quiz/[courseId]/[chapterId]`) - Espace quiz
- **Cours Sauvegardés** (`/dashboard/saved`) - Cours sauvegardés
- **Rapports** (`/dashboard/reports`) - Statistiques et rapports
- **Transactions** (`/dashboard/transactions`) - Historique des transactions
- **Centre d'Aide** (`/dashboard/help`) - FAQ et support

## Système d'Authentification

Le système d'authentification utilise :
- **Cookies HTTP-only** pour la sécurité
- **Middleware Next.js** pour protéger les routes
- **API Routes** pour la gestion de l'authentification

## Déploiement

Le build de production a été testé avec succès. Pour déployer :

```bash
npm run build
npm start
```

## Notes de Sécurité

- Les identifiants sont stockés dans le code source pour la démo
- En production, utilisez une base de données sécurisée
- Les cookies sont configurés avec `httpOnly: true` et `secure: true` en production
- Le token d'authentification expire après 7 jours

## Support

Pour toute question ou problème, contactez le support technique.


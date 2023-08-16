# Documentation de l'API LangPopopy

## Endpoint

### `/stackoverflow`

Ce point d'accès vous permet de récupérer des questions depuis l'API Stack Overflow.
La pagination est prise en charge via le paramètre de requête `page_size`.
Pour des directives d'utilisation détaillées, référez-vous à la documentation de l'API Stack Overflow.

### `/indeed`

Utilisez ce point d'accès pour extraire des données du site Indeed.
La collecte de données s'étend sur plusieurs pages, commençant de la page 1 jusqu'à la page spécifiée par le paramètre `page_size`.
Par défaut, la valeur `page_size` est définie à 10. Cela permet d'effectuer une agrégation complète des données provenant de la plateforme Indeed.

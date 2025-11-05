# Vitest-funktioner

## Opgavebeskrivelse

I denne opgave skal du arbejde med test-drevet udvikling (TDD) ved hjælp af Vitest. Opgaven er opdelt i to trin:

1. **Skriv tests i `src/premade-functions.test.js`:**  
   Start med at skrive tests for funktionerne i `src/premade-functions.js`. Testene skal beskrive, hvordan funktionerne skal opføre sig. Når testene er skrevet, skal du implementere funktionerne, så de passerer testene.

2. **Implementér funktioner baseret på tests i `src/my-functions.test.js`:**  
   I `src/my-functions.test.js` er der allerede skrevet tests for funktionerne i `src/my-functions.js`. Din opgave er at implementere funktionerne i `src/my-functions.js`, så de passerer de eksisterende tests.

## Sådan kører du projektet

1. Installer afhængigheder:
   ```bash
   npm install
   ```

2. Kør alle testene:
   ```bash
   npm run test
   ```

3. Kør kun tests for `premade-functions.js`:
   ```bash
   npm run test:premade
   ```

4. Kør kun tests for `my-functions.js`:
   ```bash
   npm run test:my
   ```

## Tips

- Brug `npm run test:premade` mens du arbejder med del 1 af opgaven
- Brug `npm run test:my` mens du arbejder med del 2 af opgaven
- Testene kører automatisk og opdateres når du gemmer dine filer

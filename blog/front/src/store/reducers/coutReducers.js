// Importez la fonction createSlice de la bibliothèque "@reduxjs/toolkit".
import { createSlice } from "@reduxjs/toolkit";

// Définissez l'état initial de votre tranche (slice).
const countInitialState = { number: 0 };

// Créez une tranche (slice) nommée "count" en utilisant la fonction createSlice.
const countSlice = createSlice({
  name: "count", // Le nom de la tranche (utile pour l'identification dans Redux DevTools).
  initialState: countInitialState, // L'état initial de la tranche.
  reducers: {
    // Définissez les réducteurs (reducers) qui décriront comment l'état peut être modifié.
    // Dans cet exemple, nous avons un réducteur "countChange" qui met à jour le champ "number" de l'état en fonction de l'action reçue.
    countChange(state, action) {
      state.number = action.payload;
    },
  },
});

// Exposez les actions et le réducteur de la tranche pour pouvoir les utiliser ailleurs.
// Les actions sont les fonctions que vous pouvez appeler pour déclencher des changements d'état,
// tandis que le réducteur est utilisé pour gérer ces changements d'état.
const countActions = countSlice.actions; // Actions de la tranche "count".
const countReducer = countSlice.reducer; // Réducteur de la tranche "count".

// Exportez les actions et le réducteur pour les utiliser dans d'autres parties de votre application.
export { countActions, countReducer };
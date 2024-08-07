export const getDayData = state => {
  return {
    id: state.day.id,
    water: state.day.waterLevel,
    breakfast: state.day.breakfast,
    lunch: state.day.lunch,
    dinner: state.day.dinner,
    snack: state.day.snack,
    goal: state.day.goal,
    weight: state.day.weight,
    isWeightChange: state.day.isWeightChange,
    isLoading: state.day.isLoading,
    error: state.day.error,
  };
};

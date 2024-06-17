export const detDayData = state => {
  return {
    id: state.day.id,
    water: state.day.waterLevel,
    breakfast: state.day.breakfast,
    lunch: state.day.lunch,
    dinner: state.day.dinner,
    snack: state.day.snack,
    isLoading: state.day.isLoading,
    error: state.day.error,
  };
};

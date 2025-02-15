export const calculateExperience = (startDate) => {
    try {
      const start = new Date(startDate);
      const today = new Date();
  
      if (!startDate || isNaN(start.getTime())) {
        console.error("Invalid startDate:", startDate);
        return { years: 0, months: 0 };
      }
  
      if (start > today) {
        return { years: 0, months: 0 };
      }
  
      let months = (today.getFullYear() - start.getFullYear()) * 12;
      months += today.getMonth() - start.getMonth();
  
      if (today.getDate() < start.getDate()) {
        months--;
      }
  
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
  
      return { years, months: remainingMonths };
    } catch (error) {
      console.error("Error calculating experience:", error);
      return { years: 0, months: 0 };
    }
  };
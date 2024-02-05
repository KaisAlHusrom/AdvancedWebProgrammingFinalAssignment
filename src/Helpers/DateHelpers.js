export function getCurrentFormattedDate() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

export function getCurrentMonthDaysArray() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    const currentYear = currentDate.getFullYear();
    
    // Get the last day of the current month
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    // Create a new array with values from 1 to lastDay
    const daysArray = Array.from({ length: lastDay }, (_, index) => index + 1);

    return daysArray;
}

// Function to get the first day of the month
export const getFirstDayOfMonth = () => {
    const currentDate = new Date();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    return firstDay.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
};

// Function to get the last day of the month
export const getLastDayOfMonth = () => {
    const currentDate = new Date();
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    return lastDay.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
};
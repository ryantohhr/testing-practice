export default function analyzeArray(array) {
    const sum = array.reduce((sum, current) => sum + current, 0);
    const length = array.length;
    const average = sum / length;
    const min = array.reduce((prev, current) => current < prev ? current: prev);
    const max = array.reduce((prev, current) => current > prev ? current: prev);
    
    return {
        average,
        min,
        max,
        length
    }
}
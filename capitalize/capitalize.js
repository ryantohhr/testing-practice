export default function capitalize(string) {
    const first = string.charAt(0).toUpperCase();
    string = first + string.slice(1);
    return string;
}
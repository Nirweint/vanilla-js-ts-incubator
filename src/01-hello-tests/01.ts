export function sum(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sent: string) {
    return sent.toLowerCase().split(" ")
        .filter(w => w !== "" && w !== "-")
        .map(w => w.replace("!", ""));
}
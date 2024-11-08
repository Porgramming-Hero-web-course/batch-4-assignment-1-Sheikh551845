{

    function countWordOccurrences(A: string, B: string): number {
        const Sentance: string[] = A.toLowerCase().split(" ");
        const word : string = B.toLowerCase();
        let count = 0;
    
        Sentance.forEach(single => {
            if (single === word) {
                count++;
            }
        });
    
        return count;
    }

    const Count:number = countWordOccurrences("I love typescript and you love typescript we all love typescript", "typescript");

    console.log(Count)
}
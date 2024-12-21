{
    // 1-masala: 0 dan katta n soni berilgan shu songacha juft sonlar yig'indisini aniqlang (7 => 12)
    function numbers(n: number): number {
        let sum = 0;
        for (let i = 0; i <= n; i += 2) {
            sum += i;
        }
        return sum;
    }

    console.log(numbers(7));
}


{
    // 2-masala: Boolean true qiymat kirsa 1 qaytaring aks holda 0 (true => 1)
    function number(value: boolean): number {
        return value ? 1 : 0;
    }

    console.log(number(true));
}


{
    // 3-masala: Berilgan ismni boshidagi ikkita harfini qaytaring (Laylo => La)
    function name(name: string): string {
        return name.slice(0, 2);
    }

    console.log(name("Laylo"));
}


{
    // 4-masala: Berilgan real sonni 2 ga oshirib integer qilib qaytaring (5.3 => 7)
    function sum(num: number): number {
        return Math.round(num + 2);
    }

    console.log(sum(5.3));
}


{
    // 5-masala: Berilgan integerni 1 ga oshirib va string qilib qaytaring (4 => "5")
    function str(num: number): string {
        return (num + 1).toString();
    }

    console.log(str(4));
}

{
    // 6-masala: Berilgan string har bir harfini loopda bitta bitta chiqaring (salom => s, a, l, o, m)
    function naming(str: string): void {
        for (const char of str) {
            console.log(char);
        }
    }

    naming("salom");
}


{
    // 7-masala: Berilgan n sonidan ana shu sonni teskari qiymatigacha qaytaring loopda (2 => 2, 1, 0, -1, -2)
    function change(n: number): number[] {
        const result = [];
        for (let i = n; i >= -n; i--) {
            result.push(i);
        }
        return result;
    }

    console.log(change(2));
}


{
    // 8-masala: Agar 1 soni kirsa true, 0 kirsa false qaytaring (0 => false)
    function numberToBoolean(num: number): boolean {
        return num === 1;
    }

    console.log(numberToBoolean(0));
}


{
    // 9-masala: Ismi va millatini kiritsin. Natija (My name is Laylo. I'm uzbek)
    function nation(name: string, nation: string): string {
        return `My name is ${name}. I'm ${nation}`;
    }

    console.log(nation("Laylo", "uzbek"));
}

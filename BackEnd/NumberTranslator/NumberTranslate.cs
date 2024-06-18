using System;

public class NumberTranslate
{
    string[] Unita =
    {
        "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci",
        "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove"
    };

    string[] Decine =
    {
        "venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta"
    };

    public string Translate(int number)
    {
        if (number == 0) return "zero";
        if (number < 0) return "meno " + TranslateNumber(-number);
        return TranslateNumber(number);
    }

    string TranslateNumber(int number)
    {
        if (number < 20) return Unita[number - 1];
        if (number < 100) return TranslateTens(number);
        if (number < 1000) return TranslateHundreds(number);
        if (number < 1000000) return TranslateThousands(number);
        return TranslateMillions(number);
    }

    private string TranslateTens(int number)
    {
        int unit = number % 10;
        int ten = number / 10;
        string result = Decine[ten - 2]; 

        if (unit == 1 || unit == 8) // Tolgo l'ultima lettera della decina in caso in cui l'unità sia 1 o 8 (es. ventuno o ventotto)
            result = result.Substring(0, result.Length - 1);

        if (unit > 0)
            result += Unita[unit - 1];

        return result;
    }

    private string TranslateHundreds(int number)
    {
        int hundred = number / 100;
        int remainder = number % 100;
        string result = (hundred == 1) ? "cento" : Unita[hundred - 1] + "cento"; // se le centinaia sono pari a 1, allora uso "cento", altrimenti uso "nome Unità" + cento (es. 200 = Due Cento)

        if (remainder >= 80 && remainder < 90) // Rimuovo la "o" di cento quando la decina arriva a 80 (es. centottanta)
            result = result.Substring(0, result.Length - 1);

        return result + TranslateNumber(remainder);
    }

    private string TranslateThousands(int number)
    {
        int thousand = number / 1000;
        int remainder = number % 1000;
        string result = (thousand == 1) ? "mille" : TranslateNumber(thousand) + "mila"; // se la cifra della migliaia è 1, allora scrivo "mille", altrimenti scriverò la cifra della migliaia + "mila"

        return result + TranslateNumber(remainder);
    }

    private string TranslateMillions(int number)
    {
        int million = number / 1000000;
        int remainder = number % 1000000;
        string result = (million == 1) ? "un milione" : TranslateNumber(million) + " milioni";// se la cifra della migliaia è 1, allora scrivo "mille", altrimenti scriverò la cifra della migliaia + "mila"

        return result + TranslateNumber(remainder);
    }
}

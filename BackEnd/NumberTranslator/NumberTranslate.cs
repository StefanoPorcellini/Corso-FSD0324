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
        string result = Decine[ten - 2]; // ten - 2 because the tens array starts from "venti" which is 20 (2*10)

        if (unit == 1 || unit == 8) // Remove the last vowel of the ten if unit is 1 or 8 (e.g., ventuno or ventotto)
            result = result.Substring(0, result.Length - 1);

        if (unit > 0)
            result += Unita[unit - 1];

        return result;
    }

    private string TranslateHundreds(int number)
    {
        int hundred = number / 100;
        int remainder = number % 100;
        string result = (hundred == 1) ? "cento" : Unita[hundred - 1] + "cento"; // if hundreds are 1, use "cento", otherwise use "unit name" + cento

        if (remainder >= 80 && remainder < 90) // Remove the "o" from cento when the ten is 80 (e.g., centottanta)
            result = result.Substring(0, result.Length - 1);

        return result + TranslateNumber(remainder);
    }

    private string TranslateThousands(int number)
    {
        int thousand = number / 1000;
        int remainder = number % 1000;
        string result = (thousand == 1) ? "mille" : TranslateNumber(thousand) + "mila"; // if thousands are 1, write "mille", otherwise write the number of thousands + "mila"

        return result + TranslateNumber(remainder);
    }

    private string TranslateMillions(int number)
    {
        int million = number / 1000000;
        int remainder = number % 1000000;
        string result = (million == 1) ? "un milione" : TranslateNumber(million) + " milioni"; // if million is 1, write "un milione", otherwise write the number of millions + " milioni"

        return result + TranslateNumber(remainder);
    }
}

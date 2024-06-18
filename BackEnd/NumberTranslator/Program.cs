namespace NumberTranslator
{
     class Program
    {
        static void Main(string[] args)
        {
            NumberTranslate translator = new NumberTranslate();

            Console.Write("Inserisci un numero da tradurre: ");
            string input = Console.ReadLine();
            if (int.TryParse(input, out int number))
            {
                string translation = translator.Translate(number);
                Console.WriteLine($"Il numero {number} tradotto in italiano è: {translation}");
            }
            else
            {
                Console.WriteLine("Input non valido. Per favore, inserisci un numero intero.");
            }

            Console.ReadLine();

        }
    }

}

namespace Esercizio_M4_W1_D2
{
       

        class Program
        {
            static void Main(string[] args)
            {
                Persona persona1 = new Persona("Mario", "Rossi", 30);
                Persona persona2 = new Persona("Luca", "Bianchi", 25);

                Console.WriteLine(persona1.GetDettagli());
                Console.WriteLine(persona2.GetDettagli());

                Console.WriteLine($"Nome: {persona1.GetNome()}");
                Console.WriteLine($"Cognome: {persona1.GetCognome()}");
                Console.WriteLine($"Età: {persona1.GetEta()}");

                Console.ReadLine();
            }
        }
}

using System.Xml;

namespace Esercizio_M4_W1_D5
{
    internal class Program
    {
        static void Main(string[] args)
        { 
            //inizio a prendere i dati dalla consolle:

            Console.WriteLine("Inserisci i dati del contribuente:");

            Console.Write("Nome: ");
            string nome = Console.ReadLine();

            Console.Write("Cognome: ");
            string cognome = Console.ReadLine();

            Console.Write("Data di Nascita (gg/mm/aaaa): ");
            DateTime dataNascita = DateTime.Parse(Console.ReadLine());

            Console.Write("Codice Fiscale: ");
            string codiceFiscale = Console.ReadLine();

            //il sesso lo gestisco con una "do...while" in modo da ripetere la scelta in caso essa sia sbagliata
            SessoEnum sesso;
            do
            {
                Console.Write("Sesso (Uomo/Donna): ");
                string sessoInput = Console.ReadLine();
                if (Enum.TryParse<SessoEnum>(sessoInput, true, out sesso))
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Inserire solo 'Uomo' o 'Donna'. Riprova.");
                }
            } while (true);

            Console.Write("Comune di Residenza: ");
            string comuneResidenza = Console.ReadLine();

            Console.Write("Reddito Annuale: ");
            decimal redditoAnnuale = decimal.Parse(Console.ReadLine());

            //una volta ottenuti tutti i dati ne creo un nuovo contribuente facendo partire il calcolo dell'imposta

            Contribuente contribuente = new Contribuente(nome, cognome, dataNascita, codiceFiscale, sesso, comuneResidenza, redditoAnnuale);

            decimal impostaDaPagare = contribuente.CalcolaImposta();

            //faccio stampare in consolle il risultato
            Console.WriteLine("==================================================");
            Console.WriteLine("CALCOLO DELL'IMPOSTA DA VERSARE:");
            Console.WriteLine($"Contribuente: {contribuente.Nome} {contribuente.Cognome},");
            Console.WriteLine($"nato il {contribuente.DataNascita.ToString("dd/MM/yyyy")} ({contribuente.Sesso}),");
            Console.WriteLine($"residente in {contribuente.ComuneResidenza},");
            Console.WriteLine($"codice fiscale: {contribuente.CodiceFiscale}");
            Console.WriteLine($"Reddito dichiarato: {contribuente.RedditoAnnuale}");
            Console.WriteLine($"IMPOSTA DA VERSARE: {impostaDaPagare}");
            Console.WriteLine("==================================================");

            Console.ReadLine();

        }
            
    }
}

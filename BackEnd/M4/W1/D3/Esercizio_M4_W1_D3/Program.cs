namespace Esercizio_M4_W1_D3
{
    public class ContoCorrente //esercizio n.1
    {
        public string NumeroConto { get; private set; }
        public string Intestatario { get; private set; }
        public decimal Saldo { get; private set; }
        public bool Aperto { get; private set; }

        public ContoCorrente(string numeroConto, string intestatario)
        {
            NumeroConto = numeroConto;
            Intestatario = intestatario;
            Saldo = 0;
            Aperto = false;
        }

        public bool ApriConto(decimal versamentoIniziale)
        {
            if (Aperto)
            {
                Console.WriteLine("Il conto è già aperto.");
                return false;
            }

            if (versamentoIniziale < 1000)
            {
                Console.WriteLine("Il versamento iniziale deve essere almeno di 1000 euro.");
                return false;
            }

            Saldo = versamentoIniziale;
            Aperto = true;
            Console.WriteLine($"Conto aperto con successo. Saldo iniziale: {Saldo} euro.");
            return true;
        }

        public void FaiVersamento(decimal importo)
        {
            if (!Aperto)
            {
                Console.WriteLine("Il conto non è ancora aperto.");
                return;
            }

            if (importo <= 0)
            {
                Console.WriteLine("L'importo del versamento deve essere positivo.");
                return;
            }

            Saldo += importo;
            Console.WriteLine($"Versamento di {importo} euro effettuato con successo. Saldo attuale: {Saldo} euro.");
        }

        public void FaiPrelevamento(decimal importo)
        {
            if (!Aperto)
            {
                Console.WriteLine("Il conto non è ancora aperto.");
                return;
            }

            if (importo <= 0)
            {
                Console.WriteLine("L'importo del prelevamento deve essere positivo.");
                return;
            }

            if (importo > Saldo)
            {
                Console.WriteLine("Fondi insufficienti.");
                return;
            }

            Saldo -= importo;
            Console.WriteLine($"Prelevamento di {importo} euro effettuato con successo. Saldo attuale: {Saldo} euro.");
        }
    }

    class Program
    {
        static void Main()
        {
            while (true)
            {
                Console.WriteLine("Seleziona un'opzione:");
                Console.WriteLine("1. Gestione Conto Corrente");
                Console.WriteLine("2. Ricerca Nome");
                Console.WriteLine("3. Somma e Media Array");
                Console.WriteLine("4. Esci");
                Console.Write("Opzione: ");
                string scelta = Console.ReadLine();

                switch (scelta)
                {
                    case "1":
                        GestioneContoCorrente();
                        break;
                    case "2":
                        RicercaNome();
                        break;
                    case "3":
                        SommaEMediaArray();
                        break;
                    case "4":
                        return;
                    default:
                        Console.WriteLine("Opzione non valida. Riprova.");
                        break;
                }
            }
        }

        static void GestioneContoCorrente()
        {
            Console.Write("Inserisci il numero del conto: ");
            string numeroConto = Console.ReadLine();
            Console.Write("Inserisci il nome dell'intestatario: ");
            string intestatario = Console.ReadLine();

            ContoCorrente conto = new ContoCorrente(numeroConto, intestatario);

            Console.Write("Inserisci l'importo per aprire il conto (almeno 1000 euro): ");
            decimal versamentoIniziale = decimal.Parse(Console.ReadLine());

            if (conto.ApriConto(versamentoIniziale))
            {
                while (true)
                {
                    Console.WriteLine("Seleziona un'opzione:");
                    Console.WriteLine("1. Fare un versamento");
                    Console.WriteLine("2. Fare un prelevamento");
                    Console.WriteLine("3. Uscire");
                    Console.Write("Opzione: ");
                    string scelta = Console.ReadLine();

                    if (scelta == "1")
                    {
                        Console.Write("Inserisci l'importo del versamento: ");
                        decimal importo = decimal.Parse(Console.ReadLine());
                        conto.FaiVersamento(importo);
                    }
                    else if (scelta == "2")
                    {
                        Console.Write("Inserisci l'importo del prelevamento: ");
                        decimal importo = decimal.Parse(Console.ReadLine());
                        conto.FaiPrelevamento(importo);
                    }
                    else if (scelta == "3")
                    {
                        break;
                    }
                    else
                    {
                        Console.WriteLine("Opzione non valida. Riprova.");
                    }
                }
            }
        }

        static void RicercaNome() //esercizio n.2
        {
            Console.Write("Quanti nomi vuoi inserire? ");
            int dimensione = int.Parse(Console.ReadLine());

            string[] nomi = new string[dimensione];
            for (int i = 0; i < dimensione; i++)
            {
                Console.Write($"Inserisci il nome {i + 1}: ");
                nomi[i] = Console.ReadLine();
            }

            Console.Write("Inserisci il nome da cercare: ");
            string nomeDaCercare = Console.ReadLine();

            bool trovato = false;
            foreach (string nome in nomi)
            {
                if (nome.Equals(nomeDaCercare, StringComparison.OrdinalIgnoreCase))
                {
                    trovato = true;
                    break;
                }
            }

            if (trovato)
            {
                Console.WriteLine($"Il nome {nomeDaCercare} è presente nell'array.");
            }
            else
            {
                Console.WriteLine($"Il nome {nomeDaCercare} non è presente nell'array.");
            }
        }

        static void SommaEMediaArray() //esercizio n.3
        {
            Console.Write("Inserisci la dimensione dell'array: ");
            int dimensione = int.Parse(Console.ReadLine());

            int[] numeri = new int[dimensione];
            for (int i = 0; i < dimensione; i++)
            {
                Console.Write($"Inserisci il numero {i + 1}: ");
                numeri[i] = int.Parse(Console.ReadLine());
            }

            int somma = 0;
            foreach (int numero in numeri)
            {
                somma += numero;
            }

            double media = (double)somma / dimensione;

            Console.WriteLine($"La somma di tutti i numeri è: {somma}");
            Console.WriteLine($"La media aritmetica di tutti i numeri è: {media}");
        }

    }
}

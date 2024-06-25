using Esercizio_M4_W2_D2.M4.W2.D2.Esercizio_M4_W2_D2_Console_App;

namespace Esercizio_M4_W2_D2_Console_App
{
    internal class Program
    {
        static void Main(string[] args)
        {
            CV cv = new CV();

            cv.InformazioniPersonali = new InformazioniPersonali
            {
                Nome = "Stefano",
                Cognome = "Porcellini",
                Telefono = "3277111875",
                Email = "stefano.porcellini@icloud.com",
            };

            cv.StudiEffettuati = new List<Studi>
            {
                new Studi
                {
                    Qualifica = "Diploma in Ragioneria",
                    Istituto = "ITC Aterno - Pescara",
                    Tipo = "Diploma di scuola superiore",
                    Dal = new DateTime(1995, 9, 1),
                    Al = new DateTime(1998,6,15)
                }
            };

            cv.Impieghi = new Impiego
            {
                Esperienze = new List<Esperienza>
                {
                    new Esperienza
                    {
                        Azienda = "Laser MUltimedia srl",
                        JobTitle = "Grafico e operatore di stampa digitale",
                        Dal = new DateTime(2002, 4, 1),
                        Al =new DateTime(2020, 3, 10),
                        Descrizione = "Modifica e creazione grafiche per l'invio in stampa digitale sia di piccolo che di grande formato",
                        Compiti = "Utilizzo software grafica Adobe, gestione stampanti laser e plotter, taglio carta, rifiniture sulle stampe (cordonature, plastificazioni, etc.)"
                    },
                    new Esperienza
                    {
                        Azienda = "La Tipografia srls",
                        JobTitle = "Grafico e operatore di stampa digitale",
                        Dal = new DateTime(2022,7, 1),
                        Al =new DateTime(2024, 1, 31),
                        Descrizione = "Modifica e creazione grafiche per l'invio in stampa digitale sia di piccolo che di grande formato",
                        Compiti = "Utilizzo software grafica Adobe, gestione stampanti laser e plotter, taglio carta, rifiniture sulle stampe (cordonature, plastificazioni, etc.)"
                    }

                }
            };

            StampaDettagliCVSuSchermo(cv);

            Console.ReadLine();
        }

        static void StampaDettagliCVSuSchermo(CV cv)
        {
            Console.WriteLine("==================================================");
            Console.WriteLine(cv);
            Console.WriteLine("==================================================");
        }
    }

}

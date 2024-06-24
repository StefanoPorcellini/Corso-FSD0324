namespace Esercizio_M4_W2_D1_Consolle_App
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<FoodItem> menu = new List<FoodItem> //creazione della lista del menu
            {
                new FoodItem("Coca Cola 150 ml", 2.50m),
                new FoodItem("Insalata di pollo", 5.20m),
                new FoodItem("Pizza Margherita", 10.00m),
                new FoodItem("Pizza 4 Formaggi", 12.50m),
                new FoodItem("Porzione Patatine fritte", 3.50m),
                new FoodItem("Insalata di riso", 8.00m),
                new FoodItem("Frutta di stagione", 5.00m),
                new FoodItem("Pizza fritta", 5.00m),
                new FoodItem("Piadina vegetariana", 6.00m),
                new FoodItem("Panino Hamburger", 7.90m)
            };

            List<FoodItem> order = new List<FoodItem>(); //creazione di una nuova lista per l'ordine

            bool ordering = true; //creo un boolen per interrompere l'ordine e stamparlo in caso di valore "false"

            while (ordering) //ciclo per stampare in console il menu e dare le scelte finchè la variabile "ordering" rimarrà "true"
            {
                Console.Clear();
                Console.WriteLine("==============MENU==============");
                for (int i = 0; i < menu.Count; i++)
                {
                    Console.WriteLine($"{i + 1}: {menu[i]}");
                }
                Console.WriteLine("11: Stampa conto finale e conferma");
                Console.WriteLine("=================================");
                Console.Write("Seleziona un'opzione: ");

                //leggo la scelta e, in base al numero compio le azioni:
                if (int.TryParse(Console.ReadLine(), out int choice) && choice > 0 && choice < 11)
                {
                    if (choice == 11)
                    {
                        ordering = false; // se è 11 cambio il valore di "ordering" iniziando il processo di chiusura del conto
                    }
                    else
                    {
                        //se la scelta è tra 1 e 10 aggiungo alla lista vuota "order" il prodotto scelto (prendendo come riferimento del menu l'indice calcolando il numeo scelto -1)
                        order.Add(menu[choice - 1]);
                        Console.WriteLine($"{menu[choice - 1].Name} aggiunto al conto.");
                        Console.WriteLine("Premi un tasto per continuare...");
                        Console.ReadKey();
                    }
                }
                    //in caso di sceltra diversa tra 1 e 11 faccio scrivere un messaggio di errore
                    else
                    {
                        Console.WriteLine("Selezione non valida. Scrivi un numero da 1 a 11.");
                        Console.WriteLine("Premi un tasto per continuare...");
                        Console.ReadKey();
                    }
                }
            //infine faccio partire il metodo per calcolare il totale
            PrintBill(order);
        }
    
        //metodo per calcolare il totale
        static void PrintBill(List<FoodItem> order)
        {
                decimal total = 0;
                Console.Clear();
                Console.WriteLine("==============CONTO FINALE==============");

                foreach (var item in order) //per ogni prodotto nella lista "order" dove vi sono tutti i prodotti ordinati
                {
                 Console.WriteLine($"{item.Name}: € {item.Price}");
                 total += item.Price;
                } //aggiungo il prezzo alla variabile "total" precedentemente dichiarata a 0
                
                // aggiungo anche il servizio al tavolo di 3€
                decimal serviceCost = 3.00m;
                total += serviceCost;

                //e ne stampo il totale
                Console.WriteLine("========================================");
                Console.WriteLine($"Servizio al tavolo: € {serviceCost}");
                Console.WriteLine($"Totale: € {total}");
                Console.WriteLine("========================================");
        }
    }
}
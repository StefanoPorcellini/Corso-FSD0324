namespace Esercizio_M4_W1_D4
{
    
    public static class Utente
    {
        public static string Username { get; private set; }
        public static DateTime? LoginTime { get; private set; }
        public static List<DateTime> Accessi { get; private set; } = new List<DateTime>();

        public static bool IsLoggedIn
        {
            get { return !string.IsNullOrEmpty(Username); }
        }

        public static bool Login(string username, string password, string confirmPassword)
        {
            if (string.IsNullOrEmpty(username) || password != confirmPassword)
            {
                return false;
            }

            Username = username;
            LoginTime = DateTime.Now;
            Accessi.Add(LoginTime.Value);
            return true;
        }

        public static void Logout()
        {
            Username = null;
            LoginTime = null;
        }

        public static DateTime? VerificaLogin()
        {
            return LoginTime;
        }

        public static List<DateTime> ListaAccessi()
        {
            return new List<DateTime>(Accessi);
        }
    }

    class Program
    {
        static void Main()
        {
            while (true)
            {
                Console.WriteLine("===============OPERAZIONI==============");
                Console.WriteLine("Scegli l'operazione da effettuare:");
                Console.WriteLine("1.: Login");
                Console.WriteLine("2.: Logout");
                Console.WriteLine("3.: Verifica ora e data di login");
                Console.WriteLine("4.: Lista degli accessi");
                Console.WriteLine("5.: Esci");
                Console.WriteLine("========================================");
                Console.Write("Opzione: ");
                string scelta = Console.ReadLine();

                switch (scelta)
                {
                    case "1":
                        Login();
                        break;
                    case "2":
                        Logout();
                        break;
                    case "3":
                        VerificaLogin();
                        break;
                    case "4":
                        ListaAccessi();
                        break;
                    case "5":
                        return;
                    default:
                        Console.WriteLine("Opzione non valida. Riprova.");
                        break;
                }
            }
        }

        static void Login()
        {
            Console.Write("Inserisci username: ");
            string username = Console.ReadLine();
            Console.Write("Inserisci password: ");
            string password = Console.ReadLine();
            Console.Write("Conferma password: ");
            string confirmPassword = Console.ReadLine();

            if (Utente.Login(username, password, confirmPassword))
            {
                Console.WriteLine("Login effettuato con successo.");
            }
            else
            {
                Console.WriteLine("Errore nel login. Verifica le credenziali e riprova.");
            }
        }

        static void Logout()
        {
            if (Utente.IsLoggedIn)
            {
                Utente.Logout();
                Console.WriteLine("Logout effettuato con successo.");
            }
            else
            {
                Console.WriteLine("Errore: nessun utente è attualmente loggato.");
            }
        }

        static void VerificaLogin()
        {
            if (Utente.IsLoggedIn)
            {
                DateTime? loginTime = Utente.VerificaLogin();
                Console.WriteLine($"Utente loggato alle: {loginTime.Value}");
            }
            else
            {
                Console.WriteLine("Errore: nessun utente è attualmente loggato.");
            }
        }

        static void ListaAccessi()
        {
            if (Utente.Accessi.Count > 0)
            {
                Console.WriteLine("Lista degli accessi:");
                foreach (var accesso in Utente.Accessi)
                {
                    Console.WriteLine(accesso);
                }
            }
            else
            {
                Console.WriteLine("Nessun accesso registrato.");
            }
        }
    }

}

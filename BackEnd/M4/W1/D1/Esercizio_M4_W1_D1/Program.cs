class Program
{
    public static void Main(string[] args)
    {
        Atleta a = new Atleta();
        a.Nome = "Jannik";
        a.Cognome = "Sinner";
        a.Specialita = "Tennis";
        a.descrivi();

        Animale animale = new Animale();
        animale.Nome = "Pedro";
        animale.Genere = "Gatto";
        animale.Razza = "Meticcio";
        animale.descrivi();

        Dipendente dipendente = new Dipendente();
        dipendente.Nome = "Pippo";
        dipendente.Cognome = "Pallino";
        dipendente.Ruolo = "operaio";
        dipendente.descrivi();
        
        Veicolo veicolo = new Veicolo();
        veicolo.Tipo = "Automobile";
        veicolo.Nome = "Corsa";
        veicolo.Casa = "Opel";
        veicolo.descrivi();
    }
}
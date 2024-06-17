class Program
{
    public static void Main(string[] args)
    {
        Atleta a = new Atleta("Jannik", "Sinner", "Tennis");
        

        Animale animale = new Animale("Pedro", "Gatto", "Meticcio");
        

        Dipendente dipendente = new Dipendente("Pippo", "Pallino", "Operaio");
        
        
        Veicolo veicolo = new Veicolo("Automobile", "Corsa", "Opel");

        a.descrivi();
        animale.descrivi();
        dipendente.descrivi();
        veicolo.descrivi();

    }
}
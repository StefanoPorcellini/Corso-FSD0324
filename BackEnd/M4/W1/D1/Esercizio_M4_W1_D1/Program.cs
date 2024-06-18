class Program
{
    public static void Main(string[] args)
    {
        Atleta a = new Atleta("Jannik", "Sinner", "Tennis");
        

        Animale animale = new Animale("Pedro", "Gatto", "Meticcio");
        

        Dipendente dipendente = new Dipendente("Pippo", "Pallino", "Operaio");
        
        
        Veicolo veicolo = new Veicolo("Automobile", "Corsa", "Opel");

        Console.WriteLine( a.descrivi());
        Console.WriteLine(animale.descrivi());
        Console.WriteLine(dipendente.descrivi());
        Console.WriteLine(veicolo.descrivi());
        Console.ReadLine();

    }
}
using System;

class Animale
{
    string? nome;
    string? genere;
    string? razza;

    public string Nome { get { return nome; } set { nome = value; } }
    public string Genere { get { return genere; } set { genere = value; } }
    public string Razza { get { return razza; } set { razza = value; } }

    public void descrivi()
    {
        Console.WriteLine("Il mio nome è " + nome + ", sono un " + genere + " di razza " + razza);
    }
}
using System;

class Atleta
{
    string nome;
    string cognome;
    string specialita;

    public string Nome { get { return nome; } set { nome = value; } }
    public string Cognome { get { return cognome; } set { cognome = value; } }
    public string Specialita { get { return specialita; } set { specialita = value; } }

    public void descrivi()
    {
        Console.WriteLine("Il mio nome è " + nome + " " + cognome + " e pratico la seguente specialità: " + specialita);
    }
}

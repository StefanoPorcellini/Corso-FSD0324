using System;

class Dipendente
{
    string nome;
    string cognome;
    string ruolo;

    public string Nome { get { return nome; } set { nome = value; } }
    public string Cognome { get { return cognome; } set { cognome = value; } }
    public string Ruolo { get { return ruolo; } set { ruolo = value; } }

    public void descrivi()
    {
        Console.WriteLine("Il mio nome è " + nome + " " + cognome + " ed il mio ruolo è: " + ruolo);
    }
}
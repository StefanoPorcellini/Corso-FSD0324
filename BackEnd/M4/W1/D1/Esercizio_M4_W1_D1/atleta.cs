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
        return $"Mi chiamo {nome} {cognome} e pratico il seguente sport: {specialita}";
    }
}

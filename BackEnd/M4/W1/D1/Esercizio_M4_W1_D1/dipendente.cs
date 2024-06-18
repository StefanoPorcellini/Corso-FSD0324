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
        return $"Mi chiamo {nome} {cognome}, il mio ruolo è {ruolo}";
    }
}